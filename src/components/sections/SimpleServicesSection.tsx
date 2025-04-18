import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import Image from 'next/image';

// Service card component
const ServiceCard = ({
  // id is used for accessibility and future features
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title,
  description,
  icon,
  isSelected,
  onClick
}: {
  id: string;
  title: string;
  description: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <motion.div
    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
      isSelected
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white hover:bg-gray-50 text-gray-800'
    }`}
    onClick={onClick}
    whileHover={{ y: -5 }}
    layout
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-full ${isSelected ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
        {icon === 'implants' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )}
        {icon === 'cosmetic' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {icon === 'emergency' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {icon === 'general' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`${isSelected ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  </motion.div>
);

export const SimpleServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking implants that function like real teeth, performed by our expert periodontist.',
      icon: 'implants',
    },
    {
      id: 'porcelain-veneers',
      title: 'Porcelain Veneers',
      description: 'Transform your smile with custom-designed veneers that look natural, radiant, and flawless, crafted by our "smile engineer."',
      icon: 'cosmetic',
    },
    {
      id: 'full-mouth-restoration',
      title: 'Full Mouth Restoration',
      description: 'Comprehensive treatment to restore function and aesthetics for severely damaged or missing teeth with expert periodontal care.',
      icon: 'emergency',
    },
    {
      id: 'concierge',
      title: 'VIP Concierge Service',
      description: 'Enjoy free transportation and personalized care for major dental procedures, making your experience stress-free and convenient.',
      icon: 'general',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Specialized Periodontal Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert periodontal and cosmetic dental treatments with VIP concierge service
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isSelected={selectedService === index}
              onClick={() => setSelectedService(index)}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:p-12 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">VIP Concierge Service</h3>
                <p className="text-gray-600 mb-6">
                  At Southland Dental Care, we strive to make high-quality dental treatments as stress-free and convenient as possible with our VIP concierge service for major dental procedures.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free transportation to and from our office</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert care from Dr. Hanookai (periodontist) and Dr. Abaian (cosmetic dentist)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Affordable financing options with low monthly payments</span>
                  </li>
                </ul>
                <Button
                  text="Learn More About Our Concierge Service"
                  href="#contact"
                  variant="secondary"
                  size="md"
                />
              </motion.div>
            </div>
            <div className="relative overflow-hidden flex-1 min-h-[300px] lg:min-h-full">
              <Image
                src={`/images/vipconcierge1.png?t=${new Date().getTime()}`}
                alt="VIP concierge service with luxury transportation"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
                className="rounded-r-2xl"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleServicesSection;
