import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export const Education = () => {
  const { t } = useLanguage();
  const education = t('education.items');

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="h-10 w-10 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('education.title')}</h2>
        </div>

        <div className="space-y-12">
          {education.map((item: any, index: number) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <div className="space-y-2">
                <p className="text-sm font-bold text-primary tracking-wider uppercase">{item.period}</p>
                <h3 className="text-2xl font-bold text-foreground">{item.school}</h3>
                <p className="text-xl font-medium text-muted-foreground">{item.degree}</p>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};