import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Users, Zap, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = t('skills.categories');
  const icons = [
    <Layers className="h-6 w-6 text-primary" />,
    <Zap className="h-6 w-6 text-primary" />,
    <Users className="h-6 w-6 text-primary" />
  ];

  const certifications = [
    { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org' },
    { name: 'Google Ads - Video Advertising', issuer: 'Google' },
    { name: 'Google Ads - Search Advertising', issuer: 'Google' },
    { name: 'Google Ads - App Advertising', issuer: 'Google' }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('skills.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category: any, index: number) => (
            <Card key={index} className="border-border/50 bg-background hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-xl bg-primary/5 w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  {icons[index]}
                </div>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill: string) => (
                    <li key={skill} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="certifications" className="pt-12 border-t border-border/50">
          <div className="flex items-center gap-4 mb-10">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">{t('skills.certifications_title')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-4 rounded-xl border border-border/50 bg-background/50 flex flex-col gap-1">
                <p className="font-bold text-foreground text-sm leading-tight">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};