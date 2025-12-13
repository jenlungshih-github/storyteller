'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  story: z.string().min(20, 'Your story or feedback needs to be at least 20 characters long.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function FeedbackPage() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      story: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log('Feedback submitted:', values);
    toast({
      title: t.feedback.success.title,
      description: t.feedback.success.description,
    });
    form.reset();
  }

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.feedback.title}
        description={t.feedback.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Card className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>{t.feedback.cardTitle}</CardTitle>
                <CardDescription>{t.feedback.cardDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.feedback.email.label}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t.feedback.email.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.feedback.story.label}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.feedback.story.placeholder} className="min-h-[200px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  <Send />
                  {t.feedback.submitButton}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </main>
    </div>
  );
}
