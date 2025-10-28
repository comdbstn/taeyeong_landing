import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import PartnersSection from './components/sections/PartnersSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <PortfolioSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
