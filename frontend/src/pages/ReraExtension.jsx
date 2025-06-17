import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, FileText, AlertTriangle, HelpCircle, Users, Clock, ChevronDown, ChevronUp, ArrowUpRight, Calendar, Phone, MessageCircle, X } from 'lucide-react';

const ReraExtension = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSection, setCurrentSection] = useState('overview');
    const [showContactModal, setShowContactModal] = useState(false);
  
  const sectionRefs = {
    overview: useRef(null),
    when: useRef(null),
    documents: useRef(null),
    services: useRef(null),
    risks: useRef(null),
    faqs: useRef(null),
    contact: useRef(null)
  };

  const tableOfContents = [
    { id: 'overview', label: 'What is RERA Extension?', icon: '⏳' },
    { id: 'when', label: 'When to Apply', icon: '🗓' },
    { id: 'documents', label: 'Documents Required', icon: '📁' },
    { id: 'services', label: 'Our Services', icon: '🔍' },
    { id: 'risks', label: 'Risk of Not Filing', icon: '🛑' },
    { id: 'faqs', label: 'FAQs', icon: '❓' },
    { id: 'contact', label: 'Get Started', icon: '🚀' }
  ];

    const handleGetStarted = () => {
    setShowContactModal(true);
  };

  const handleCall = () => {
    window.open('tel:+918010893788', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi RERA INSIGHTS! I need help with Quarterly Progress Reports (QPRs). Can we discuss my requirements?');
    window.open(`https://wa.me/918010893788?text=${message}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref.current) {
      const yOffset = -100;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I file for extension after expiry?",
      answer: "Only under exceptional circumstances. It's risky and not recommended."
    },
    {
      question: "Will my registration be extended automatically?",
      answer: "No. A formal application with valid documentation is mandatory."
    },
    {
      question: "What's the time frame for approval?",
      answer: "Generally 30–45 days if all documents are submitted properly."
    },
    {
      question: "Is COVID-19 a valid ground for extension?",
      answer: "Yes, if backed with evidence and declarations."
    }
  ];

  const requiredDocuments = [
    "A written explanation stating the reason for the delay",
    "Latest progress report by Architect and Engineer",
    "Fund utilization certificate by Chartered Accountant",
    "Photographic evidence of work completed",
    "Updated list of units sold and unsold",
    "Revised project timelines"
  ];

  const risks = [
    "Immediate lapse of registration",
    "Complete bar on selling/advertising units",
    "Penalty up to 10% of total project cost",
    "Buyer complaints and project blacklisting"
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                        currentSection === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1'
                      }`}
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                      <ArrowUpRight className={`w-4 h-4 transition-all duration-200 ${
                        currentSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  ))}
                </nav>
                
                {/* Progress Indicator */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-xs text-gray-500 mb-2">Reading Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(tableOfContents.findIndex(item => item.id === currentSection) + 1) / tableOfContents.length * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-12">
            {/* Header */}
            <div ref={sectionRefs.overview} className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium">RERA INSIGHTS</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  RERA Extension
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                    Simplified
                  </span>
                </h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Timely Compliance, Zero Penalties - Stay compliant and protect your project timeline with guided RERA extension services
                </p>
              </div>
            </div>

            {/* What is RERA Extension */}
            <div className="bg-white rounded-2xl border border-green-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                <div className="flex items-center text-white">
                  <Clock className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">What is RERA Extension?</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  The RERA registration is valid for a fixed duration as declared by the promoter at the time of registration. 
                  If the project cannot be completed within this period, an <strong>extension application</strong> must be filed 
                  before the original expiry date. This provision is to accommodate genuine delays like financial constraints, 
                  labor shortage, material supply issues, or force majeure events.
                </p>
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <p className="text-green-800 font-medium text-center text-lg">
                    An extension helps avoid legal consequences and keeps the project status legally valid.
                  </p>
                </div>
              </div>
            </div>

            {/* When to Apply */}
            <div ref={sectionRefs.when} className="bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
                <div className="flex items-center text-white">
                  <Calendar className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">When to Apply?</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  It is ideal to apply at least <strong>90 days before registration expiry</strong>. While extensions are 
                  typically granted once (for up to 1 year), genuine reasons with valid documentation may be considered 
                  for further extensions by the authority.
                </p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                  <p className="text-yellow-800 font-medium flex items-center">
                    <AlertTriangle className="mr-2" size={20} />
                    Apply well in advance to avoid last-minute complications and ensure proper documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div ref={sectionRefs.documents} className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                <div className="flex items-center text-white">
                  <FileText className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">Documents Required for RERA Extension</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-3 mb-6">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start p-4 bg-purple-50 rounded-xl">
                      <CheckCircle className="text-purple-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <p className="text-purple-800 font-medium text-center text-lg">
                    These documents serve as proof of genuine effort and justify the need for extension.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div ref={sectionRefs.services} className="bg-white rounded-2xl border border-indigo-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6">
                <div className="flex items-center text-white">
                  <Users className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">Why Choose RERA INSIGHTS</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-8 text-lg">
                  We provide end-to-end guidance with:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Drafting precise justifications tailored to authority expectations",
                    "Collecting, reviewing, and preparing all documents",
                    "Filing the extension online on the RERA portal",
                    "Tracking status and replying to authority queries if any"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-indigo-50 rounded-xl">
                      <CheckCircle className="text-indigo-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
                  <p className="text-indigo-800 font-medium text-center text-lg">
                    Our team ensures timely application submission to avoid lapses.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk of Not Filing Extension */}
            <div ref={sectionRefs.risks} className="bg-white rounded-2xl border border-red-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                <div className="flex items-center text-white">
                  <AlertTriangle className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">Risk of Not Filing Extension</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="grid gap-4 mb-6">
                  {risks.map((risk, index) => (
                    <div key={index} className="flex items-start p-4 bg-red-50 rounded-xl">
                      <span className="text-red-600 mr-3 mt-1 text-xl">×</span>
                      <span className="text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                  <p className="text-red-800 font-medium text-center text-lg">
                    Don't risk your project's future - file for extension before expiry.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div ref={sectionRefs.faqs} className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6">
                <div className="flex items-center text-white">
                  <HelpCircle className="mr-4" size={28} />
                  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-800 text-lg">{faq.question}</h3>
                        <div className="bg-gray-100 rounded-full p-2">
                          {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      {activeFaq === index && (
                        <div className="px-6 pb-6 bg-gray-50">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div ref={sectionRefs.contact} className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    📞 Need Help? Contact RERA INSIGHTS Today!
                  </h3>
                  <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Whether you're launching a new project, seeking extension, or managing ongoing compliance — RERA INSIGHTS is your trusted partner in regulatory support.
                  </p>
                  
                  {/* Contact Information */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                      <span className="text-lg mr-2">📧</span>
                      <span className="font-medium">rera.insights@gmail.com</span>
                    </div>
                    <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                      <span className="text-lg mr-2">📱</span>
                      <span className="font-medium">+91 80108 93788</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleGetStarted}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                </button>
              </div>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact RERA INSIGHTS</h3>
                    <p className="text-gray-600">Choose your preferred way to get in touch</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={handleCall}
                      className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
                    >
                      <Phone className="mr-3" size={20} />
                      Call Now: +91 80108 93788
                    </button>
                    
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg"
                    >
                      <MessageCircle className="mr-3" size={20} />
                      WhatsApp: +91 80108 93788
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                      📧 rera.insights@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReraExtension;