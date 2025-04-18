import { SPECIAL_OFFER_SECTION } from '../../lib/constants';
import Section from '../Section';
import Button from '../Button';
import { motion } from 'framer-motion';

export const SpecialOfferSection = () => {
  return (
    <Section id="special-offer" className="bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{SPECIAL_OFFER_SECTION.title}</h2>
          <p className="text-xl text-gray-100">{SPECIAL_OFFER_SECTION.subtitle}</p>
        </motion.div>

        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-4">New Patient Special: $95</h3>
                <p className="text-gray-600 mb-6">{SPECIAL_OFFER_SECTION.description}</p>

                <ul className="space-y-3 mb-8">
                  {SPECIAL_OFFER_SECTION.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-secondary mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button text={SPECIAL_OFFER_SECTION.ctaText} href="#contact" variant="primary" size="lg" />
              </div>

              <div className="md:w-1/3 bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center">
                <div className="text-5xl font-bold text-primary mb-2">$95</div>
                <div className="text-lg text-gray-600 mb-4">New Patient Special</div>
                <div className="text-sm text-gray-500">Regular Price: $250</div>
                <div className="mt-4 bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Save $155 Today!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500">
            *Offer valid for new patients only. Cannot be combined with insurance or other offers.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SpecialOfferSection;
