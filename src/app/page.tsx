'use client';

import { Navbar } from '../../src/components/layout/Navbar';
import { Footer } from '../../src/components/layout/Footer';
import { DotBackground } from '../../src/components/ui/DotBackground';
import { Hero } from '../../src/components/sections/Hero';
import { About } from '../../src/components/sections/About';
import { Projects } from '../../src/components/sections/Projects';
import { TechStack } from '../../src/components/sections/TechStack';
import { Contact } from '../../src/components/sections/Contact';
import { Certificates } from '../components/sections/Certificates';
import { ScrollIndicator } from '../components/ui/ScrollIndicator';
import { Chatbot } from '../../src/components/ui/Chatbot';
import { VisitorCounter } from '../components/ui/VisitorCounter';
import { Feedback } from '../components/sections/Feedback';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DotBackground />
      <Navbar />
      <ScrollIndicator />

      {/* Main Content */}
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="feedback">
          <Feedback />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
      {/* Widget Melayang */}
      <div className="fixed bottom-6 left-6 z-[9999]">
        <VisitorCounter />
      </div>
      <Chatbot />
    </main>
  );
}
