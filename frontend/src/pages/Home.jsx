import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Users, FileText, Award, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Building, Scale, Calendar, PlayCircle, TrendingUp, Clock, AlertCircle, UserCheck, BookOpen, Briefcase, Target, Globe, Database, PieChart, ArrowUp } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(statInterval);
    };
  }, []);

    const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollBtnVisible(true);
      } else {
        setIsScrollBtnVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "RERA Registration for Real Estate Projects",
      description: "Complete RERA project registration services across India with end-to-end support for promoters and developers.",
      features: ["Eligibility Check & Advisory", "Collection and Vetting of Documents", "Preparation of Declarations & Affidavits", "Coordination with RERA Authority"],
      highlight: "Most Popular"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "RERA Registration for Real Estate Agents",
      description: "We assist real estate agents and channel partners in obtaining their RERA agent license.",
      features: ["Document Preparation", "Online Application Submission", "Payment of Registration Fees", "Renewal & Compliance Support"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Quarterly Progress Reports (QPR)",
      description: "Every registered project must submit quarterly progress updates. We ensure timely and accurate QPR submissions.",
      features: ["Data Collection & Formatting", "Drafting Project Updates", "Filing on RERA Portal", "Audit-Ready Reporting"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "RERA Advisory & Legal Compliance",
      description: "Continuous guidance and consulting to ensure your project remains fully compliant throughout its lifecycle.",
      features: ["Advisory on Ongoing Disclosures", "Drafting Sale Agreements per RERA", "Responding to RERA Notices", "Handling Compliance Inspections"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "RERA CA Certification",
      description: "We collaborate with Chartered Accountants to issue Form 3 and other RERA certifications for fund withdrawal.",
      features: ["Fund Utilization Certifications", "Stage-wise Completion Verification", "Bank Coordination", "Compliance Certificates"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom RERA Support Services",
      description: "Tailored solutions for specific RERA requirements including modifications, extensions, and corrections.",
      features: ["Project Detail Modifications", "Extension of Project Validity", "Form Corrections", "Complaint Responses"]
    }
  ];

  const testimonials = [
  {
    name: "Paradise Associates",
    content: "RERA INSIGHTS helped us get our project registered smoothly in record time, letting us focus on sales without worrying about compliance.",
    rating: 5,
    image: "", // Add image URL if needed
  },
  {
    name: "RAJ & RAJ Construction",
    content: "They handled our complex documentation with ease and ensured hassle-free certification under tight deadlines.",
    rating: 5,
    image: "",
  },
  {
    name: "RAJ ASSOCIATES",
    content: "We’ve registered multiple projects through RERA INSIGHTS — their consistency and professionalism keep us coming back.",
    rating: 5,
    image: "",
  },
  {
    name: "S S ASSOCIATES",
    content: "Thanks to their step-by-step guidance, we completed our registration and QPR filings without a single error.",
    rating: 5,
    image: "",
  },
  {
    name: "Shivaji Land and Developers",
    content: "We faced repeated delays earlier, but with RERA INSIGHTS, our compliance calendar is now perfectly managed.",
    rating: 5,
    image: "",
  },
  {
    name: "SHIVAJI KINGDOM 3",
    content: "From drafting to certification, every aspect of our large-scale project was handled efficiently and on time.",
    rating: 5,
    image: "",
  },
  {
    name: "SHIVAJI HOME INFRA",
    content: "Their team brought structure and transparency to our RERA filings — highly recommended for growing firms.",
    rating: 5,
    image: "",
  },
  {
    name: "SHAKTI BUILDERS",
    content: "As a first-time builder under RERA, we were clueless. RERA INSIGHTS gave us complete hand-holding support.",
    rating: 5,
    image: "",
  },
  {
    name: "Mahesh Chute",
    content: "Being an individual promoter, I needed clear guidance — and this team made sure nothing was missed.",
    rating: 5,
    image: "",
  },
  {
    name: "AASMA BUILDCON",
    content: "They not only filed our RERA registration but also supported us with advisory and quarterly updates.",
    rating: 5,
    image: "",
  },
  {
    name: "FICON INFRASTRUCTURE",
    content: "Their depth of understanding in RERA norms and their proactive service makes them our go-to consultants.",
    rating: 5,
    image: "",
  }
];

  const stats = [
    { number: "1000+", label: "Projects Successfully Registered", icon: <Building className="w-5 h-5" /> },
    { number: "98.7%", label: "First-Time Approval Rate", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "1500+", label: "Satisfied Clients", icon: <Users className="w-5 h-5" /> },
    { number: "10+", label: "Years of Combined Experience", icon: <Award className="w-5 h-5" /> }
  ];

  const teamMembers = [
    {
      name: "CA Huzaifa S. Sanawadwala",
      role: "Senior Consultant – Regulatory Compliance & Certification",
      image: "./team/ca-huzaifa.jpeg",
      expertise: ["RERA CA Certifications", "Statutory Compliance", "Project Financial Advisory", "Developer Structuring"],
      description: "A seasoned Chartered Accountant with years of experience in statutory audit, RERA certifications, and financial oversight of real estate projects."
    },
    {
      name: "CA Danish A. Akbani",
      role: "Lead Consultant – Project Registration & Strategic Operations",
      image: "./team/ca-danish.jpeg",
      expertise: ["End-to-end Project Registration", "RERA Documentation", "Developer and Agent Compliance", "Client Engagement & Education"],
      description: "A dynamic Chartered Accountant and co-founder of RERA INSIGHTS, bringing sharp attention to detail and deep understanding of RERA regulatory framework."
    },
    {
      name: "Taher K. Ratlamwala",
      role: "Executive – Documentation & Tech Integration",
      image: "./team/taher.jpeg",
      expertise: ["RERA Portal Management", "Document Preparation", "Data Compilation & Uploads", "Reporting & QPR Filing"],
      description: "Responsible for back-end operations, document compilation, formatting, portal filings, and tech-based tracking of compliance timelines with precision."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free assessment of your project requirements and regulatory landscape analysis",
      duration: "1-2 Days"
    },
    {
      step: "02", 
      title: "Documentation & Analysis",
      description: "Comprehensive review and preparation of all required RERA documents",
      duration: "5-7 Days"
    },
    {
      step: "03",
      title: "Portal Submission & Follow-up",
      description: "Professional RERA portal submission with continuous monitoring and updates",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Approval & Ongoing Support",
      description: "Final approval assistance and continuous compliance support throughout project lifecycle",
      duration: "As Required"
    }
  ];

  const whyChooseUs = [
    { icon: <Award className="w-6 h-6" />, title: "Specialized RERA Experts", description: "Deep expertise in RERA regulations" },
    { icon: <Clock className="w-6 h-6" />, title: "Timely Service Delivery", description: "Meeting all deadlines consistently" },
    { icon: <Target className="w-6 h-6" />, title: "Affordable Packages", description: "Competitive pricing for all services" },
    { icon: <Users className="w-6 h-6" />, title: "Dedicated Account Manager", description: "Personal attention to every project" },
    { icon: <Shield className="w-6 h-6" />, title: "Confidential & Compliant", description: "Maintaining highest standards" },
    { icon: <Globe className="w-6 h-6" />, title: "Pan-India Coverage", description: "Services across all Indian states" }
  ];

  const insights = [
    {
      title: "RERA Compliance: 2025 Updates",
      excerpt: "Latest regulatory changes and their impact on real estate projects across major Indian states.",
      readTime: "5 min read",
      category: "Regulatory Updates"
    },
    {
      title: "Streamlining Project Approvals",
      excerpt: "Best practices for faster RERA registration and avoiding common compliance pitfalls.",
      readTime: "7 min read", 
      category: "Best Practices"
    },
    {
      title: "Investment Due Diligence Guide",
      excerpt: "Essential checklist for investors evaluating RERA-compliant real estate opportunities.",
      readTime: "10 min read",
      category: "Investment Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden  " style={{backgroundImage: "url('./home-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative ">
          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            <div className={`transform transition-all   duration-1000   ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4 border border-blue-200">
                <Award className="w-4 h-4 mr-2" />
                Specialized RERA Consultancy Since 2017
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Simplifying{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  RERA
                </span>{' '}
                <br />Compliance
              </h1>
              <p className="text-xl text-black rounded-2xl  mb-10 leading-relaxed max-w-2xl">
                Expert RERA consulting services ensuring complete regulatory compliance for real estate projects under RERA Act, 2016. 
                From registration to ongoing support, we deliver results that matter.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Start Your RERA Registration
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a  href="tel:+918010193788" className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 80101 93788
                </a>
              </div> */}
              
              {/* Quick Stats Bar */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center text-blue-600 mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                      <div className="text-xs text-slate-600 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Services at RERA INSIGHTS
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">RERA Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              RERA INSIGHTS is a specialized consultancy service focused on simplifying the legal and procedural compliance 
              for real estate projects under the RERA Act, 2016. We provide end-to-end support for promoters, developers, and agents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-medium">
                    {service.highlight}
                  </div>
                )}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* <button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 group-hover:from-blue-600 group-hover:to-indigo-600">
                  Learn More
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id='our-team'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At RERA INSIGHTS, our strength lies in a dedicated team of professionals who bring a combination of 
              legal understanding, financial acumen, and operational clarity to real estate compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 leading-tight">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Expertise:</h4>
                  {member.expertise.map((skill, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white" id='why'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">RERA INSIGHTS?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver specialized RERA expertise with a client-first approach, ensuring your projects achieve compliance efficiently and affordably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50" id='our-process'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined approach to RERA compliance that ensures efficiency and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <div className="flex items-center justify-center text-sm text-blue-600 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-slate-600 text-center leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white" id='success-stories'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-300">
              Real estate players who trusted RERA INSIGHTS for smooth and compliant project journeys
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="text-center">
                <img 
                  src={
                    testimonials[currentTestimonial].image ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentTestimonial].name)}&background=0D8ABC&color=fff`
                  }
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white/20"
                />
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-white mb-8 italic leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="space-y-2">
                  <div className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-slate-400">{testimonials[currentTestimonial].company}</div>
                  <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-2">
                    <Building className="w-3 h-3 mr-1" />
                    {testimonials[currentTestimonial].project}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-400 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Latest <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insights</span>
              </h2>
              <p className="text-xl text-slate-600">
               Stay updated with RERA regulations and industry best practices
              </p>
            </div>
            {/* <button className="hidden md:flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </button> */}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((article, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold text-sm flex items-center group-hover:text-blue-700 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='contact' className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Get Started Today
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Simplify Your <br/>
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                RERA Compliance?
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Join 1000+ successful promoters that have trusted RERA INSIGHTS for complete regulatory compliance. 
              Get your free consultation today and accelerate your project approvals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-blue-300 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Call Us Directly</div>
                  <div className="text-blue-200 text-sm">Immediate consultation</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">80101 93788</div>
              <div className="text-blue-200 text-sm">Available Mon-Sat, 9 AM - 7 PM</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-300 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Email Consultation</div>
                  <div className="text-blue-200 text-sm">Detailed project assessment</div>
                </div>
              </div>
              <div className="text-lg font-bold text-white mb-2">info@rerainsights.com</div>
              <div className="text-blue-200 text-sm">Response within 24 hours</div>
            </div>
          </div>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </button>
          </div> */}
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-blue-200">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Free Initial Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  No Hidden Charges
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Expert Guidance
                </div>
              </div>
              <div className="flex items-center text-blue-200">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Pan-India
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Scroll to Top Button */}
      {isScrollBtnVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default Home;













// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Shield, Users, FileText, Award, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Building, Scale, Calendar, PlayCircle, TrendingUp, Clock, AlertCircle } from 'lucide-react';

// function Home() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [currentStat, setCurrentStat] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const testimonialInterval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
    
//     const statInterval = setInterval(() => {
//       setCurrentStat((prev) => (prev + 1) % stats.length);
//     }, 3000);
    
//     return () => {
//       clearInterval(testimonialInterval);
//       clearInterval(statInterval);
//     };
//   }, []);

//   const services = [
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "RERA Registration & Compliance",
//       description: "End-to-end RERA registration services with comprehensive compliance support to ensure your projects meet all regulatory requirements.",
//       features: ["Project Registration", "Document Preparation", "Compliance Audit", "Ongoing Support"],
//       highlight: "Most Popular"
//     },
//     {
//       icon: <Scale className="w-8 h-8" />,
//       title: "Legal Advisory & Due Diligence",
//       description: "Expert legal consultation for real estate transactions, regulatory compliance, and risk mitigation strategies.",
//       features: ["Legal Documentation", "Risk Assessment", "Contract Review", "Regulatory Guidance"]
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Strategic Consulting",
//       description: "Professional consultation for developers, investors, and stakeholders in navigating complex real estate regulations.",
//       features: ["Strategic Planning", "Market Analysis", "Investment Advisory", "Stakeholder Management"]
//     },
//     {
//       icon: <FileText className="w-8 h-8" />,
//       title: "Dispute Resolution & Mediation",
//       description: "Specialized services for resolving RERA-related disputes, complaints, and regulatory conflicts efficiently.",
//       features: ["Mediation Services", "Complaint Resolution", "Legal Representation", "Settlement Negotiation"]
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Rajesh Kumar",
//       role: "Real Estate Developer",
//       company: "Kumar Constructions",
//       content: "ConsultPro's expertise in RERA compliance transformed our project registration process. Their attention to detail and proactive approach saved us months of delays.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       project: "Luxury Residential Complex"
//     },
//     {
//       name: "Priya Sharma",
//       role: "Investment Director",
//       company: "Apex Realty Fund",
//       content: "Their strategic insights and regulatory expertise have been invaluable for our portfolio. ConsultPro's team consistently delivers beyond expectations.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//       project: "₹500Cr Investment Portfolio"
//     },
//     {
//       name: "Amit Patel",
//       role: "Managing Director",
//       company: "Patel Infrastructure",
//       content: "Working with ConsultPro has been a game-changer. Their comprehensive approach to RERA compliance gave us complete peace of mind.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       project: "Mixed-Use Development"
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Projects Successfully Registered", icon: <Building className="w-5 h-5" /> },
//     { number: "98.7%", label: "First-Time Approval Rate", icon: <CheckCircle className="w-5 h-5" /> },
//     { number: "1000+", label: "Satisfied Clients", icon: <Users className="w-5 h-5" /> },
//     { number: "15+", label: "Years of Combined Experience", icon: <Award className="w-5 h-5" /> }
//   ];

//   const processSteps = [
//     {
//       step: "01",
//       title: "Initial Consultation",
//       description: "Free assessment of your project requirements and regulatory landscape",
//       duration: "1-2 Days"
//     },
//     {
//       step: "02", 
//       title: "Documentation & Analysis",
//       description: "Comprehensive review and preparation of all required documents",
//       duration: "5-7 Days"
//     },
//     {
//       step: "03",
//       title: "Submission & Follow-up",
//       description: "Professional submission with continuous monitoring and updates",
//       duration: "Ongoing"
//     },
//     {
//       step: "04",
//       title: "Approval & Compliance",
//       description: "Final approval assistance and ongoing compliance support",
//       duration: "As Required"
//     }
//   ];

//   const insights = [
//     {
//       title: "RERA Compliance: 2025 Updates",
//       excerpt: "Latest regulatory changes and their impact on real estate projects across major Indian states.",
//       readTime: "5 min read",
//       category: "Regulatory Updates"
//     },
//     {
//       title: "Streamlining Project Approvals",
//       excerpt: "Best practices for faster RERA registration and avoiding common compliance pitfalls.",
//       readTime: "7 min read", 
//       category: "Best Practices"
//     },
//     {
//       title: "Investment Due Diligence Guide",
//       excerpt: "Essential checklist for investors evaluating RERA-compliant real estate opportunities.",
//       readTime: "10 min read",
//       category: "Investment Guide"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
//         <div className="max-w-7xl mx-auto relative">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//               <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
//                 <Award className="w-4 h-4 mr-2" />
//                 Trusted RERA Consulting Partner Since 2015
//               </div>
//               <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
//                 Navigate{' '}
//                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   RERA
//                 </span>{' '}
//                 <br />with Confidence
//               </h1>
//               <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
//                 Expert RERA consulting services ensuring complete regulatory compliance for your real estate projects. 
//                 From registration to ongoing support, we deliver results that matter.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
//                   Start Your Project
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
//                   <PlayCircle className="w-5 h-5 mr-2" />
//                   Watch Demo
//                 </button>
//               </div>
              
//               {/* Quick Stats Bar */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {stats.slice(0, 4).map((stat, index) => (
//                     <div key={index} className="text-center">
//                       <div className="flex items-center justify-center text-blue-600 mb-2">
//                         {stat.icon}
//                       </div>
//                       <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
//                       <div className="text-xs text-slate-600 leading-tight">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-3 opacity-20"></div>
//                 <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
//                   <img 
//                     src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
//                     alt="Modern office building representing RERA compliance"
//                     className="w-full h-80 object-cover rounded-2xl"
//                   />
//                   <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                       <span className="font-semibold text-slate-800">RERA Certified</span>
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                     </div>
//                   </div>
//                   <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
//                     <div className="text-sm font-medium">98.7% Success Rate</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Shield className="w-4 h-4 mr-2" />
//               Comprehensive RERA Solutions
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
//               Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               From initial consultation to final approval, we provide end-to-end RERA consulting services 
//               tailored to your specific requirements.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
//                 {service.highlight && (
//                   <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-medium">
//                     {service.highlight}
//                   </div>
//                 )}
//                 <div className="flex items-start space-x-4 mb-6">
//                   <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
//                     {service.icon}
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
//                     <p className="text-slate-600 leading-relaxed">{service.description}</p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3 mb-6">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center text-sm text-slate-600">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 group-hover:from-blue-600 group-hover:to-indigo-600">
//                   Learn More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//               Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               A streamlined approach to RERA compliance that ensures efficiency and success
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="relative group">
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
//                   <div className="text-center mb-6">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl mb-4 group-hover:scale-110 transition-transform">
//                       {step.step}
//                     </div>
//                     <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
//                     <div className="flex items-center justify-center text-sm text-blue-600 mb-4">
//                       <Clock className="w-4 h-4 mr-1" />
//                       {step.duration}
//                     </div>
//                   </div>
//                   <p className="text-slate-600 text-center leading-relaxed">{step.description}</p>
//                 </div>
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Client <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Success Stories</span>
//             </h2>
//             <p className="text-xl text-slate-300">
//               Hear from industry leaders who trust ConsultPro for their RERA compliance needs
//             </p>
//           </div>
          
//           <div className="relative">
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
//               <div className="text-center">
//                 <img 
//                   src={testimonials[currentTestimonial].image}
//                   alt={testimonials[currentTestimonial].name}
//                   className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white/20"
//                 />
//                 <div className="flex justify-center mb-6">
//                   {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <blockquote className="text-xl lg:text-2xl text-white mb-8 italic leading-relaxed max-w-4xl mx-auto">
//                   "{testimonials[currentTestimonial].content}"
//                 </blockquote>
//                 <div className="space-y-2">
//                   <div className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</div>
//                   <div className="text-blue-300">{testimonials[currentTestimonial].role}</div>
//                   <div className="text-slate-400">{testimonials[currentTestimonial].company}</div>
//                   <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-2">
//                     <Building className="w-3 h-3 mr-1" />
//                     {testimonials[currentTestimonial].project}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-center mt-8 space-x-3">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentTestimonial ? 'bg-blue-400 w-8' : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Insights Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between mb-16">
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//                 Latest <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Insights</span>
//               </h2>
//               <p className="text-xl text-slate-600">
//                 Stay updated with regulatory changes and industry best practices
//               </p>
//             </div>
//             <button className="hidden lg:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
//               View All Insights
//               <ChevronRight className="w-4 h-4 ml-1" />
//             </button>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {insights.map((insight, index) => (
//               <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
//                       {insight.category}
//                     </span>
//                     <span className="text-slate-500 text-sm">{insight.readTime}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
//                     {insight.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-4">
//                     {insight.excerpt}
//                   </p>
//                   <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
//                     Read More
//                     <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-8">
//             <AlertCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Ready to Ensure RERA Compliance?
//             </h2>
//             <p className="text-xl text-blue-100 leading-relaxed mb-8">
//               Don't let regulatory complexities delay your project. Get expert guidance and ensure 
//               seamless RERA compliance with our proven consultation process.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center">
//               <Calendar className="w-5 h-5 mr-2" />
//               Schedule Free Consultation
//             </button>
//             <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center">
//               <Phone className="w-5 h-5 mr-2" />
//               Call Now: +91 98765 43210
//             </button>
//           </div>
          
//           <div className="mt-12 pt-8 border-t border-white/20">
//             <div className="flex items-center justify-center space-x-8 text-blue-200">
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2" />
//                 <span>No Hidden Fees</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2" />
//                 <span>Expert Guidance</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2" />
//                 <span>Guaranteed Results</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default Home;