'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateStoryPrompts } from '@/ai/flows/generate-story-prompts';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, WandSparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';

const formSchema = z.object({
  theme: z.string().min(2, 'Theme must be at least 2 characters.'),
  keywords: z.string().min(2, 'Keywords must be at least 2 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function PromptsPage() {
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: '',
      keywords: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setGeneratedPrompt('');
    try {
      const result = await generateStoryPrompts({
        theme: values.theme,
        keywords: values.keywords,
      });
      setGeneratedPrompt(result.prompt);
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
  }

  return (
    <div className="flex flex-col h-full">
       <PageHeader
        title={t.prompts.title}
        description={t.prompts.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>{t.prompts.cardTitle}</CardTitle>
                  <CardDescription>{t.prompts.cardDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.prompts.theme.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.prompts.theme.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.prompts.keywords.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.prompts.keywords.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? <WandSparkles className="animate-pulse" /> : <Lightbulb />}
                    {loading ? t.prompts.buttonLoading : t.prompts.button}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <Card className="flex flex-col bg-accent/50">
            <CardHeader>
                <CardTitle>{t.prompts.result.title}</CardTitle>
                <CardDescription>{t.prompts.result.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
            {loading ? (
                <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ) : generatedPrompt ? (
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-accent-foreground">
                    {generatedPrompt}
                </blockquote>
            ) : (
                <div className="text-center text-muted-foreground">
                    <Lightbulb className="mx-auto h-12 w-12" />
                    <p className="mt-4">{t.prompts.result.placeholder}</p>
                </div>
            )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
