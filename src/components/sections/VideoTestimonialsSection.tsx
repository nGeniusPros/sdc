import React, { useState } from 'react';
import { motion } from 'framer-motion';

// YouTube video data
const videoTestimonials = [
  {
    id: 'BbQUFDTTfIk',
    title: 'Patient Testimonial 1',
    description: 'Learn how our cosmetic dentistry transformed this smile'
  },
  {
    id: '2Jzpmsrb0-E',
    title: 'Patient Testimonial 2',
    description: 'Hear about this patient\'s experience with our dental implants'
  },
  {
    id: 'IfT6MHJ-Q-M',
    title: 'Patient Testimonial 3',
    description: 'A patient shares their VIP concierge experience'
  },
  {
    id: 'rjJNOQwCUj4',
    title: 'Patient Testimonial 4',
    description: 'See the results of our full mouth restoration'
  },
  {
    id: 'lbJPBQ56nNM',
    title: 'Patient Testimonial 5',
    description: 'Hear about this patient\'s journey to a new smile'
  },
  {
    id: 'A3BBHay_Wh0',
    title: 'Patient Testimonial 6',
    description: 'A patient shares their experience with our periodontal care'
  }
];

// Video player component
const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg flex-grow">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?si=4eeBptA4xiDhqHQA`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full"
        style={{ height: '600px' }}
      ></iframe>
    </div>
  );
};

// Video thumbnail component
const VideoThumbnail = ({
  videoId,
  title,
  description,
  isSelected,
  onClick
}: {
  videoId: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-4 ring-primary' : 'hover:ring-2 ring-secondary/50'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex flex-col bg-white rounded-lg shadow-md h-full">
        <div className="relative h-48">
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className={`absolute inset-0 flex items-center justify-center ${
            isSelected ? 'bg-primary/20' : 'bg-black/40 hover:bg-black/20'
          }`}>
            <div className={`rounded-full p-3 ${
              isSelected ? 'bg-primary text-white' : 'bg-white/90 text-primary'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h4 className={`font-semibold ${isSelected ? 'text-primary' : 'text-gray-800'}`}>{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const VideoTestimonialsSection = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const selectedVideo = videoTestimonials[selectedVideoIndex];

  return (
    <section id="video-testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block bg-secondary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Real Patient Stories
          </motion.span>

          <motion.h2
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Video Testimonials
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear directly from our patients about their transformative experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <motion.div
              key={selectedVideo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <VideoPlayer videoId={selectedVideo.id} />
              <div className="mt-4 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-primary">{selectedVideo.title}</h3>
                <p className="text-gray-600">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold text-primary mb-4 text-center lg:text-left">More Patient Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
              <div className="contents first:contents-[2]">
                {videoTestimonials.slice(0, 2).map((video, index) => (
                  <VideoThumbnail
                    key={video.id}
                    videoId={video.id}
                    title={video.title}
                    description={video.description}
                    isSelected={selectedVideoIndex === index}
                    onClick={() => setSelectedVideoIndex(index)}
                  />
                ))}
              </div>
              <div className="contents">
                {videoTestimonials.slice(2).map((video, index) => (
                  <VideoThumbnail
                    key={video.id}
                    videoId={video.id}
                    title={video.title}
                    description={video.description}
                    isSelected={selectedVideoIndex === index + 2}
                    onClick={() => setSelectedVideoIndex(index + 2)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who have transformed their smiles and lives with our expert periodontal and cosmetic dental care.
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-200"
            >
              Schedule Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
