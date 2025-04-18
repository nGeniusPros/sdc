import Link from 'next/link';
import { SITE_DATA } from '../../lib/constants';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_DATA.name}</h3>
            <p className="mb-4">{SITE_DATA.tagline}</p>
            <p className="mb-2">{SITE_DATA.address}</p>
            <p className="mb-2">{SITE_DATA.phone}</p>
            <p>{SITE_DATA.email}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-secondary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href={SITE_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href={SITE_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SITE_DATA.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href={SITE_DATA.socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.94-.8-1.664-1.76l1.482-5.155c.276-.96 1.634-1.033 2.088-.146 1.312 2.67 3.73 4.608 3.09 5.63zm-7.457-10.09c.276-.96 1.636-1.034 2.088-.145.45.888-.098 2.36-1.587 2.982l-4.995 1.434c-.96.275-1.938-.8-1.664-1.76l1.484-5.154c.277-.96 1.634-1.035 2.088-.146.45.89-.1 2.36-1.588 2.982l.277-.96c.276-.96 1.634-1.033 2.087-.145.45.89-.098 2.36-1.587 2.983l.277-.96c.276-.96 1.634-1.034 2.087-.146.45.89-.097 2.36-1.587 2.982l.277-.96c.276-.96 1.634-1.034 2.087-.146.45.89-.097 2.36-1.587 2.982l.277-.96c.276-.96 1.634-1.034 2.087-.146.45.89-.097 2.36-1.587 2.982l.277-.96zm-3.13 10.09c-.64-1.02 1.777-2.954 3.09-5.63.454-.887 1.81-.814 2.087.146l1.483 5.155c.276.96-.704 2.036-1.665 1.76l-4.995-1.433zm-4.3 3.32c-.706-.878-.35-2.277.714-2.606l5.336-1.577c.96-.276 1.938.8 1.665 1.76l-1.484 5.154c-.277.96-1.634 1.033-2.088.145-1.314-2.67-3.73-4.607-3.09-5.63l-1.053 2.756zm3.73 4.608c-.45-.89.098-2.36 1.588-2.982l4.995-1.434c.96-.275 1.938.8 1.664 1.76l-1.484 5.154c-.276.96-1.634 1.035-2.088.146-.45-.89.1-2.36 1.588-2.982l-.277.96c-.276.96-1.634 1.033-2.087.145-.45-.89.098-2.36 1.587-2.983l-.277.96c-.276.96-1.634 1.034-2.087.146-.45-.89.097-2.36 1.587-2.982l-.277.96c-.276.96-1.634 1.034-2.087.146-.45-.89.097-2.36 1.587-2.982l-.277.96c-.276.96-1.634 1.034-2.087.146-.45-.89.097-2.36 1.587-2.982l-.277.96z" />
                </svg>
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
