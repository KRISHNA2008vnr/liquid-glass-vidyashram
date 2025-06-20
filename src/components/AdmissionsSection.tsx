
import React, { useState } from 'react';
import { CheckCircle, Download, FileText, Users, Calendar } from 'lucide-react';

const AdmissionsSection = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    class: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admission enquiry submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      studentName: '',
      parentName: '',
      class: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Submit the completed application form with required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Verification of academic records and other certificates',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Interaction',
      description: 'Parent-student interaction with academic coordinators',
      icon: Users
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Fee payment and final admission confirmation',
      icon: Calendar
    }
  ];

  const eligibilityCriteria = [
    { class: 'LKG', age: '3+ years', documents: 'Birth Certificate, Photos' },
    { class: 'UKG', age: '4+ years', documents: 'Birth Certificate, Previous School TC' },
    { class: 'Class I', age: '5+ years', documents: 'Birth Certificate, UKG Completion' },
    { class: 'Classes II-V', age: 'As per norms', documents: 'TC, Progress Report, Birth Certificate' },
    { class: 'Classes VI-X', age: 'As per norms', documents: 'TC, Mark Sheet, Birth Certificate' },
    { class: 'Classes XI-XII', age: 'As per norms', documents: 'Class X Mark Sheet, TC, Migration' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Family</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Begin your child's journey of excellence with us. Simple admission process for a bright future.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Admission Process */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Admission Process</h3>
            <div className="space-y-6">
              {admissionSteps.map((step) => (
                <div key={step.step} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-teal-400">STEP {step.step}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">Admission Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Student Name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Parent/Guardian Name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                >
                  <option value="" className="bg-slate-800">Class Seeking Admission</option>
                  <option value="LKG" className="bg-slate-800">LKG</option>
                  <option value="UKG" className="bg-slate-800">UKG</option>
                  <option value="1" className="bg-slate-800">Class I</option>
                  <option value="2" className="bg-slate-800">Class II</option>
                  <option value="3" className="bg-slate-800">Class III</option>
                  <option value="4" className="bg-slate-800">Class IV</option>
                  <option value="5" className="bg-slate-800">Class V</option>
                  <option value="6" className="bg-slate-800">Class VI</option>
                  <option value="7" className="bg-slate-800">Class VII</option>
                  <option value="8" className="bg-slate-800">Class VIII</option>
                  <option value="9" className="bg-slate-800">Class IX</option>
                  <option value="10" className="bg-slate-800">Class X</option>
                  <option value="11" className="bg-slate-800">Class XI</option>
                  <option value="12" className="bg-slate-800">Class XII</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              
              <textarea
                placeholder="Additional Message (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-400 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Eligibility Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-3">{criteria.class}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-400 font-medium">Age:</span>
                    <span className="text-white/80">{criteria.age}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-teal-400 font-medium">Documents:</span>
                    <span className="text-white/80 text-sm">{criteria.documents}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Download Forms & Information</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Download size={20} />
              <span>Admission Form</span>
            </button>
            <button className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Download size={20} />
              <span>Fee Structure</span>
            </button>
            <button className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Download size={20} />
              <span>Prospectus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsSection;
