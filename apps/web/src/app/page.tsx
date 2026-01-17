import { Hero } from '@/components/sections/Hero';
import { Timeline } from '@/components/sections/Timeline';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
