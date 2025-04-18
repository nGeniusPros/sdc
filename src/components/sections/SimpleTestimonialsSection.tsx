import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    quote: "Dr. Hanookai and his team changed my life. After years of hiding my smile, I now cannot stop showing it off!",
    author: "Sarah T.",
    rating: 5,
    image: "/testimonial1.jpg"
  },
  {
    quote: "The same-day implants were incredible. I walked in with missing teeth and walked out with a complete smile. No pain, no waiting!",
    author: "Michael R.",
    rating: 5,
    image: "/testimonial2.jpg"
  },
  {
    quote: "I was terrified of dental work until I found Southland Dental Care. Their gentle approach and sedation options made everything painless.",
    author: "Jennifer L.",
    rating: 5,
    image: "/testimonial3.jpg"
  }
];

// Review platform data
const platforms = [
  { name: "Google", rating: 4.9, count: 253 },
  { name: "Yelp", rating: 4.8, count: 187 },
  { name: "Facebook", rating: 5.0, count: 98 },
  { name: "Healthgrades", rating: 4.9, count: 124 }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-secondary">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-secondary' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const SimpleTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0A4B78" d="M39.9,-65.7C52.8,-59.6,65.2,-50.8,72.7,-38.5C80.2,-26.2,82.9,-10.5,79.8,3.1C76.8,16.7,68,28.3,59.1,39.9C50.1,51.5,41,63.2,29.2,69.5C17.3,75.8,2.7,76.8,-12.1,74.8C-26.9,72.8,-41.9,67.8,-53.3,58.4C-64.7,49,-72.5,35.2,-76.3,20.5C-80.1,5.8,-79.9,-9.7,-74.7,-22.9C-69.5,-36.1,-59.3,-46.9,-47.1,-53.5C-34.9,-60.1,-20.7,-62.5,-6.9,-62.4C6.9,-62.3,27,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real stories from real patients who have transformed their smiles with us
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <StarRating rating={testimonials[currentIndex].rating} />
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <p className="font-bold text-primary">
                      {testimonials[currentIndex].author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-center text-2xl font-bold text-primary mb-8">
            Trusted Across Review Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h4 className="font-bold text-lg mb-2">{platform.name}</h4>
                <div className="flex justify-center mb-2">
                  <StarRating rating={platform.rating} />
                </div>
                <p className="text-gray-700">
                  <span className="font-bold text-xl">{platform.rating}</span>/5.0
                </p>
                <p className="text-gray-500 text-sm">
                  Based on {platform.count} reviews
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleTestimonialsSection;
