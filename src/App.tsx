
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/about/AboutSection';
import ServicesSection from './components/services/ServicesSection';
import RoadmapSection from './components/roadmap/RoadmapSection';
import ContactSection from './components/contact/ContactSection';
import TermsandCondition from "./components/Terms&Condition/Terms";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="fixed inset-0 bg-gradient-radial from-background-light to-background-dark -z-10" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
      
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RoadmapSection />
        <ContactSection />
        <TermsandCondition/>
      </main>
    </div>
  );
}

export default App;