
import React from 'react';
import { Target, Eye, Heart, Shield, Users, BookHeart } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Pon Vidyashram</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A legacy of educational excellence spanning over 23 years, affiliated with CBSE and dedicated to nurturing future leaders
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To impart holistic education for the development of future leaders of this nation 
                through an efficient and smart team of teachers, connecting students to the 
                "unfailing source" of knowledge and wisdom.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <div className="text-white/80 leading-relaxed space-y-2">
                <p>• To provide excellent learning experience through talented staff and latest technology</p>
                <p>• To value and develop different talents of students for future challenges</p>
                <p>• To help students reach their highest level of academic performance</p>
                <p>• To create an environment for "HAPPY STUDENTS"</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Holistic Development</h4>
              <p className="text-white/70 text-sm">23+ years of comprehensive education focusing on academics, character, and values</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">CBSE Affiliation</h4>
              <p className="text-white/70 text-sm">All branches affiliated with CBSE, New Delhi with NEET examination center status</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Faculty</h4>
              <p className="text-white/70 text-sm">Well-qualified, experienced teachers with modern teaching methodologies</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <BookHeart className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Excellence Awards</h4>
              <p className="text-white/70 text-sm">Spell Bee recognition for linguistic excellence and proactive pedagogies</p>
            </div>
          </div>
        </div>

        {/* School Motto */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">School Motto</h3>
            <div className="text-2xl text-teal-400 font-bold mb-4">"TRANSFORMING LIVES INTO LEGACIES"</div>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
              We believe that education brings real transformation in oneself and society. 
              Imparting knowledge develops the mind which enables the individual to gain Pure Consciousness, 
              developing students' all-round personality - Mentally, Socially and Spiritually.
            </p>
          </div>
        </div>

        {/* Leadership Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Chairman's Message</h3>
            <div className="border-l-4 border-teal-400 pl-6">
              <p className="text-white/80 italic leading-relaxed mb-4">
                "Our mission is to inspire and empower young students with innate talents. 
                We help them to churn out the essence of their potential knowledge which helps them 
                to achieve their professional goals."
              </p>
              <p className="text-teal-400 font-medium">- Shri. M. K. Rajagopalan, Chairman</p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Quality Policy</h3>
            <div className="border-l-4 border-cyan-400 pl-6">
              <p className="text-white/80 italic leading-relaxed mb-4">
                "We provide a child-friendly environment which is conducive for learning. 
                We are committed to promote responsible citizenship by instilling values of 
                discipline, tolerance, compassion, and willingness to serve society."
              </p>
              <p className="text-cyan-400 font-medium">- Pon Vidyashram Quality Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
