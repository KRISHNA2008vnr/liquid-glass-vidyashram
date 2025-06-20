
import React, { useState } from 'react';
import { Trophy, Medal, Star, Award, Users, BookOpen, Palette } from 'lucide-react';

const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState('academic');

  const achievements = {
    academic: [
      {
        title: 'State Board Toppers',
        description: 'Multiple state-level toppers in Class X and XII examinations',
        icon: Trophy,
        stats: '15+ Toppers',
        year: '2024',
        color: 'from-yellow-400 to-orange-500'
      },
      {
        title: 'Science Olympiad',
        description: 'Gold medals in National Science Olympiad competitions',
        icon: Medal,
        stats: '25 Gold Medals',
        year: '2024',
        color: 'from-blue-400 to-indigo-500'
      },
      {
        title: 'Mathematics Excellence',
        description: 'Regional champions in Mathematics competitions',
        icon: Star,
        stats: '12 Champions',
        year: '2024',
        color: 'from-purple-400 to-pink-500'
      },
      {
        title: 'English Proficiency',
        description: 'District winners in English essay and debate competitions',
        icon: BookOpen,
        stats: '8 Winners',
        year: '2024',
        color: 'from-green-400 to-emerald-500'
      }
    ],
    sports: [
      {
        title: 'District Athletics',
        description: 'Champions in various track and field events',
        icon: Trophy,
        stats: '20+ Medals',
        year: '2024',
        color: 'from-red-400 to-rose-500'
      },
      {
        title: 'Basketball Tournament',
        description: 'Regional basketball championship winners',
        icon: Medal,
        stats: '1st Position',
        year: '2024',
        color: 'from-orange-400 to-red-500'
      },
      {
        title: 'Swimming Competition',
        description: 'Multiple medals in district swimming meets',
        icon: Award,
        stats: '15 Medals',
        year: '2024',
        color: 'from-cyan-400 to-blue-500'
      },
      {
        title: 'Chess Championship',
        description: 'State-level chess tournament achievements',
        icon: Star,
        stats: '5 Champions',
        year: '2024',
        color: 'from-indigo-400 to-purple-500'
      }
    ],
    cultural: [
      {
        title: 'Dance Competition',
        description: 'State-level classical and folk dance championships',
        icon: Palette,
        stats: '10 Winners',
        year: '2024',
        color: 'from-pink-400 to-rose-500'
      },
      {
        title: 'Music Festival',
        description: 'Regional music competition winners in various categories',
        icon: Trophy,
        stats: '8 Awards',
        year: '2024',
        color: 'from-violet-400 to-purple-500'
      },
      {
        title: 'Art Exhibition',
        description: 'District art competition winners and exhibitions',
        icon: Medal,
        stats: '12 Exhibitions',
        year: '2024',
        color: 'from-teal-400 to-cyan-500'
      },
      {
        title: 'Drama Festival',
        description: 'Best performance awards in inter-school drama competitions',
        icon: Award,
        stats: '6 Best Actor',
        year: '2024',
        color: 'from-amber-400 to-yellow-500'
      }
    ]
  };

  const categories = [
    { id: 'academic', label: 'Academic Excellence', icon: BookOpen },
    { id: 'sports', label: 'Sports & Games', icon: Trophy },
    { id: 'cultural', label: 'Cultural Activities', icon: Palette }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Celebrating excellence across academics, sports, and cultural activities
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-2 border border-white/20">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements[activeCategory as keyof typeof achievements].map((achievement, index) => (
            <div 
              key={index} 
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <achievement.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{achievement.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-teal-400 font-bold text-lg">{achievement.stats}</div>
                <div className="text-white/60 text-sm">{achievement.year}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-white/80">Total Awards Won</div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-white/80">Competitions Participated</div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
            <div className="text-white/80">Board Exam Success Rate</div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">25</div>
            <div className="text-white/80">Years of Excellence</div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-16 backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Recent Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">School of Excellence Award</h4>
              <p className="text-white/70">Recognized by State Education Board for outstanding performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Best Faculty Award</h4>
              <p className="text-white/70">Multiple teachers honored for exceptional teaching methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation in Education</h4>
              <p className="text-white/70">Awarded for implementing modern teaching technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
