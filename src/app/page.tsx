import ParallaxComponent from '@/components/Parallax';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandra Barron',
  description: 'Portfolio By Sandra Barron',
};

export default function MyHomePage() {
  return (
    <html>
      <body>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Home />
      <Skills />
      <Projects />
      <Contact />
      </div>
      </body>
    </html>
  );
}