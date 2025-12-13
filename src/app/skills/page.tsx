'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/hooks/use-language';
import PageHeader from '@/components/page-header';

export default function SkillsPage() {
  const { t } = useLanguage();
  const skills = t.skills.skillList;

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={t.skills.title}
        description={t.skills.description}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {skills.map((skill, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-headline text-left hover:no-underline">
                  {skill.title}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed space-y-4 pt-2">
                  <p>{skill.explanation}</p>
                  <div className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    <h4 className="font-bold not-italic text-foreground mb-2">{t.skills.example}</h4>
                    <p><strong>{t.skills.before}:</strong> {skill.example.before}</p>
                    <p><strong>{t.skills.after}:</strong> {skill.example.after}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
