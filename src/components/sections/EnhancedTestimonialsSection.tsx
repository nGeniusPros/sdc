import { useState, useEffect } from 'react';
import { TESTIMONIALS_SECTION } from '../../lib/constants';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i < rating ? 'text-secondary' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  testimonial
}: {
  testimonial: {
    quote: string;
    author: string;
    location: string;
    rating: number
  };
  isActive?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full blur-md"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full blur-md"></div>

      {/* Quote icon */}
      <div className="absolute -top-5 -left-5 bg-secondary text-primary p-3 rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="pt-4 pl-2 relative z-10">
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        <blockquote className="relative">
          <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
            "{testimonial.quote}"
          </p>

          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              {testimonial.author.charAt(0)}
            </div>
            <div className="ml-4">
              <p className="font-bold text-primary">{testimonial.author}</p>
              <p className="text-gray-600 text-sm">{testimonial.location}</p>
            </div>
          </div>
        </blockquote>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = TESTIMONIALS_SECTION.testimonials;

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Section id="testimonials" className="relative bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            title={TESTIMONIALS_SECTION.title}
            subtitle={TESTIMONIALS_SECTION.subtitle}
            centered
          />
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={activeIndex}
                testimonial={testimonials[activeIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review platforms */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-bold text-primary text-center mb-6">
            See What Our Patients Are Saying
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Google', rating: '4.9', count: '320+', color: 'bg-blue-50 text-blue-600' },
              { name: 'Yelp', rating: '4.8', count: '180+', color: 'bg-red-50 text-red-600' },
              { name: 'Facebook', rating: '4.9', count: '150+', color: 'bg-indigo-50 text-indigo-600' },
              { name: 'Healthgrades', rating: '5.0', count: '90+', color: 'bg-green-50 text-green-600' }
            ].map((platform, i) => (
              <div key={i} className={`${platform.color} rounded-xl p-4 text-center`}>
                <p className="font-bold text-2xl">{platform.rating}/5</p>
                <div className="flex justify-center my-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm">{platform.name}</p>
                <p className="text-xs mt-1">{platform.count} reviews</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.yelp.com/southlanddentalcare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>Read More Reviews</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
