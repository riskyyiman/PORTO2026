'use client';

import { Navbar } from '../../src/components/layout/Navbar';
import { Footer } from '../../src/components/layout/Footer';
import { DotBackground } from '../../src/components/ui/DotBackground';
import { Hero } from '../../src/components/sections/Hero';
import { About } from '../../src/components/sections/About';
import { Projects } from '../../src/components/sections/Projects';
import { TechStack } from '../../src/components/sections/TechStack';
import { Experience } from '../../src/components/sections/Experience';
import { Contact } from '../../src/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <DotBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
