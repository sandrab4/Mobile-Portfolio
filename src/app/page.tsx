import { Inter } from 'next/font/google'
import ParallaxComponent from '@/components/Parallax';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function MyHomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}