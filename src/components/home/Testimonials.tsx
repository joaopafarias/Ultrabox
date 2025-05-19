import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    name: 'Carla Mendes',
    role: 'Designer de Interiores',
    content: 'A qualidade dos produtos Ultrabox é excepcional. As cabeceiras que adquiri para meus projetos sempre impressionam os clientes pelo acabamento impecável e design sofisticado.',
    rating: 5
  },
  {
    name: 'Rodrigo Santos',
    role: 'Cliente',
    content: 'Comprei um box baú da Ultrabox e fiquei impressionado com a robustez da estrutura e a suavidade do sistema de abertura. O atendimento também foi excelente do início ao fim.',
    rating: 5
  },
  {
    name: 'Marina Oliveira',
    role: 'Arquiteta',
    content: 'Trabalho com a Ultrabox há 3 anos e sempre recomendo para meus clientes. A flexibilidade em atender projetos personalizados e o compromisso com prazos fazem toda diferença.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section bg-primary-950 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white">O que dizem sobre nós</h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            A satisfação dos nossos clientes e parceiros é o nosso maior reconhecimento.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-900 p-8 rounded-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
                ))}
              </div>
              <p className="text-primary-100 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-primary-300 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;