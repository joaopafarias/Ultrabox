import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-primary-950 to-primary-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/src/img/cama prestige colchoaria cab bucle.jpg')" 
        }}
      />
      
      <div className="relative z-10 container h-full flex flex-col justify-center px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 text-gray-300">
            Transforme seu descanso em uma experiência de luxo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Cabeceiras, box baú, bases e camas com design exclusivo e qualidade superior.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              href="/produtos"
              variant="primary"
              className="bg-accent-600 hover:bg-accent-700 text-white"
            >
              Conheça nossos produtos
            </Button>
            <Button
              href="/empresa"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-950"
            >
              Sobre nós
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a 
            href="#features" 
            className="text-white flex flex-col items-center"
            aria-label="Rolar para baixo"
          >
            <span className="text-sm mb-2">Descubra mais</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;