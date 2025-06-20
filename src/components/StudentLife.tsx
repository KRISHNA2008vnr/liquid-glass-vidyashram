
import React, { useState } from 'react';
import { Users, Music, Palette, Code, BookOpen, Trophy, Heart, Lightbulb } from 'lucide-react';

const StudentLife = () => {
  const [activeClub, setActiveClub] = useState(0);

  const clubs = [
    {
      name: 'Tech Club',
      icon: Code,
      description: 'Explore coding, robotics, and emerging technologies',
      activities: ['Coding Workshops', 'Robotics Projects', 'Tech Competitions', 'App Development'],
      members: '45+',
      meets: 'Every Friday',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Music Club',
      icon: Music,
      description: 'Express creativity through various musical forms',
      activities: ['Choir Practice', 'Instrument Training', 'Music Competitions', 'Annual Concert'],
      members: '60+',
      meets: 'Twice a week',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Art & Craft Club',
      icon: Palette,
      description: 'Unleash artistic talents and creative expression',
      activities: ['Painting Workshops', 'Sculpture Making', 'Art Exhibitions', 'Craft Projects'],
      members: '50+',
      meets: 'Every Tuesday',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Literary Club',
      icon: BookOpen,
      description: 'Develop writing skills and love for literature',
      activities: ['Creative Writing', 'Poetry Sessions', 'Debate Competitions', 'Book Reviews'],
      members: '40+',
      meets: 'Every Wednesday',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Drama Club',
      icon: Users,
      description: 'Explore theater arts and performance skills',
      activities: ['Stage Performances', 'Acting Workshops', 'Script Writing', 'Drama Festivals'],
      members: '35+',
      meets: 'Every Thursday',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Environmental Club',
      icon: Heart,
      description: 'Promote environmental awareness and sustainability',
      activities: ['Tree Planting', 'Recycling Drives', 'Eco Workshops', 'Nature Walks'],
      members: '55+',
      meets: 'Every Saturday',
      color: 'from-teal-400 to-green-500'
    }
  ];

  const competitions = [
    {
      name: 'Inter-House Quiz',
      type: 'Academic',
      frequency: 'Monthly',
      participants: '200+',
      icon: Lightbulb
    },
    {
      name: 'Sports Championship',
      type: 'Athletic',
      frequency: 'Quarterly',
      participants: '300+',
      icon: Trophy
    },
    {
      name: 'Debate Tournament',
      type: 'Literary',
      frequency: 'Bi-monthly',
      participants: '80+',
      icon: Users
    },
    {
      name: 'Science Fair',
      type: 'Innovation',
      frequency: 'Annual',
      participants: '150+',
      icon: Code
    }
  ];

  const houses = [
    { name: 'Courage House', color: 'bg-red-500', motto: 'Brave and Bold' },
    { name: 'Wisdom House', color: 'bg-blue-500', motto: 'Knowledge is Power' },
    { name: 'Excellence House', color: 'bg-yellow-500', motto: 'Strive for the Best' },
    { name: 'Unity House', color: 'bg-green-500', motto: 'Together We Achieve' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Life</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Beyond academics - where friendships are forged, talents are discovered, and memories are made
          </p>
        </div>

        {/* Clubs & Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Clubs & Activities</h3>
          
          {/* Club Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-2 border border-white/20">
              {clubs.map((club, index) => {
                const IconComponent = club.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveClub(index)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeClub === index
                        ? `bg-gradient-to-r ${club.color} text-white shadow-lg`
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{club.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Club Details */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${clubs[activeClub].color} rounded-2xl flex items-center justify-center`}>
                    {React.createElement(clubs[activeClub].icon, { className: "text-white", size: 32 })}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{clubs[activeClub].name}</h4>
                    <p className="text-white/80">{clubs[activeClub].description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-teal-400">{clubs[activeClub].members}</div>
                    <div className="text-white/70 text-sm">Active Members</div>
                  </div>
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="text-lg font-bold text-cyan-400">{clubs[activeClub].meets}</div>
                    <div className="text-white/70 text-sm">Meeting Schedule</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xl font-bold text-white mb-4">Key Activities</h5>
                <div className="space-y-3">
                  {clubs[activeClub].activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-white/80">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* House System */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">House System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${house.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Trophy className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">{house.name}</h4>
                <p className="text-white/70 text-center text-sm italic">&quot;{house.motto}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Regular Competitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((competition, index) => {
              const CompetitionIcon = competition.icon;
              return (
                <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <CompetitionIcon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{competition.name}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Type:</span>
                      <span className="text-teal-400">{competition.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Frequency:</span>
                      <span className="text-white/80">{competition.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Participants:</span>
                      <span className="text-cyan-400">{competition.participants}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Student Initiatives */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Student-Led Initiatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Student Council</h4>
              <p className="text-white/70">Democratic representation and leadership development through elected student government</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Peer Support Program</h4>
              <p className="text-white/70">Senior students mentoring juniors in academics and personal development</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Innovation Lab</h4>
              <p className="text-white/70">Student-driven research projects and innovative solutions to real-world problems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
