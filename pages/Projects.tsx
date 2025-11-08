import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['all', 'residential', 'commercial', 'interior', 'turnkey'];

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'residential',
      location: 'Gurgaon, Delhi NCR',
      area: '4,500 sq.ft',
      year: '2024',
      thumbnail: 'https://images.unsplash.com/photo-1615634364452-8daf3851f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1615634364452-8daf3851f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI2MzUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'A stunning contemporary villa featuring clean lines, premium materials, and state-of-the-art amenities.',
      scope: ['Complete construction', 'Interior design', 'Landscape design', 'Smart home integration'],
      testimonial: {
        text: 'Homebricks transformed our vision into reality. The attention to detail and quality of work exceeded our expectations.',
        author: 'Mr. Rajesh Sharma',
      },
    },
    {
      id: 2,
      title: 'Contemporary Living Room',
      category: 'interior',
      location: 'Delhi',
      area: '1,200 sq.ft',
      year: '2024',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI1NDYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI1NDYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1668911491756-efb778ca35a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwbGl2aW5nfGVufDF8fHx8MTc2MjYzNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'Elegant interior design with a perfect blend of functionality and aesthetics.',
      scope: ['Interior design', 'Custom furniture', 'Lighting design', 'Color consultation'],
      testimonial: {
        text: 'The team\'s creativity and professionalism made the entire process smooth and enjoyable.',
        author: 'Mrs. Priya Verma',
      },
    },
    {
      id: 3,
      title: 'Luxury Commercial Lobby',
      category: 'commercial',
      location: 'Noida',
      area: '3,000 sq.ft',
      year: '2023',
      thumbnail: 'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBsb2JieXxlbnwxfHx8fDE3NjI2MzU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBsb2JieXxlbnwxfHx8fDE3NjI2MzU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'A sophisticated commercial space designed to impress visitors and create a lasting impact.',
      scope: ['Interior design', 'Marble flooring', 'Custom reception desk', 'Lighting installation'],
      testimonial: {
        text: 'Homebricks delivered a world-class commercial space that perfectly represents our brand.',
        author: 'Mr. Amit Patel',
      },
    },
    {
      id: 4,
      title: 'Premium Bathroom Suite',
      category: 'interior',
      location: 'Ghaziabad',
      area: '300 sq.ft',
      year: '2024',
      thumbnail: 'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmF0aHJvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzYyNjM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'Luxurious bathroom featuring premium fixtures, elegant tiling, and spa-like ambiance.',
      scope: ['Bathroom design', 'Premium fixtures', 'Glass partitions', 'Waterproofing'],
      testimonial: {
        text: 'Our bathroom feels like a luxury spa. The quality and finish are absolutely top-notch.',
        author: 'Mrs. Neha Singh',
      },
    },
    {
      id: 5,
      title: 'Modern Kitchen Design',
      category: 'interior',
      location: 'Faridabad',
      area: '250 sq.ft',
      year: '2024',
      thumbnail: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjI1ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjI1ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'A sleek, functional kitchen combining modern aesthetics with practical storage solutions.',
      scope: ['Modular kitchen', 'Chimney installation', 'Built-in appliances', 'Custom cabinetry'],
      testimonial: {
        text: 'The kitchen is both beautiful and functional. Every detail was thought through perfectly.',
        author: 'Mr. Vikram Malhotra',
      },
    },
    {
      id: 6,
      title: 'Terrace Garden Oasis',
      category: 'residential',
      location: 'Delhi',
      area: '800 sq.ft',
      year: '2023',
      thumbnail: 'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNlJTIwZ2FyZGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MjYzNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      images: [
        'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNlJTIwZ2FyZGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MjYzNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      description: 'A tranquil terrace garden with lush greenery, water features, and comfortable seating areas.',
      scope: ['Garden design', 'Irrigation system', 'Deck installation', 'Outdoor lighting'],
      testimonial: {
        text: 'Our terrace has become our favorite space. It\'s like having a private retreat.',
        author: 'Dr. Kavita Joshi',
      },
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const selectedProjectData = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null;

  const nextImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProjectData.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProjectData.images.length - 1 : prev - 1
      );
    }
  };

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
              <span className="text-[#D2A15C] text-sm">Our Projects</span>
            </div>
            <h1 className="text-white mb-6">
              Portfolio of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our collection of completed projects that showcase our commitment to 
              quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#121212] sticky top-20 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterItem) => (
              <button
                key={filterItem}
                onClick={() => setFilter(filterItem)}
                className={`px-6 py-2.5 rounded-full transition-all capitalize ${
                  filter === filterItem
                    ? 'bg-[#D2A15C] text-[#0E0E0E]'
                    : 'glass-effect text-white hover:bg-white/10'
                }`}
              >
                {filterItem}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-[#121212] to-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedProject(project.id);
                  setCurrentImageIndex(0);
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-[#D2A15C] rounded-full text-[#0E0E0E] text-xs mb-3 capitalize">
                      {project.category}
                    </div>
                    <h4 className="text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 text-sm">{project.location} • {project.area}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Gallery */}
              <div className="relative mb-8">
                <ImageWithFallback
                  src={selectedProjectData.images[currentImageIndex]}
                  alt={selectedProjectData.title}
                  className="w-full h-[60vh] object-cover rounded-2xl"
                />
                
                {selectedProjectData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProjectData.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-[#D2A15C] w-8' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-[#D2A15C] rounded-full text-[#0E0E0E] text-sm mb-4 capitalize">
                    {selectedProjectData.category}
                  </div>
                  <h2 className="text-white mb-4">{selectedProjectData.title}</h2>
                  <div className="flex items-center space-x-6 text-gray-400 mb-6">
                    <span>{selectedProjectData.location}</span>
                    <span>•</span>
                    <span>{selectedProjectData.area}</span>
                    <span>•</span>
                    <span>{selectedProjectData.year}</span>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {selectedProjectData.description}
                  </p>

                  {/* Testimonial */}
                  <div className="glass-effect p-6 rounded-xl border-l-4 border-[#D2A15C]">
                    <p className="text-white italic mb-3">"{selectedProjectData.testimonial.text}"</p>
                    <p className="text-[#D2A15C]">— {selectedProjectData.testimonial.author}</p>
                  </div>
                </div>

                <div>
                  <div className="glass-effect p-6 rounded-xl">
                    <h5 className="text-white mb-4">Scope of Work</h5>
                    <ul className="space-y-3">
                      {selectedProjectData.scope.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D2A15C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
