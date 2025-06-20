
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
      name: 'Valasaravakkam Campus',
      address: 'Sapthagiri Nagar, Arcot Road, Behind Saravana Bhavan, Valasaravakkam, Porur, Chennai - 600 116',
      phone: '044 24767072, 24762203, 24766778/79',
      mobile: '9840617337',
      email: 'valasaravakkam@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:30 AM - 3:40 PM'
    },
    {
      name: 'Kolapakkam Campus',
      address: 'Mugalivakkam, 1st Main Rd, Maxworth Nagar Phase II, Kolapakkam, Chennai - 600 122',
      phone: '044 48603357',
      mobile: '7708068369',
      email: 'kolapakkam@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:30 AM - 3:40 PM'
    },
    {
      name: 'Velachery Campus',
      address: '42 Thirugnana Sambandhar Street, 1st Main Road, Velachery, Srinivasa Nagar, Madipakkam, Chennai - 600 091',
      phone: '044 49528276, 49528277',
      mobile: '9382306060',
      email: 'velachery@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:30 AM - 3:40 PM'
    },
    {
      name: 'Injambakkam Campus',
      address: 'Vidyashram Garden, (opp. VGP Golden Beach) East Coast Road, Injambakkam, Chennai - 600 115',
      phone: '7401841351',
      mobile: '7708065491',
      email: 'injambakkam@ponvidyashram.edu.in',
      timings: 'Mon-Fri: 8:45 AM - 4:00 PM'
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
            Ready to begin your child's educational journey with Pon Vidyashram? We're here to help with any questions you may have.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Campus Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-8">Our Campuses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campuses.map((campus, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-4">{campus.name}</h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-white/80 text-sm">{campus.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="text-cyan-400 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-white/80 text-sm">{campus.phone}</p>
                        <p className="text-white/60 text-xs">Mobile: {campus.mobile}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="text-purple-400 flex-shrink-0" size={16} />
                      <p className="text-white/80 text-sm">{campus.email}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="text-yellow-400 flex-shrink-0" size={16} />
                      <p className="text-white/80 text-sm">{campus.timings}</p>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 text-sm">
                    View on Map
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Contact Info</h3>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-teal-400" size={20} />
                <div>
                  <p className="text-white/80 text-sm">No. 123, GST Road</p>
                  <p className="text-white/80 text-sm">Chromepet, Chennai - 600044</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="text-cyan-400" size={20} />
                <div>
                  <p className="text-teal-400 font-medium">+91 44 2222 3333</p>
                  <p className="text-white/70 text-sm">Admission Helpline</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="text-purple-400" size={20} />
                <div>
                  <p className="text-teal-400 font-medium">info@ponvidyashram.edu.in</p>
                  <p className="text-white/70 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300">
                Schedule Campus Tour
              </button>
              <button className="w-full py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                Chat with PV SmartBot
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none mb-6"
              required
            ></textarea>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
