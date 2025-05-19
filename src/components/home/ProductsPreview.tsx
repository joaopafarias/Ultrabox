import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { products } from '../../data/products';

const ProductsPreview: React.FC = () => {
  // Display only first 3 products
  const previewProducts = products.slice(0, 3);
  
  return (
    <section className="section bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-2">Nossos Produtos</h2>
            <p className="text-primary-600 max-w-xl">
              Descubra o conforto e elegância da linha Ultrabox.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:mt-0"
          >
            <Button href="/produtos" variant="outline">
              Ver todos os produtos
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-primary-600 mb-4">{product.description}</p>
                <Link 
                  to={`/produtos?categoria=${product.category}`}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-800 transition-colors"
                >
                  Ver detalhes 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsPreview;