import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Ruler, Home as HomeIcon, Droplet, Sofa, TreePine, Award, Clock, CheckCircle2, Users, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const stats = [
    { icon: Clock, label: '15+ Years Experience', value: '15+' },
    { icon: Award, label: '500+ Quality Checks', value: '500+' },
    { icon: Building2, label: 'Turnkey Construction', value: '100%' },
    { icon: Users, label: '10,000+ Designs', value: '10K+' },
  ];

  const services = [
    {
      icon: Building2,
      title: 'Construction & Turnkey Projects',
      description: 'End-to-end construction solutions from foundation to finishing',
    },
    {
      icon: Ruler,
      title: 'Interior Design & Planning',
      description: 'Bespoke interior designs that reflect your personality and style',
    },
    {
      icon: HomeIcon,
      title: 'Front Elevation Design',
      description: 'Stunning facades that make your home stand out',
    },
    {
      icon: TreePine,
      title: 'Terrace Garden & Fountains',
      description: 'Transform your terrace into a green paradise',
    },
    {
      icon: Droplet,
      title: 'Luxury Toilets & Fixtures',
      description: 'Premium bathroom solutions with high-end fixtures',
    },
    {
      icon: Sofa,
      title: 'Custom Furniture & Wooden Ceilings',
      description: 'Handcrafted furniture and elegant ceiling designs',
    },
  ];

  const comparisons = [
    {
      homebricks: '500+ quality checks at every stage',
      others: 'Minimal quality assurance',
    },
    {
      homebricks: '15+ years of proven excellence',
      others: 'Limited experience',
    },
    {
      homebricks: 'Turnkey solutions - single point contact',
      others: 'Multiple contractors to manage',
    },
    {
      homebricks: 'Premium materials with warranty',
      others: 'Standard materials, no warranty',
    },
    {
      homebricks: 'On-time delivery guarantee',
      others: 'Frequent delays',
    },
    {
      homebricks: 'Dedicated project manager',
      others: 'No dedicated support',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1615634364452-8daf3851f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-6"
          >
            Building Dreams,{' '}
            <span className="text-gradient">One Brick at a Time</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            15+ Years of Excellence in Construction & Interiors
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-[#DC2626] text-white rounded-full hover:bg-[#F87171] transition-all flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0E0E0E] transition-all flex items-center justify-center"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#DC2626] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-effect flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#DC2626]" />
                </div>
                <div className="text-[#DC2626] mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Premium Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive construction and interior design solutions tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#DC2626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-[#0E0E0E]" />
                </div>
                <h4 className="text-white mb-3 group-hover:text-[#DC2626] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Why Choose Homebricks?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-2 bg-[#DC2626] p-6">
                <div className="text-white">Homebricks Buildtech</div>
                <div className="text-white">Other Contractors</div>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-2 border-b border-white/10 last:border-b-0"
                >
                  <div className="p-6 flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white text-sm">{comparison.homebricks}</span>
                  </div>
                  <div className="p-6 flex items-center space-x-3 bg-white/5">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{comparison.others}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Spotlight */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
                <span className="text-[#DC2626] text-sm">Leadership</span>
              </div>
              <h2 className="text-white mb-6">Meet Our Founder</h2>
              <h3 className="text-[#DC2626] mb-4">Ashu Saifi</h3>
              <h5 className="text-gray-400 mb-6">CEO & Founder</h5>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 15 years of experience in the construction and interior design industry, 
                Ashu Saifi founded Homebricks Buildtech with a vision to transform spaces and create 
                homes that inspire.
              </p>
              <div className="glass-effect p-6 rounded-xl border-l-4 border-[#DC2626]">
                <p className="text-white italic">
                  "Quality is not an act, it is a habit. Every project we undertake is a testament 
                  to our commitment to excellence and our passion for creating spaces that stand 
                  the test of time."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#DC2626] rounded-2xl transform rotate-6" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI2MDgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ashu Saifi - CEO & Founder"
                  className="relative rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Ready to Start Your Dream Project?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's bring your vision to life. Get in touch with us today for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#DC2626] text-white rounded-full hover:bg-[#F87171] transition-all"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}