import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#121212] to-[#0E0E0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D2A15C] to-[#F4E4C1] rounded-md flex items-center justify-center">
                <span className="text-[#0E0E0E]">HB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white tracking-tight">Homebricks Buildtech</span>
                <span className="text-[#D2A15C] text-xs">The Construction Co.</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building dreams, one brick at a time. With over 15 years of excellence in construction and interior design, we turn your vision into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-[#D2A15C] hover:text-[#0E0E0E] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-[#D2A15C] hover:text-[#0E0E0E] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-[#D2A15C] hover:text-[#0E0E0E] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-[#D2A15C] hover:text-[#0E0E0E] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#D2A15C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#D2A15C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#D2A15C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#D2A15C] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#D2A15C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#D2A15C] mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-[#D2A15C] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#D2A15C] mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@homebricks.com" className="hover:text-[#D2A15C] transition-colors">
                    info@homebricks.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D2A15C] mt-1 flex-shrink-0" />
                <div>
                  <span>Delhi NCR, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Homebricks Buildtech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#D2A15C] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D2A15C] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
