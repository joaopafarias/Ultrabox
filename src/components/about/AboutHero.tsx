import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-primary-950">
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/src/img/cama lumina base estof cab thay amianto.jpg')" 
        }}
      />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 text-gray-300">
            Nossa História
          </h1>
          <p className="text-xl text-gray-300">
            Conheça a trajetória da Ultrabox e nosso compromisso com a qualidade e inovação.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;