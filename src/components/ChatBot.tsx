import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Minimize2, Maximize2 } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm PV SmartBot, your virtual assistant for Pon Vidyashram Group of Senior Secondary Schools. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Admission Process',
    'Fee Structure',
    'Campus Locations',
    'Academic Curriculum',
    'Contact Information',
    'CBSE Affiliation'
  ];

  const botResponses: { [key: string]: string } = {
    'admission': 'Admissions for 2025-2026 are open for classes KG to 9 and class 11. Age criteria: KG1 requires minimum 4 years, Class 1 requires minimum 6 years. Contact our admission office at +91 9360 40 70 70 for detailed enrollment process information.',
    'fee': 'Annual fees vary by campus: Injambakkam campus approximately ₹54,000, Madipakkam campus around ₹90,000. Please contact your specific campus directly for the most accurate and up-to-date fee information.',
    'infrastructure': 'We have state-of-the-art infrastructure including well-equipped classrooms, laboratories, libraries, CCTV surveillance, transportation services, and dedicated spaces for extracurricular activities across all four campuses.',
    'curriculum': 'We follow CBSE curriculum from KG to Class XII. Our comprehensive curriculum includes English, Tamil, Hindi, Mathematics, Science, Social Science, Computer Science, and various skill development programs with focus on holistic education.',
    'contact': 'We have 4 campuses: Valasaravakkam (044 24767072), Kolapakkam (044 48603357), Velachery (044 49528276), Injambakkam (7401841351). Main email: info@ponvidyashram.edu.in',
    'campus': 'Our 4 campuses are located at: 1) Valasaravakkam - Sapthagiri Nagar, Arcot Road, 2) Kolapakkam - Mugalivakkam, Maxworth Nagar Phase II, 3) Velachery - Thirugnana Sambandhar Street, Srinivasa Nagar, 4) Injambakkam - Vidyashram Garden, East Coast Road.',
    'achievements': 'We are proud of our academic excellence with multiple state board toppers, NEET examination center status, Spell Bee recognition for linguistic excellence, and over 500+ awards won by our students in various competitions.',
    'cbse': 'All branches of Pon Vidyashram are affiliated with CBSE, New Delhi. We have been selected as a NEET examination center, reflecting our commitment to academic excellence and standardized curriculum.',
    'timing': 'School timings vary by campus and grade: Valasaravakkam (9:00am-12:00pm for Pre-KG to 8:30am-3:40pm for higher classes), Injambakkam (9:15am-12:15pm for Pre-KG to 8:45am-4:00pm for higher classes).',
    'transport': 'We provide safe transportation services with bus routes covering various parts of Chennai. Contact your respective campus for specific route information and availability.'
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('admission') || message.includes('apply') || message.includes('enroll')) {
      return botResponses.admission;
    } else if (message.includes('fee') || message.includes('cost') || message.includes('price') || message.includes('tuition')) {
      return botResponses.fee;
    } else if (message.includes('infrastructure') || message.includes('facilities') || message.includes('lab') || message.includes('library')) {
      return botResponses.infrastructure;
    } else if (message.includes('curriculum') || message.includes('subjects') || message.includes('academic') || message.includes('syllabus')) {
      return botResponses.curriculum;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('address')) {
      return botResponses.contact;
    } else if (message.includes('campus') || message.includes('location') || message.includes('branch')) {
      return botResponses.campus;
    } else if (message.includes('achievement') || message.includes('topper') || message.includes('award') || message.includes('excellence')) {
      return botResponses.achievements;
    } else if (message.includes('cbse') || message.includes('affiliation') || message.includes('board') || message.includes('neet')) {
      return botResponses.cbse;
    } else if (message.includes('timing') || message.includes('hours') || message.includes('schedule')) {
      return botResponses.timing;
    } else if (message.includes('transport') || message.includes('bus') || message.includes('travel')) {
      return botResponses.transport;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Pon Vidyashram Group of Senior Secondary Schools. We have been providing quality education for over 23 years across 4 campuses in Chennai. What would you like to know?";
    } else if (message.includes('thank')) {
      return "You're welcome! Is there anything else you'd like to know about Pon Vidyashram? I can help with admissions, academics, campus information, or any other queries.";
    } else {
      return "I'd be happy to help you with information about Pon Vidyashram Group of Senior Secondary Schools! You can ask me about admissions, fee structure, campus locations, CBSE curriculum, achievements, or contact details. What specific information are you looking for?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot' as const,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Chat Container */}
      <div className={`relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
              <MessageCircle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold">PV SmartBot</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/70 text-xs">Online</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/70 hover:text-white transition-colors"
            >
              {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white'
                        : 'backdrop-blur-md bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="backdrop-blur-md bg-white/20 text-white border border-white/20 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:from-teal-400 hover:to-cyan-500 transition-all duration-300"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
