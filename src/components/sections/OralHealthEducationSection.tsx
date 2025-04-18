import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EDUCATION_SECTION } from '../../lib/constants';
import Button from '../Button';

// Icon components for each topic
const TopicIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'diabetes':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'lungs':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      );
    case 'pregnancy':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'joints':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
};

// Topic card component
const TopicCard = ({
  topic,
  isSelected,
  onClick
}: {
  topic: any;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <motion.div
    className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
      isSelected
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-100'
    }`}
    onClick={onClick}
    whileHover={{ y: -5 }}
    layout
  >
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-full ${isSelected ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
        <TopicIcon icon={topic.icon} />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
        <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
          {topic.subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

// Detailed topic view component
const TopicDetail = ({ topic }: { topic: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
  >
    <div className="flex items-start gap-6">
      <div className="hidden md:block bg-primary text-white p-4 rounded-xl">
        <TopicIcon icon={topic.icon} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 md:hidden mb-4">
          <div className="bg-primary text-white p-3 rounded-xl">
            <TopicIcon icon={topic.icon} />
          </div>
          {topic.relatedCondition && (
            <span className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {topic.relatedCondition}
            </span>
          )}
        </div>

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">{topic.title}</h3>
          <div className="hidden md:block">
            {topic.relatedCondition && (
              <span className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {topic.relatedCondition}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-6 text-lg">
          {topic.description}
        </p>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3 text-primary">Key Facts:</h4>
          <ul className="space-y-3">
            {topic.keyPoints.map((point: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          text={topic.ctaText}
          href={`#${topic.id}`}
          variant="secondary"
          size="lg"
        />
      </div>
    </div>
  </motion.div>
);

export const OralHealthEducationSection = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const selectedTopic = EDUCATION_SECTION.topics[selectedTopicIndex];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Mouth-Body Connection
          </motion.span>

          <motion.h2
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {EDUCATION_SECTION.title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {EDUCATION_SECTION.subtitle}
          </motion.p>
        </div>

        <div className="mb-8">
          <motion.p
            className="text-center text-gray-700 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {EDUCATION_SECTION.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {EDUCATION_SECTION.topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isSelected={selectedTopicIndex === index}
              onClick={() => setSelectedTopicIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <TopicDetail key={selectedTopic.id} topic={selectedTopic} />
        </AnimatePresence>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 py-12 px-6 rounded-2xl max-w-4xl mx-auto shadow-md border border-primary/10 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#087bbf" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Address the Root Cause?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Our comprehensive approach to dental care considers the whole-body impact of oral health.
              Let's work together to protect not just your smile, but your overall wellbeing.
            </p>
            <Button
              text={EDUCATION_SECTION.ctaText}
              href="#contact"
              variant="primary"
              size="lg"
            />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OralHealthEducationSection;
