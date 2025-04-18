import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import Image from 'next/image';

// Badge component for trust signals
const TrustBadge = ({ text, icon }: { text: string; icon: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/95 px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-primary font-medium"
  >
    {icon === 'education' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )}
    {icon === 'experience' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    )}
    {icon === 'results' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )}
    <span>{text}</span>
  </motion.div>
);

export const SimpleHeroSection = () => {
  return (
    <section id="hero" className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M39.9,-65.7C52.8,-59.6,65.2,-50.8,72.7,-38.5C80.2,-26.2,82.9,-10.5,79.8,3.1C76.8,16.7,68,28.3,59.1,39.9C50.1,51.5,41,63.2,29.2,69.5C17.3,75.8,2.7,76.8,-12.1,74.8C-26.9,72.8,-41.9,67.8,-53.3,58.4C-64.7,49,-72.5,35.2,-76.3,20.5C-80.1,5.8,-79.9,-9.7,-74.7,-22.9C-69.5,-36.1,-59.3,-46.9,-47.1,-53.5C-34.9,-60.1,-20.7,-62.5,-6.9,-62.4C6.9,-62.3,27,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M47.7,-73.2C62.1,-67.3,74.5,-55.3,79.4,-41.1C84.3,-26.9,81.8,-10.5,78.9,5.3C76,21.1,72.8,36.3,64.2,47.9C55.7,59.5,41.8,67.5,27.4,71.8C13,76.1,-1.9,76.7,-17.8,74.5C-33.8,72.3,-50.8,67.3,-62.8,56.6C-74.8,45.8,-81.8,29.3,-83.5,12.5C-85.2,-4.3,-81.6,-21.3,-73.3,-35.5C-65,-49.7,-52,-61,-38.2,-67.1C-24.4,-73.2,-9.8,-74.1,3.9,-80.1C17.7,-86.1,33.3,-97.1,47.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Floating badge */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="inline-block bg-secondary text-primary font-bold px-4 py-2 rounded-full shadow-lg">
                  Same-Day Smile Transformations
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Smile in Just One Day
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-100">
                Expert Dental Implants & Cosmetic Dentistry in Los Angeles
              </p>
              <p className="text-lg mb-8 text-gray-200 max-w-xl">
                Experience the confidence of a beautiful smile with our advanced dental solutions. Our USC-educated dentists with 28+ years of experience are ready to transform your smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  text="Schedule Free Consultation"
                  href="#contact"
                  variant="primary"
                  size="lg"
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                <TrustBadge text="USC Educated" icon="education" />
                <TrustBadge text="28+ Years Experience" icon="experience" />
                <TrustBadge text="Same-Day Results" icon="results" />
              </div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Testimonial floating card */}
              <motion.div
                className="absolute -left-16 -bottom-10 z-20 hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="text-secondary">
                      ★★★★★
                    </div>
                    <div className="ml-2 text-sm font-medium">5.0</div>
                  </div>
                  <p className="text-sm">"Dr. Hanookai and his team changed my life. After years of hiding my smile, I now cannot stop showing it off!"</p>
                  <div className="mt-2 text-xs text-gray-500">- Sarah T., Actual Patient</div>
                </div>
              </motion.div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <div className="relative" style={{ paddingBottom: '75%' }}>
                  <Image
                    src={`/images/heroimage1.png?t=${new Date().getTime()}`}
                    alt="Smiling patient with beautiful teeth"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                    priority
                    unoptimized={true}
                  />
                </div>
              </div>

              {/* Stats counter */}
              <motion.div
                className="absolute -right-10 -bottom-6 z-20 hidden lg:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="bg-primary text-white p-4 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">5-star reviews</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;
