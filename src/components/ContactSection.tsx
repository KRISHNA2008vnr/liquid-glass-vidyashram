
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const campuses = [
    {
      name: 'Main Campus - Chromepet',
      address: 'No. 123, GST Road, Chromepet, Chennai - 600044',
      phone: '+91 44 2222 3333',
      email: 'chromepet@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:00 AM - 4:00 PM'
    },
    {
      name: 'Branch Campus - Pallavaram',
      address: 'No. 456, Main Road, Pallavaram, Chennai - 600043',
      phone: '+91 44 2222 4444',
      email: 'pallavaram@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:00 AM - 4:00 PM'
    },
    {
      name: 'Senior Secondary - Tambaram',
      address: 'No. 789, East Main Road, Tambaram, Chennai - 600045',
      phone: '+91 44 2222 5555',
      email: 'tambaram@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:00 AM - 4:00 PM'
    },
    {
      name: 'KG Campus - Chitlapakkam',
      address: 'No. 321, West Street, Chitlapakkam, Chennai - 600064',
      phone: '+91 44 2222 6666',
      email: 'chitlapakkam@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:30 AM - 3:30 PM'
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to begin your child's educational journey? We're here to help with any questions you may have.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                required
              ></textarea>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Quick Contact</h3>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Call Us</h4>
                  <p className="text-white/80">Speak with our admission team</p>
                </div>
              </div>
              <p className="text-teal-400 font-medium">+91 44 2222 3333</p>
              <p className="text-white/70 text-sm">Available Monday to Friday, 8:00 AM - 4:00 PM</p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Email Us</h4>
                  <p className="text-white/80">Send us your queries</p>
                </div>
              </div>
              <p className="text-teal-400 font-medium">info@ponvidyashram.edu.in</p>
              <p className="text-white/70 text-sm">We'll respond within 24 hours</p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">WhatsApp</h4>
                  <p className="text-white/80">Quick assistance via chat</p>
                </div>
              </div>
              <p className="text-teal-400 font-medium">+91 9876 543 210</p>
              <p className="text-white/70 text-sm">Available during school hours</p>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Campuses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campuses.map((campus, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-4">{campus.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-teal-400 mt-1" size={18} />
                    <div>
                      <p className="text-white/80 text-sm">{campus.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-cyan-400" size={18} />
                    <p className="text-white/80 text-sm">{campus.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-400" size={18} />
                    <p className="text-white/80 text-sm">{campus.email}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-yellow-400" size={18} />
                    <p className="text-white/80 text-sm">{campus.timings}</p>
                  </div>
                </div>
                
                <button className="mt-4 w-full py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                  View on Map
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
