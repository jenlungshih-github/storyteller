
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';
import { getSavedStories, updateStoryImage } from '@/services/story-service';
import type { Story } from '@/types/story';
import { placeholderImages } from '@/lib/content';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, WandSparkles } from 'lucide-react';
import { generateStoryImage } from '@/ai/flows/generate-story-image';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function SavedStoriesPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [generatingImageId, setGeneratingImageId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStories() {
      try {
        setLoading(true);
        const savedStories = await getSavedStories();
        setStories(savedStories);
      } catch (error) {
        console.error("Failed to fetch saved stories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStories();
  }, []);

  const handleGenerateImage = async (story: Story) => {
    if (!story.id) return;
    setGeneratingImageId(story.id);
    try {
      const result = await generateStoryImage({ summary: story.summary });
      if (result.imageUrl) {
        await updateStoryImage(story.id, result.imageUrl);
      
        setStories(prevStories => 
          prevStories.map(s => 
            s.id === story.id ? { ...s, imageUrl: result.imageUrl } : s
          )
        );
      } else {
        throw new Error("Image generation failed to return a URL.");
      }

    } catch (error) {
        console.error("Failed to generate image:", error);
        toast({
            title: t.common.error.title,
            description: "There was a problem generating the cover image.",
            variant: 'destructive',
        });
    } finally {
        setGeneratingImageId(null);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.savedStories.title}
        description={t.savedStories.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="aspect-[4/3] w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : stories.length === 0 ? (
          <div className="text-center text-muted-foreground py-10">
            <p>{t.savedStories.noStories}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stories.map((story, index) => (
              <Card key={story.id} className="h-full flex flex-col justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <CardHeader>
                        <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg">
                          {generatingImageId === story.id ? (
                            <div className="w-full h-full bg-muted animate-pulse flex flex-col items-center justify-center">
                                <WandSparkles className="h-10 w-10 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground mt-2">Generating...</p>
                            </div>
                          ) : (
                            <Image
                              src={story.imageUrl || placeholderImages[(index + t.library.examples.length) % placeholderImages.length].imageUrl}
                              alt={story.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className={cn("object-cover", !story.imageUrl && "opacity-70")}
                            />
                          )}
                        </div>
                        <CardTitle className="font-headline text-xl">{story.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{story.summary}</CardDescription>
                      </CardHeader>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-3xl">{story.title}</DialogTitle>
                      <DialogDescription>{story.summary}</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh] pr-4">
                      <div className="whitespace-pre-wrap font-body text-base py-4 leading-relaxed">
                        {story.fullText}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                <CardFooter>
                    {!story.imageUrl && (
                        <Button 
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() => handleGenerateImage(story)}
                            disabled={!!generatingImageId}
                        >
                            {generatingImageId === story.id ? <WandSparkles className="animate-pulse" /> : <ImageIcon />}
                            <span>{generatingImageId === story.id ? 'Generating...' : 'Generate Cover'}</span>
                        </Button>
                    )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
