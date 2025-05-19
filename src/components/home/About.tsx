import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section className="section bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="section-title mb-6">Sobre a Ultrabox</h2>
            <p className="text-lg text-primary-700 mb-6">
              A Ultrabox se dedica a criar peças que transformam o ambiente e elevam a experiência de descanso. Somos uma fábrica especializada em cabeceiras, box baú, bases e camas.
            </p>
            <p className="text-primary-600 mb-8">
              Nossa missão é unir design, conforto e funcionalidade em cada produto. Utilizamos materiais premium e técnicas artesanais combinadas com tecnologia de ponta para garantir a satisfação total dos nossos clientes.
            </p>
            <Button href="/empresa" variant="primary">
              Conheça nossa história
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img 
                src="/src/img/camabase tatame cab.jpg" 
                alt="Base com cabeceira Ultrabox" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-600 text-white p-6 w-48 md:w-64 shadow-lg">
                <p className="text-2xl md:text-3xl font-display font-semibold">+10</p>
                <p className="text-sm md:text-base">Anos de experiência em mobiliário para sua casa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;