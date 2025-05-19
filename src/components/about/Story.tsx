import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Story: React.FC = () => {
  return (
    <section className="section bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">Nossa Jornada</h2>
            <p className="text-lg text-primary-700 mb-6">
              A Ultrabox nasceu do sonho de criar móveis que unissem estética, qualidade e funcionalidade. O que começou como uma pequena oficina na Bahia logo se transformou em uma fábrica especializada em produtos para o quarto.
            </p>
            <p className="text-primary-600 mb-6">
              Ao longo desses anos, investimos constantemente em tecnologia e aprimoramento técnico, mas mantivemos o cuidado artesanal que faz de cada peça única. Nossa equipe cresceu, mas o compromisso com a excelência permanece o mesmo desde o primeiro dia.
            </p>
            <p className="text-primary-600">
              Hoje, somos reconhecidos pela qualidade das nossas cabeceiras, box baú, bases e camas, que aliam design contemporâneo, materiais premium e técnicas de produção que garantem durabilidade e conforto.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/src/img/cab vitoria basalto.jpg" 
                alt="Produção Ultrabox" 
                className="w-full h-64 object-cover rounded-sm"
              />
              <img 
                src="/src/img/cab vitoria nozes durango.jpg" 
                alt="Detalhes de produção" 
                className="w-full h-64 object-cover rounded-sm"
              />
              <img 
                src="/src/img/cab vitoria nude.jpg" 
                alt="Materiais premium" 
                className="w-full h-64 object-cover rounded-sm"
              />
              <img 
                src="/src/img/cab thay amianto.jpg" 
                alt="Produto finalizado" 
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Story;