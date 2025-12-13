'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PenSquare } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';

const formSchema = z.object({
  characterName: z.string().min(2, 'Name must be at least 2 characters.'),
  characterTraits: z.string().min(10, 'Describe the character a bit more.'),
  setting: z.string().min(10, 'Setting needs to be at least 10 characters.'),
  problem: z.string().min(10, 'The problem should be at least 10 characters.'),
  climax: z.string().min(10, 'The climax needs more detail.'),
  resolution: z.string().min(10, 'The resolution needs more detail.'),
  moral: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const router = useRouter();
  const { t } = useLanguage();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: '',
      characterTraits: '',
      setting: '',
      problem: '',
      climax: '',
      resolution: '',
      moral: '',
    },
  });

  function onSubmit(values: FormValues) {
    const outline = `
Character: ${values.characterName}, who is ${values.characterTraits}.
Setting: The story takes place in ${values.setting}.
Problem: ${values.problem}.
Climax: ${values.climax}.
Resolution: ${values.resolution}.
${values.moral ? `Moral of the story: ${values.moral}` : ''}
    `.trim();

    router.push(`/expander?outline=${encodeURIComponent(outline)}`);
  }

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.interactiveTemplate.title}
        description={t.interactiveTemplate.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Card className="max-w-4xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>{t.interactiveTemplate.cardTitle}</CardTitle>
                <CardDescription>{t.interactiveTemplate.cardDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="characterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.interactiveTemplate.characterName.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.interactiveTemplate.characterName.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="characterTraits"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.interactiveTemplate.characterTraits.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.interactiveTemplate.characterTraits.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="setting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.interactiveTemplate.setting.label}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.interactiveTemplate.setting.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4 rounded-lg border p-4">
                  <h3 className="font-headline text-lg">{t.interactiveTemplate.plotPoints}</h3>
                  <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.interactiveTemplate.problem.label}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t.interactiveTemplate.problem.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="climax"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.interactiveTemplate.climax.label}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t.interactiveTemplate.climax.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="resolution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.interactiveTemplate.resolution.label}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t.interactiveTemplate.resolution.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="moral"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.interactiveTemplate.moral.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.interactiveTemplate.moral.placeholder} {...field} />
                      </FormControl>
                      <FormDescription>{t.interactiveTemplate.moral.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  <PenSquare />
                  {t.interactiveTemplate.submitButton}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </main>
    </div>
  );
}
