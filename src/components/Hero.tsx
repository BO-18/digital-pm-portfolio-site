import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {t('hero.title_first')} <span className="text-primary">{t('hero.title_last')}</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl">
                {t('hero.role')}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
                <a href="#experience" className="flex items-center">
                  {t('hero.cta_view')} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-primary/20 bg-background/50 backdrop-blur-sm" asChild>
                <a href={t('hero.cv_url')} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {t('hero.cta_download')} <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground pt-4">
              <a href="https://www.linkedin.com/in/brahim-ouali1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:ouali.brahim1@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                <Mail className="h-5 w-5" /> ouali.brahim1@gmail.com
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-700">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-2xl bg-white p-4">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FPUjy8TWWdkUgMLoZII1XL4ceKqG3%2FChatGPTImage25fvr202618_52_53__c7dd8483.png?alt=media&token=10b9a393-3197-4094-a78e-b5b0a13dc12c" 
                alt="Brahim Ouali - Digital Project Manager"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-0" />
    </section>
  );
};