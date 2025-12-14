
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { getSavedStories } from '@/services/story-service';
import type { Story } from '@/types/story';
import { placeholderImages } from '@/lib/content';
import { Skeleton } from '@/components/ui/skeleton';

export default function SavedStoriesPage() {
  const { t } = useLanguage();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

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
              <Dialog key={story.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <CardHeader>
                      <div className="relative aspect-[4/3] mb-4">
                        <Image
                          src={placeholderImages[(index + t.library.examples.length) % placeholderImages.length].imageUrl}
                          alt={story.title}
                          fill
                          className="rounded-t-lg object-cover"
                          data-ai-hint={placeholderImages[(index + t.library.examples.length) % placeholderImages.length].imageHint}
                        />
                      </div>
                      <CardTitle className="font-headline text-xl">{story.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{story.summary}</CardDescription>
                    </CardHeader>
                  </Card>
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
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
