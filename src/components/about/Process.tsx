import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const processSteps = [
  {
    title: 'Seleção de Materiais',
    description: 'Escolhemos cuidadosamente os melhores tecidos, espumas e madeiras para garantir qualidade e durabilidade.',
    imageUrl: '/src/img/bau ultra nozes de frente.jpg'
  },
  {
    title: 'Design e Prototipagem',
    description: 'Cada modelo é desenhado e prototipado por nossa equipe, garantindo estética e funcionalidade.',
    imageUrl: '/src/img/bau ultra basalto cab2.jpg'
  },
  {
    title: 'Produção Artesanal',
    description: 'Nossos artesãos aplicam técnicas tradicionais combinadas com tecnologia para criar cada peça.',
    imageUrl: '/src/img/bau ultra amianto cab diagonal.jpg'
  },
  {
    title: 'Controle de Qualidade',
    description: 'Cada produto passa por rigorosa inspeção, garantindo que atenda aos mais altos padrões de qualidade.',
    imageUrl: '/src/img/bau premium cinza de frente.jpg'
  }
];

const Process: React.FC = () => {
  return (
    <section className="section bg-primary-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nosso Processo</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Conheça como transformamos matéria-prima em peças que combinam beleza, conforto e durabilidade.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img 
                    src={step.imageUrl} 
                    alt={step.title} 
                    className="w-full h-auto rounded-sm shadow-md"
                  />
                  <div className="absolute -top-4 -left-4 bg-white p-4 shadow-lg w-16 h-16 flex items-center justify-center">
                    <span className="text-3xl font-display font-semibold text-accent-600">{index + 1}</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-primary-600 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;