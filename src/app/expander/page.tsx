
'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { expandStoryOutline } from '@/ai/flows/expand-story-outline';
import { saveStory } from '@/services/story-service';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Sparkles, WandSparkles, Save } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';

function StoryExpanderContent() {
  const searchParams = useSearchParams();
  const initialOutline = searchParams.get('outline') || '';
  const [outline, setOutline] = useState(initialOutline);
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleExpand = async () => {
    if (!outline.trim()) {
      toast({
        title: t.expander.error.title,
        description: t.expander.error.description,
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    setStory('');
    try {
      const result = await expandStoryOutline({ outline });
      setStory(result.story);
    } catch (error) {
      console.error(error);
      toast({
        title: t.common.error.title,
        description: t.common.error.description,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!story || !outline) {
      toast({
        title: t.expander.error.title,
        description: "Cannot save without a story and an outline.",
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      const titleLine = outline.split('\n').find(line => line.startsWith('Character:')) || '';
      const characterName = titleLine.replace('Character: ', '').split(',')[0].trim();
      
      const newStory = {
        title: characterName || t.expander.newStory,
        summary: outline,
        fullText: story,
      };

      await saveStory(newStory);

      toast({
        title: t.expander.saveSuccess.title,
        description: t.expander.saveSuccess.description,
        action: (
          <Button asChild variant="secondary">
            <Link href="/saved-stories">{t.expander.saveSuccess.link}</Link>
          </Button>
        ),
      });
    } catch (error) {
      console.error("Failed to save story:", error);
      toast({
        title: t.common.error.title,
        description: t.common.error.description,
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.expander.title}
        description={t.expander.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{t.expander.outline.title}</CardTitle>
              <CardDescription>{t.expander.outline.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={outline}
                onChange={(e) => setOutline(e.target.value)}
                placeholder={t.expander.outline.placeholder}
                className="min-h-[300px] text-base"
              />
              <Button onClick={handleExpand} disabled={loading || saving} className="w-full">
                {loading ? <WandSparkles className="animate-pulse" /> : <Sparkles />}
                {loading ? t.expander.buttonLoading : t.expander.button}
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{t.expander.result.title}</CardTitle>
              <CardDescription>{t.expander.result.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              {loading && (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/6" />
                  <Skeleton className="h-4 w-full" />
                </div>
              )}
              {story && !loading && (
                <div className="prose prose-lg max-w-none text-foreground whitespace-pre-wrap font-body">
                    {story}
                </div>
              )}
              {!loading && !story && (
                <div className="text-center text-muted-foreground py-10">
                  <WandSparkles className="mx-auto h-12 w-12" />
                  <p className="mt-4">{t.expander.result.placeholder}</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} variant="outline" disabled={!story || loading || saving}>
                <Save />
                {saving ? t.expander.saveButtonLoading : t.expander.saveButton}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function StoryExpanderPage() {
    return (
        <Suspense fallback={<div className="p-6">Loading...</div>}>
            <StoryExpanderContent />
        </Suspense>
    )
}
