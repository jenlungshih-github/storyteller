'use client';

import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Feather,
  Home,
  Lightbulb,
  MessageSquare,
  PenSquare,
  Sparkles,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useLanguage } from '@/hooks/use-language';
import { LanguageSwitcher } from './language-switcher';

export function AppSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const menuItems = [
    { href: '/', label: t.sidebar.home, icon: Home },
    { href: '/prompts', label: t.sidebar.prompts, icon: Lightbulb },
    { href: '/expander', label: t.sidebar.expander, icon: Sparkles },
    { href: '/library', label: t.sidebar.library, icon: BookOpen },
    { href: '/skills', label: t.sidebar.skills, icon: Feather },
    { href: '/feedback', label: t.sidebar.feedback, icon: MessageSquare },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1.5 text-primary-foreground">
            <PenSquare size={24} />
          </div>
          <h1 className="font-headline text-2xl font-bold text-primary-foreground group-data-[collapsible=icon]:hidden">
            {t.appName}
          </h1>
          <div className="flex-1" />
          <SidebarTrigger className="hidden md:flex" />
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <a href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarFooter>
        <LanguageSwitcher />
      </SidebarFooter>
    </Sidebar>
  );
}
