
import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AcademicsSection from '../components/AcademicsSection';
import InfrastructureSection from '../components/InfrastructureSection';
import AdmissionsSection from '../components/AdmissionsSection';
import AchievementsSection from '../components/AchievementsSection';
import EventsGallery from '../components/EventsGallery';
import StudentLife from '../components/StudentLife';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ChatBot from '../components/ChatBot';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'infrastructure', 'admissions', 'achievements', 'events', 'student-life', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero onChatOpen={() => setIsChatOpen(true)} />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="academics">
          <AcademicsSection />
        </section>
        
        <section id="infrastructure">
          <InfrastructureSection />
        </section>
        
        <section id="admissions">
          <AdmissionsSection />
        </section>
        
        <section id="achievements">
          <AchievementsSection />
        </section>
        
        <section id="events">
          <EventsGallery />
        </section>
        
        <section id="student-life">
          <StudentLife />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      {/* Floating ChatBot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50 backdrop-blur-sm border border-white/20"
      >
        <MessageCircle size={24} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      </button>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
