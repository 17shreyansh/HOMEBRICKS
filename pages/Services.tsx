import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Ruler, Home, Droplet, Sofa, TreePine, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: Building2,
      title: 'Construction & Turnkey Projects',
      shortDesc: 'End-to-end construction solutions from foundation to finishing',
      image: 'https://images.unsplash.com/photo-1615634364452-8daf3851f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Complete project management from start to finish',
        'Foundation work and structural engineering',
        'Brick work and plastering',
        'Electrical and plumbing installation',
        'Flooring, tiling, and finishing work',
        'Quality checks at every stage',
        'On-time delivery guarantee',
        'Post-construction support and warranty',
      ],
    },
    {
      icon: Ruler,
      title: 'Interior Design & Planning',
      shortDesc: 'Bespoke interior designs that reflect your personality and style',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI1NDYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        '3D visualization and design concepts',
        'Space planning and layout optimization',
        'Color consultation and material selection',
        'Furniture design and procurement',
        'Lighting design and installation',
        'False ceiling and wall treatments',
        'Window treatments and soft furnishings',
        'Complete project execution',
      ],
    },
    {
      icon: Home,
      title: 'Front Elevation Design',
      shortDesc: 'Stunning facades that make your home stand out',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI2MzUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Contemporary and traditional elevation designs',
        '3D modeling and visualization',
        'Material selection and color schemes',
        'Architectural detailing',
        'Balcony and window treatments',
        'Entrance design and landscaping',
        'Lighting integration',
        'Weather-resistant materials',
      ],
    },
    {
      icon: TreePine,
      title: 'Terrace Garden & Fountains',
      shortDesc: 'Transform your terrace into a green paradise',
      image: 'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNlJTIwZ2FyZGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MjYzNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Garden design and landscaping',
        'Irrigation system installation',
        'Custom fountain design',
        'Deck and patio construction',
        'Outdoor lighting solutions',
        'Plant selection and maintenance guide',
        'Seating area design',
        'Waterproofing and drainage systems',
      ],
    },
    {
      icon: Droplet,
      title: 'Luxury Toilets & Fixtures',
      shortDesc: 'Premium bathroom solutions with high-end fixtures',
      image: 'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Premium sanitaryware installation',
        'Designer tiles and flooring',
        'Glass partitions and shower enclosures',
        'Vanity units and storage solutions',
        'Lighting and ventilation systems',
        'Mirror and accessory installation',
        'Plumbing and waterproofing',
        'Smart bathroom technology',
      ],
    },
    {
      icon: Sofa,
      title: 'Custom Furniture & Wooden Ceilings',
      shortDesc: 'Handcrafted furniture and elegant ceiling designs',
      image: 'https://images.unsplash.com/photo-1668911491756-efb778ca35a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwbGl2aW5nfGVufDF8fHx8MTc2MjYzNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Bespoke furniture design and manufacturing',
        'Modular kitchen cabinets',
        'Wardrobes and storage units',
        'TV units and entertainment centers',
        'Wooden ceiling designs',
        'Wall paneling and cladding',
        'Premium wood and finish selection',
        'Installation and finishing',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#121212]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
              <span className="text-[#DC2626] text-sm">Our Services</span>
            </div>
            <h1 className="text-white mb-6">
              Comprehensive <span className="text-gradient">Construction Solutions</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From concept to completion, we offer a full spectrum of construction and interior design 
              services to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8">
                    {/* Icon and Title */}
                    <div className="lg:col-span-2 flex items-center space-x-6">
                      <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-[#DC2626] flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-[#0E0E0E]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.shortDesc}</p>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className="flex items-center justify-end">
                      <motion.div
                        animate={{ rotate: expandedService === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full glass-effect flex items-center justify-center"
                      >
                        <ChevronDown className="w-6 h-6 text-[#DC2626]" />
                      </motion.div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-8 border-t border-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                          {/* Image */}
                          <div className="order-2 lg:order-1">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-80 object-cover rounded-xl"
                            />
                          </div>

                          {/* Details */}
                          <div className="order-1 lg:order-2">
                            <h4 className="text-white mb-6">What's Included</h4>
                            <ul className="space-y-3">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-1" />
                                  <span className="text-gray-300">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to ensure your project is delivered on time and exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Design & Planning', desc: '3D visualization and detailed project planning' },
              { step: '03', title: 'Execution', desc: 'Professional construction with regular quality checks' },
              { step: '04', title: 'Delivery', desc: 'Final inspection and handover with warranty' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl relative"
              >
                <div className="text-[#DC2626] mb-4 opacity-20 absolute top-4 right-4">
                  {process.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-[#DC2626] flex items-center justify-center mb-4">
                  <span className="text-white">{process.step}</span>
                </div>
                <h5 className="text-white mb-3">{process.title}</h5>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your project and receive a free, no-obligation quote.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#DC2626] text-white rounded-full hover:bg-[#F87171] transition-all"
            >
              Get Your Free Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}