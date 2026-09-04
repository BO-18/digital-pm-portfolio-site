import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Mail, Linkedin, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { lang, setLang, t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.certifications'), href: '#certifications' },
    { name: t('nav.formation'), href: '#education' },
  ];

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-2'
          : 'bg-transparent border-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-primary">
          Brahim.O
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l pl-8">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all uppercase"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang}
            </button>
            <a href="mailto:ouali.brahim1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/brahim-ouali1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase"
          >
            {lang}
          </button>
          <button
            className="p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 py-4 border-t">
              <a href="mailto:ouali.brahim1@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" /> Email
              </a>
              <a href="https://www.linkedin.com/in/brahim-ouali1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};