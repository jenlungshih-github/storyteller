import type { ReactNode } from 'react';
import { SidebarTrigger } from './ui/sidebar';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="flex-shrink-0 bg-card/50 border-b p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden"/>
            <div>
                <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">
                    {title}
                </h1>
                {description && (
                    <p className="text-muted-foreground mt-1">
                        {description}
                    </p>
                )}
            </div>
        </div>
        {children && <div>{children}</div>}
      </div>
    </header>
  );
}
