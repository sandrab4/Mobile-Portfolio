import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandra Barron',
  description: 'Portfolio By Sandra Barron',
};

export default function Home() {
  return (
    <html>
      <body>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      </div>
      </body>
    </html>
  );
};