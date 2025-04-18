import { SERVICES_SECTION } from '../../lib/constants';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Service Card Component
const ServiceCard = ({
  service,
  index,
  isActive,
  onClick
}: {
  service: { title: string; description: string; image: string };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isActive
          ? 'bg-primary text-white shadow-xl scale-105 z-10'
          : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      {/* Decorative elements */}
      {isActive && (
        <>
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </>
      )}

      {/* Service icon */}
      <div className="p-6 relative z-10">
        <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${
          isActive ? 'bg-secondary text-primary' : 'bg-primary/10 text-primary'
        }`}>
          {service.title === 'Dental Implants' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v8" />
            </svg>
          )}
          {service.title === 'Cosmetic Dentistry' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {service.title === 'Same-Day Smile' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {service.title === 'Full Mouth Reconstruction' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )}
        </div>

        <h3 className={`text-2xl font-bold mb-3 ${isActive ? 'text-white' : 'text-primary'}`}>
          {service.title}
        </h3>

        <p className={`mb-6 ${isActive ? 'text-white/90' : 'text-gray-700'}`}>
          {service.description}
        </p>

        <Button
          text="Learn More"
          href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          variant={isActive ? "primary" : "secondary"}
          size="md"
        />
      </div>

      {/* Indicator for active state */}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></div>
      )}
    </motion.div>
  );
};

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <Section id="services" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Large decorative circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            title={SERVICES_SECTION.title}
            subtitle={SERVICES_SECTION.subtitle}
            centered
            className="mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {SERVICES_SECTION.services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            text="View All Services"
            href="#contact"
            variant="primary"
            size="lg"
          />
        </motion.div>

        {/* Feature highlight */}
        <motion.div
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Advanced In-House Dental Lab
              </h3>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art in-house dental lab with 3D printing technology allows us to create custom dental restorations in just one day. No waiting weeks for outside labs - get your perfect smile faster!
              </p>
              <ul className="space-y-3">
                {['Same-day restorations', 'Perfect color matching', 'Custom-designed for your face', 'Higher quality control'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-6 w-6 rounded-full bg-secondary/20 text-primary flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white p-4 rounded-xl shadow-md">
              <div className="relative bg-gray-200 rounded-lg" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image: In-house dental lab with 3D printer
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServicesSection;
