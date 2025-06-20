
import React from 'react';
import { ArrowRight, BookOpen, Users, Award, MessageCircle } from 'lucide-react';

interface HeroProps {
  onChatOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onChatOpen }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-teal-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Pon Vidyashram
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mt-2">
              Group of Senior Secondary Schools
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nurturing Excellence, Inspiring Innovation, Building Tomorrow's Leaders
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="text-teal-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-white/80">Years of Excellence</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">5000+</h3>
              <p className="text-white/80">Happy Students</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Award className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
              <p className="text-white/80">Awards Won</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={onChatOpen}
              className="group px-8 py-4 backdrop-blur-md bg-white/10 text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Chat with PV SmartBot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
