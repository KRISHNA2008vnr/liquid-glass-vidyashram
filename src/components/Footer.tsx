
import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const campuses = [
    'Chromepet Campus',
    'Pallavaram Campus',
    'Tambaram Campus',
    'Chitlapakkam Campus'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative backdrop-blur-lg bg-white/5 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pon Vidyashram</h3>
                <p className="text-white/70 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Nurturing young minds for over 25 years with a commitment to academic excellence, 
              character building, and holistic development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Campuses */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Campuses</h4>
            <ul className="space-y-3">
              {campuses.map((campus, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {campus}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-white/80 text-sm">
                    No. 123, GST Road<br />
                    Chromepet, Chennai - 600044
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-400 flex-shrink-0" size={16} />
                <p className="text-white/80 text-sm">+91 44 2222 3333</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400 flex-shrink-0" size={16} />
                <p className="text-white/80 text-sm">info@ponvidyashram.edu.in</p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-6 space-y-2">
              <button className="w-full py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg text-sm font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300">
                Schedule Campus Tour
              </button>
              <button className="w-full py-2 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300">
                Chat with PV SmartBot
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Pon Vidyashram Group of Schools. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-16 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-lg"></div>
    </footer>
  );
};

export default Footer;
