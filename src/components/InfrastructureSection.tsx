
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const InfrastructureSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const infrastructureData = [
    {
      title: 'Smart Classrooms',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      summary: 'State-of-the-art digital learning environments with interactive boards and modern technology.',
      details: [
        'Interactive whiteboards in every classroom',
        'High-speed internet connectivity',
        'Audio-visual learning systems',
        'Climate-controlled environment',
        'Ergonomic furniture for student comfort'
      ]
    },
    {
      title: 'Science Laboratories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      summary: 'Well-equipped labs for Physics, Chemistry, and Biology with modern apparatus.',
      details: [
        'Separate labs for Physics, Chemistry & Biology',
        'Modern scientific instruments and equipment',
        'Safety protocols and emergency systems',
        'Research-oriented learning approach',
        'Individual experiment stations for students'
      ]
    },
    {
      title: 'Computer Lab',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      summary: 'Advanced computing facility with latest hardware and software for digital literacy.',
      details: [
        '50+ high-performance computers',
        'Latest software for programming and design',
        'High-speed internet for research',
        'Coding and robotics programs',
        'Digital literacy certification courses'
      ]
    },
    {
      title: 'Library & Knowledge Center',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      summary: 'Comprehensive library with vast collection of books, journals, and digital resources.',
      details: [
        '10,000+ books across all subjects',
        'Digital library with e-books and journals',
        'Quiet study areas and group discussion rooms',
        'Research assistance and academic support',
        'Regular book fairs and reading programs'
      ]
    },
    {
      title: 'Mathematics Lab',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      summary: 'Interactive mathematics learning with hands-on models and practical applications.',
      details: [
        'Mathematical models and manipulatives',
        'Geometry and algebra learning aids',
        'Problem-solving workshops',
        'Math olympiad preparation',
        'Peer tutoring programs'
      ]
    },
    {
      title: 'KG Play Area',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop',
      summary: 'Safe and colorful play area designed specifically for kindergarten students.',
      details: [
        'Age-appropriate play equipment',
        'Soft play areas for toddlers',
        'Colorful and engaging environment',
        'Trained supervisors for safety',
        'Educational games and activities'
      ]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Infrastructure</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Modern facilities designed to enhance learning and provide the best educational experience
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {infrastructureData.map((item, index) => (
            <div 
              key={index} 
              className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4">{item.summary}</p>

                {/* Expandable Details */}
                {expandedCards.includes(index) && (
                  <div className="space-y-2 mb-4 animate-fade-in">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-white/70 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Toggle Button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                >
                  <span>{expandedCards.includes(index) ? 'Show Less' : 'Learn More'}</span>
                  {expandedCards.includes(index) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🏃</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sports Complex</h3>
            <p className="text-white/70">Multi-sport facilities including basketball, volleyball, and athletics track</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🎭</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Auditorium</h3>
            <p className="text-white/70">500-seat auditorium with advanced sound and lighting systems</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🍽️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cafeteria</h3>
            <p className="text-white/70">Hygienic food court serving nutritious meals and snacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSection;
