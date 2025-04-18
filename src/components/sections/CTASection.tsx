import Button from '../Button';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Smile?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-10"
          >
            Schedule your complimentary consultation today and take the first step towards a confident, beautiful smile.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              text="Schedule Free Consultation"
              href="#contact"
              variant="primary"
              size="lg"
            />
            <Button
              text="Call (310) 827-5094"
              href="tel:3108275094"
              variant="outline"
              size="lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
