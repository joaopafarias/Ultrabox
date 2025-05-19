import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Clock } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent-600" />,
    title: 'Qualidade Premium',
    description: 'Utilizamos apenas materiais de alta qualidade para garantir durabilidade e conforto.'
  },
  {
    icon: <Zap className="w-10 h-10 text-accent-600" />,
    title: 'Design Exclusivo',
    description: 'Cada peça é projetada com atenção aos detalhes para adicionar elegância ao seu quarto.'
  },
  {
    icon: <Award className="w-10 h-10 text-accent-600" />,
    title: 'Tecnologia Avançada',
    description: 'Sistemas de pistão a gás, revestimentos antiácaro e estruturas reforçadas.'
  },
  {
    icon: <Clock className="w-10 h-10 text-accent-600" />,
    title: 'Produção Otimizada',
    description: 'Processo produtivo eficiente que garante pontualidade na entrega sem comprometer a qualidade.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Por que escolher a Ultrabox?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-primary-600"
          >
            Combinamos tradição artesanal com inovação tecnológica para criar peças que transformam seu ambiente.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;