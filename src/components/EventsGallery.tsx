
import React, { useState } from 'react';
import { Calendar, Camera, Play, Filter } from 'lucide-react';

const EventsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Annual Day Celebration 2024',
      category: 'annual',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop',
      description: 'Grand celebration showcasing student talents',
      type: 'image',
      gallery: 5
    },
    {
      id: 2,
      title: 'Sports Day Championship',
      category: 'sports',
      date: 'February 20, 2024',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop',
      description: 'Athletic excellence and team spirit',
      type: 'video',
      gallery: 8
    },
    {
      id: 3,
      title: 'Science Exhibition',
      category: 'academic',
      date: 'January 18, 2024',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      description: 'Student innovations and discoveries',
      type: 'image',
      gallery: 12
    },
    {
      id: 4,
      title: 'Cultural Festival',
      category: 'cultural',
      date: 'December 10, 2023',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop',
      description: 'Celebrating diversity and traditions',
      type: 'image',
      gallery: 15
    },
    {
      id: 5,
      title: 'Independence Day Program',
      category: 'celebration',
      date: 'August 15, 2023',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      description: 'Patriotic fervor and national pride',
      type: 'video',
      gallery: 6
    },
    {
      id: 6,
      title: 'Mathematics Olympiad',
      category: 'academic',
      date: 'November 25, 2023',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'Challenging young minds',
      type: 'image',
      gallery: 4
    },
    {
      id: 7,
      title: 'Teachers Day Special',
      category: 'celebration',
      date: 'September 5, 2023',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      description: 'Honoring our dedicated educators',
      type: 'image',
      gallery: 10
    },
    {
      id: 8,
      title: 'Inter-House Competitions',
      category: 'sports',
      date: 'October 12, 2023',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
      description: 'House pride and healthy competition',
      type: 'video',
      gallery: 20
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'annual', label: 'Annual Day', count: events.filter(e => e.category === 'annual').length },
    { id: 'sports', label: 'Sports', count: events.filter(e => e.category === 'sports').length },
    { id: 'cultural', label: 'Cultural', count: events.filter(e => e.category === 'cultural').length },
    { id: 'academic', label: 'Academic', count: events.filter(e => e.category === 'academic').length },
    { id: 'celebration', label: 'Celebrations', count: events.filter(e => e.category === 'celebration').length }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Capturing memorable moments and celebrating achievements throughout the academic year
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-2 border border-white/20">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{filter.label}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Type indicator */}
                <div className="absolute top-3 left-3">
                  {event.type === 'video' ? (
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Play size={16} className="text-white fill-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Camera size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Gallery count */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                  +{event.gallery} photos
                </div>

                {/* Date */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white">
                  <Calendar size={14} />
                  <span className="text-sm">{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm mb-3">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-teal-400 font-medium capitalize">
                    {event.category}
                  </span>
                  <button className="text-xs text-white/80 hover:text-white transition-colors">
                    View Gallery →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="mt-16 backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: 'April 15', title: 'Spring Festival', type: 'Cultural Event' },
              { date: 'April 22', title: 'Earth Day Celebration', type: 'Environmental' },
              { date: 'May 5', title: 'Mother\'s Day Program', type: 'Special Day' },
              { date: 'May 18', title: 'Annual Sports Meet', type: 'Sports Event' },
              { date: 'June 2', title: 'Graduation Ceremony', type: 'Academic' },
              { date: 'June 15', title: 'Summer Camp Begin', type: 'Activities' }
            ].map((upcoming, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{upcoming.title}</h4>
                    <p className="text-white/70 text-sm">{upcoming.type}</p>
                    <p className="text-teal-400 text-sm font-medium">{upcoming.date}, 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;
