import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    plotSize: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in your construction services.\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      action: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@homebricks.com', 'contact@homebricks.com'],
      action: 'mailto:info@homebricks.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sector 62, Noida', 'Delhi NCR, India - 201301'],
      action: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9 AM - 7 PM', 'Sunday: 10 AM - 5 PM'],
      action: null,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#121212] to-[#0E0E0E]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
              <span className="text-[#D2A15C] text-sm">Contact Us</span>
            </div>
            <h1 className="text-white mb-6">
              Let's Build Your <span className="text-gradient">Dream Project</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Get in touch with us today for a free consultation and quote. 
              Our team is ready to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D2A15C] to-[#F4E4C1] flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-[#0E0E0E]" />
                </div>
                <h5 className="text-white mb-3">{info.title}</h5>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm mb-1">
                    {info.action ? (
                      <a href={info.action} className="hover:text-[#D2A15C] transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gradient-to-b from-[#121212] to-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white mb-6">Get Your Free Quote</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-white mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                      placeholder="Delhi"
                    />
                  </div>

                  <div>
                    <label htmlFor="plotSize" className="block text-white mb-2">
                      Plot Size (sq.ft)
                    </label>
                    <input
                      type="text"
                      id="plotSize"
                      name="plotSize"
                      value={formData.plotSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                      placeholder="2000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-effect text-white focus:outline-none focus:ring-2 focus:ring-[#D2A15C]"
                  >
                    <option value="">Select budget range</option>
                    <option value="10-25">₹10-25 Lakhs</option>
                    <option value="25-50">₹25-50 Lakhs</option>
                    <option value="50-1cr">₹50 Lakhs - 1 Crore</option>
                    <option value="1cr+">₹1 Crore+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-effect text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D2A15C] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-[#D2A15C] text-[#0E0E0E] rounded-full hover:bg-[#F4E4C1] transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 border-2 border-[#25D366] text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[600px]"
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0634760803344!2d77.36591631508047!3d28.626137082422707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Homebricks Buildtech Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. A typical residential construction takes 6-12 months, while interior design projects can be completed in 2-4 months.',
              },
              {
                q: 'Do you provide a warranty?',
                a: 'Yes, we provide a comprehensive warranty on all construction work and materials. Structural work comes with a 5-year warranty, while finishing work has a 1-year warranty.',
              },
              {
                q: 'Can I customize the design?',
                a: 'Absolutely! We work closely with you to understand your vision and create customized designs that perfectly match your requirements and style preferences.',
              },
              {
                q: 'What are your payment terms?',
                a: 'We follow a milestone-based payment structure. Typically, 20% advance, 40% during construction, 30% on completion, and 10% after final handover.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <h5 className="text-white mb-3">{faq.q}</h5>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
