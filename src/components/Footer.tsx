import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('footer.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              {t('footer.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="lg" className="rounded-full px-8 h-12" asChild>
                <a href="mailto:ouali.brahim1@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> {t('footer.cta_email')}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-primary/20" asChild>
                <a href="https://www.linkedin.com/in/brahim-ouali1" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <button 
              onClick={scrollToTop}
              className="p-4 rounded-full bg-background border border-border shadow-lg hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
            <div className="text-sm text-muted-foreground space-y-1 text-center md:text-right">
              <p className="font-bold text-foreground">Brahim Ouali</p>
              <p>{t('hero.role')}</p>
              <p className="pt-4 opacity-50">© {new Date().getFullYear()} - {t('footer.created')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
