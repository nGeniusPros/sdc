import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_DATA } from '../../lib/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/SouthlandDentalCareLogo.png"
              alt={SITE_DATA.name}
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-800 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#education" className="text-gray-800 hover:text-primary transition-colors">
              Oral Health Education
            </Link>
            <Link href="#testimonials" className="text-gray-800 hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#video-testimonials" className="text-gray-800 hover:text-primary transition-colors">
              Video Stories
            </Link>
            <Link href="#faq" className="text-gray-800 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link href="#services" className="text-gray-800 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#education" className="text-gray-800 hover:text-primary transition-colors">
              Oral Health Education
            </Link>
            <Link href="#testimonials" className="text-gray-800 hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#video-testimonials" className="text-gray-800 hover:text-primary transition-colors">
              Video Stories
            </Link>
            <Link href="#faq" className="text-gray-800 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-block text-center"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
