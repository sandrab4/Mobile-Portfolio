import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function MyHomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-10 py-15">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
