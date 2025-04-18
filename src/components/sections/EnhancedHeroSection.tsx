import { HERO_SECTION } from '../../lib/constants';
import Button from '../Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

// Testimonial component
const Testimonial = ({ quote, author, location }: { quote: string; author: string; location: string }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-lg relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute -top-3 -left-3 bg-secondary text-primary p-2 rounded-full shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    <div className="flex mb-3 ml-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-secondary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-700 italic mb-4 relative">
      <span className="text-secondary text-4xl absolute -top-3 -left-1">"</span>
      <span className="block pt-3 pl-4">{quote}</span>
      <span className="text-secondary text-4xl absolute bottom-0 right-0">"</span>
    </p>
    <div className="flex items-center mt-4">
      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-primary font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  </motion.div>
);

export const HeroSection = () => {
  // Testimonial data
  const [_currentTestimonialIndex] = useState(0);
  const testimonial = {
    quote: "Dr. Hanookai and his team changed my life. After years of hiding my smile, I now can't stop showing it off!",
    author: "Sarah M.",
    location: "Los Angeles, CA"
  };

  // Floating animation for the badges
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating badge */}
              <motion.div
                className="absolute -top-12 -left-6 md:-left-10 z-10"
                animate={floatingAnimation}
              >
                <div className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold shadow-lg transform -rotate-6">
                  Same-Day Smile Transformations!
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {HERO_SECTION.title}
              </h1>
              <motion.p
                className="text-xl md:text-2xl mb-6 text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {HERO_SECTION.subtitle}
              </motion.p>
              <motion.p
                className="text-lg mb-8 text-gray-200 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {HERO_SECTION.description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button
                  text={HERO_SECTION.ctaText}
                  href="#contact"
                  variant="primary"
                  size="lg"
                />
                <Button
                  text={HERO_SECTION.ctaSecondaryText}
                  href="tel:3108275094"
                  variant="outline"
                  size="lg"
                />
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <TrustBadge text="USC Educated" icon="education" />
                <TrustBadge text="28+ Years Experience" icon="experience" />
                <TrustBadge text="Same-Day Results" icon="results" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Image and testimonial */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Main image container with decorative elements */}
              <div className="relative">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-full z-0 opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.5, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/60 rounded-full z-0 blur-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.4, 0.6],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Image placeholder - replace with actual image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <div className="relative" style={{ paddingBottom: '75%' }}>
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">
                        Hero Image: Smiling patient with beautiful teeth
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial card - positioned for overlap effect */}
              <div className="absolute -bottom-16 -right-4 md:right-4 w-full max-w-sm z-20">
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                />
              </div>

              {/* Stats counter */}
              <motion.div
                className="absolute -top-4 -right-4 md:right-4 bg-white text-primary px-4 py-3 rounded-lg shadow-lg z-20 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">500+</span>
                <span className="text-sm">5-star reviews</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
