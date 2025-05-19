import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-primary-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to="/contato" 
            className="inline-flex items-center text-accent-600 font-medium hover:text-accent-800 transition-colors"
          >
            Solicitar informações 
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link 
            to={`/produtos?categoria=${product.category}`}
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-accent-600 font-medium hover:text-accent-800 transition-colors"
          >
            Ver detalhes
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;