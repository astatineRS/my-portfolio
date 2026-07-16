import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Startups from '@/components/Startups';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="startups" className="section-alt">
          <Startups />
        </section>
        <section id="capabilities">
          <Skills />
        </section>
        <section id="milestones" className="section-alt">
          <Achievements />
        </section>
        <section id="foundation">
          <Projects />
        </section>
        <section id="interests" className="section-alt">
          <Hobbies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
