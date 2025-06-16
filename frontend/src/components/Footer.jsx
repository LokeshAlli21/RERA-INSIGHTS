// import React from 'react'
// import { ChevronRight, Shield, Users, FileText, Award, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Building, Scale, Calendar } from 'lucide-react';

// function Footer() {
//   return (
//       <footer className="bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Building className="w-8 h-8 text-blue-400" />
//                 <span className="text-2xl font-bold">RERA Experts</span>
//               </div>
//               <p className="text-gray-400">
//                 Your trusted partner for RERA compliance and real estate consulting services.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>RERA Registration</li>
//                 <li>Legal Compliance</li>
//                 <li>Consulting</li>
//                 <li>Dispute Resolution</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>About Us</li>
//                 <li>Our Team</li>
//                 <li>Careers</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//               <div className="space-y-2 text-gray-400">
//                 <p>+91 98765 43210</p>
//                 <p>info@reraexperts.com</p>
//                 <p>Mumbai, Maharashtra</p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 RERA Experts. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//   )
// }

// export default Footer

import React from 'react'
import { Shield, Phone, Mail, MapPin, Check  } from 'lucide-react';

function Footer() {
  return (
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">RERA INSIGHTS</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Specialized RERA consultancy services ensuring complete regulatory compliance 
                for real estate projects under RERA Act, 2016.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+91 80101 93788</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+91 80873 83405</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>rera.insights@gmail.com</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="text-sm"><b>Head Office:</b> Trimurti Appt., Opp. Mankapur Sports Complex, behind Kalpana Talkies, Mankapur, Nagpur-440030</span>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="text-sm"><b>Main Branch:</b> 5th Floor, 502, Town Centre, 1, Andheri - Kurla Rd, Mittal Industrial Estate, Marol Naka, Andheri East, Mumbai, Maharashtra 400059</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> RERA Project Registration</li>
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> Agent License Registration</li>
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> Quarterly Progress Reports</li>
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> RERA Advisory Services</li>
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> CA Certifications</li>
                <li className="hover:text-white transition-colors cursor-pointer flex flex-row flex-nowrap group"><Check className="w-4 h-4 mr-3 mt-1 text-green-400 group-hover:text-green-600 group-hover:h-5 group-hover:w-5 group-hover:ml-1 flex-shrink-0 duration-300 " /> Custom RERA Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#services">About Us</a></li>
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#our-team">Our Team</a></li>
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#why">Why Choose Us</a></li>
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#success-stories">Client Success Stories</a></li>
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#our-process">Our Process</a></li>
                <li className="hover:text-white transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; 2023 RERA INSIGHTS. All rights reserved. | Developed by <a href="https://oskartech.in/" className="text-blue-400 hover:text-blue-500 transition-colors">Oskar Technologies</a>
            </p>
            {/* <div className="flex items-center space-x-6 text-slate-400">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div> */}
          </div>
        </div>
      </footer>
        )
}

export default Footer