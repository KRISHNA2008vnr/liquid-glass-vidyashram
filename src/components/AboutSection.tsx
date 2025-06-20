
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
            A legacy of educational excellence spanning over two decades, shaping minds and building character
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
                To be a globally recognized institution that nurtures holistic development, 
                fostering creativity, critical thinking, and character building in every student 
                to become responsible global citizens.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To provide quality education that emphasizes academic excellence, moral values, 
                and life skills, preparing students to face future challenges with confidence 
                and contribute positively to society.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Holistic Development</h4>
              <p className="text-white/70 text-sm">Balanced focus on academics, sports, arts, and character building</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Safe Environment</h4>
              <p className="text-white/70 text-sm">Secure campus with dedicated counseling and safety measures</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Faculty</h4>
              <p className="text-white/70 text-sm">Qualified and experienced teachers committed to student success</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <BookHeart className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Value Education</h4>
              <p className="text-white/70 text-sm">Strong emphasis on moral values and ethical leadership</p>
            </div>
          </div>
        </div>

        {/* Leadership Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Chairman's Message</h3>
            <div className="border-l-4 border-teal-400 pl-6">
              <p className="text-white/80 italic leading-relaxed mb-4">
                "Education is the most powerful weapon which you can use to change the world. 
                At Pon Vidyashram, we believe in nurturing not just intelligent minds, but compassionate hearts."
              </p>
              <p className="text-teal-400 font-medium">- Chairman, Pon Vidyashram Group</p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Director's Message</h3>
            <div className="border-l-4 border-cyan-400 pl-6">
              <p className="text-white/80 italic leading-relaxed mb-4">
                "Our commitment is to provide a learning environment that fosters creativity, 
                critical thinking, and character development, preparing students for global challenges."
              </p>
              <p className="text-cyan-400 font-medium">- Director, Academic Affairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
