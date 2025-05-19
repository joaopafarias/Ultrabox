import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="section bg-accent-50">
      <Container>
        <div className="bg-primary-950 py-16 px-8 md:px-16 rounded-sm shadow-lg relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg')" 
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-0 md:max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                Transforme seu quarto em um ambiente sofisticado
              </h2>
              <p className="text-primary-200 text-lg">
                Entre em contato agora e descubra como nossos produtos podem elevar o conforto e estilo do seu espaço.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                href="/contato" 
                className="bg-accent-600 hover:bg-accent-700 text-white border-none"
              >
                Fale conosco
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;