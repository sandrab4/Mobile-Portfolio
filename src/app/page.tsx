import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

export default function MyHomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
