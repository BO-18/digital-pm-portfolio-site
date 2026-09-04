import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export const Experience = () => {
  const { t } = useLanguage();
  const experiences = t('experience.items');

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('experience.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t('experience.subtitle')}
            </p>
          </div>
          <Briefcase className="h-12 w-12 text-primary/20 hidden md:block" />
        </div>

        <div className="grid gap-8">
          {experiences.map((exp: any, index: number) => (
            <Card key={index} className="border-none shadow-none bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-xl font-medium text-primary">{exp.role}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 border-primary/20 text-primary-foreground font-semibold bg-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};