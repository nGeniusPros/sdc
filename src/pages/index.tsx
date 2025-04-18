import { NextPage } from 'next';
import SimpleHeroSection from '../components/sections/SimpleHeroSection';
import SimpleServicesSection from '../components/sections/SimpleServicesSection';
import OralHealthEducationSection from '../components/sections/OralHealthEducationSection';
import SimpleTestimonialsSection from '../components/sections/SimpleTestimonialsSection';
import VideoTestimonialsSection from '../components/sections/VideoTestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

const Home: NextPage = () => {
  return (
    <>
      <SimpleHeroSection />
      <SimpleServicesSection />
      <OralHealthEducationSection />
      <SimpleTestimonialsSection />
      <VideoTestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
