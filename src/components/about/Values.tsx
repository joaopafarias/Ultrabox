import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, RefreshCw, Users } from 'lucide-react';
import Container from '../ui/Container';

const values = [
  {
    icon: <Heart className="w-8 h-8 text-accent-600" />,
    title: 'Paixão',
    description: 'Amar o que fazemos é o que nos move a buscar a excelência em cada peça que produzimos.'
  },
  {
    icon: <Target className="w-8 h-8 text-accent-600" />,
    title: 'Qualidade',
    description: 'Não medimos esforços para utilizar os melhores materiais e técnicas, garantindo produtos duráveis e confortáveis.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-accent-600" />,
    title: 'Inovação',
    description: 'Constantemente buscamos novas tecnologias e tendências para incorporar em nossos produtos.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent-600" />,
    title: 'Cliente no centro',
    description: 'Ouvimos atentamente os desejos e necessidades dos nossos clientes para entregar soluções que encantem.'
  }
];

const Values: React.FC = () => {
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
          <h2 className="section-title">Nossos Valores</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Princípios que guiam cada decisão e cada etapa da nossa produção.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-primary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;