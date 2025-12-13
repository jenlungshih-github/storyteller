'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { placeholderImages } from '@/lib/content';

export default function LibraryPage() {
  const { t } = useLanguage();
  const examples = t.library.examples;

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.library.title}
        description={t.library.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {examples.map((example, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="relative aspect-[4/3] mb-4">
                      <Image
                        src={placeholderImages[index % placeholderImages.length].imageUrl}
                        alt={example.title}
                        fill
                        className="rounded-t-lg object-cover"
                        data-ai-hint={placeholderImages[index % placeholderImages.length].imageHint}
                      />
                    </div>
                    <CardTitle className="font-headline text-xl">{example.title}</CardTitle>
                    <CardDescription>{example.summary}</CardDescription>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-headline text-3xl">{example.title}</DialogTitle>
                  <DialogDescription>{example.summary}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="whitespace-pre-wrap font-body text-base py-4 leading-relaxed">
                    {example.fullText}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
    </div>
  );
}
