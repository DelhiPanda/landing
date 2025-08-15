import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Presentation from '@/components/Presentation';
import ValueProposition from '@/components/ValueProposition';
import MissionValues from '@/components/MissionValues';
import WhyChooseUs from '@/components/WhyChooseUs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <ValueProposition />
        <MissionValues />
        <WhyChooseUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
