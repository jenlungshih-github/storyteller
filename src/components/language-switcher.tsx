'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="p-2 group-data-[collapsible=icon]:p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:justify-center">
                <Globe />
                <span className="group-data-[collapsible=icon]:hidden">
                    {language === 'en' ? 'Language' : '语言'}
                </span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="right" className="w-48">
          <DropdownMenuItem onClick={() => setLanguage('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage('zh')}>
            中文 (Chinese)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
