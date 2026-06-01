import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyStratum from '../components/WhyStratum';
import BentoSymptoms from '../components/BentoSymptoms';
import Solution from '../components/Solution';
import Warranty from '../components/Warranty';
import FAQ from '../components/FAQ';
import LeadCapture from '../components/LeadCapture';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stratum-dark text-slate-200">
      <Navbar />
      <Hero />
      <Stats />
      <WhyStratum />
      <BentoSymptoms />
      <Solution />
      <Warranty />
      <FAQ />
      <LeadCapture />
      <Footer />
    </main>
  );
}
