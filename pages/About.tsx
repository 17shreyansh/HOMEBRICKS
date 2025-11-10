import { motion } from 'framer-motion';
import { Users, Award, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Founded by Ashu Saifi with a vision to revolutionize construction',
    },
    {
      year: '2012',
      title: 'First Commercial Project',
      description: 'Completed our first major commercial building project',
    },
    {
      year: '2015',
      title: '100+ Projects Milestone',
      description: 'Celebrated completion of over 100 residential and commercial projects',
    },
    {
      year: '2020',
      title: '15 Years of Excellence',
      description: 'Established as a leading name in construction and interior design',
    },
    {
      year: '2025',
      title: 'Expanding Horizons',
      description: 'Continuing to innovate and set new standards in the industry',
    },
  ];

  const team = [
    {
      name: 'Ashu Saifi',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI2MDgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Neha Verma',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication and transparent processes define our client relationships.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace new technologies and design trends to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your vision is our mission. We prioritize your needs and exceed expectations.',
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
              <span className="text-[#DC2626] text-sm">About Us</span>
            </div>
            <h1 className="text-white mb-6">
              Crafting Spaces, <span className="text-gradient">Building Legacies</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              For over 15 years, Homebricks Buildtech has been transforming visions into reality, 
              one project at a time. Our commitment to excellence, innovation, and client satisfaction 
              has made us a trusted name in construction and interior design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Homebricks Buildtech was founded in 2008 by Ashu Saifi, a visionary entrepreneur 
                with a passion for creating exceptional spaces. What started as a small construction 
                firm has grown into a full-service design and build company, known for delivering 
                projects that exceed expectations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Over the years, we've completed hundreds of residential and commercial projects, 
                each one a testament to our dedication to quality, innovation, and customer satisfaction. 
                Our team of skilled professionals brings decades of combined experience to every project.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-effect p-6 rounded-xl">
                  <div className="text-[#DC2626] mb-2">500+</div>
                  <p className="text-white text-sm">Projects Completed</p>
                </div>
                <div className="glass-effect p-6 rounded-xl">
                  <div className="text-[#DC2626] mb-2">100%</div>
                  <p className="text-white text-sm">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#DC2626] rounded-2xl transform -rotate-6" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI2MzUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Architecture"
                  className="relative rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of milestones that define our commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[2.5rem] top-12 w-0.5 h-full bg-[#DC2626]" />
                  )}

                  {/* Year Badge */}
                  <div className="relative z-10 w-20 h-20 flex-shrink-0 rounded-full bg-[#DC2626] flex items-center justify-center">
                    <span className="text-white">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-effect p-6 rounded-xl">
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl text-center hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#DC2626] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#0E0E0E]" />
                </div>
                <h5 className="text-white mb-3">{value.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The talented professionals behind every successful project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <h5 className="text-white mb-1">{member.name}</h5>
                <p className="text-[#DC2626] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}