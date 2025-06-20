
import React, { useState } from 'react';
import { BookOpen, Award, Users, Download, ChevronRight } from 'lucide-react';

const AcademicsSection = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  const curriculumData = [
    {
      level: 'Primary (Classes I-V)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art & Craft'],
      focus: 'Foundation building with play-based learning'
    },
    {
      level: 'Middle School (Classes VI-VIII)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Second Language'],
      focus: 'Conceptual understanding and skill development'
    },
    {
      level: 'Secondary (Classes IX-X)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Applications', 'Third Language'],
      focus: 'Board exam preparation with comprehensive understanding'
    },
    {
      level: 'Senior Secondary (Classes XI-XII)',
      subjects: ['Science Stream', 'Commerce Stream', 'Arts Stream', 'Computer Science'],
      focus: 'Specialization and career preparation'
    }
  ];

  const achievements = [
    { title: 'State Topper', subject: 'Mathematics', year: '2024', percentage: '98.5%' },
    { title: 'District First', subject: 'Science', year: '2024', percentage: '97.2%' },
    { title: 'School Topper', subject: 'English', year: '2024', percentage: '96.8%' },
    { title: 'Best Performance', subject: 'Commerce', year: '2024', percentage: '95.5%' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive curriculum designed to foster critical thinking and lifelong learning
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-2 border border-white/20">
            {[
              { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'resources', label: 'Resources', icon: Download }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === id
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

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'curriculum' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculumData.map((level, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{level.level}</h3>
                  <p className="text-teal-400 mb-6 font-medium">{level.focus}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Core Subjects:</h4>
                    {level.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ChevronRight size={16} className="text-cyan-400" />
                        <span className="text-white/80">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-teal-400 font-medium mb-1">{achievement.subject}</p>
                  <p className="text-white/80 text-sm mb-2">{achievement.year}</p>
                  <div className="text-2xl font-bold text-yellow-400">{achievement.percentage}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Academic Calendar 2024-25', type: 'PDF', size: '2.5 MB' },
                { title: 'Syllabus Overview', type: 'PDF', size: '1.8 MB' },
                { title: 'Class Notes Portal', type: 'Link', size: 'Online' },
                { title: 'Assignment Guidelines', type: 'PDF', size: '1.2 MB' },
                { title: 'Examination Schedule', type: 'PDF', size: '800 KB' },
                { title: 'Study Materials', type: 'Folder', size: 'Multiple' }
              ].map((resource, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Download className="text-white group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">{resource.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-white/60 text-sm">{resource.size}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;
