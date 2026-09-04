import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
