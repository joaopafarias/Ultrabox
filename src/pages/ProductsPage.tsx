import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import ProductCard from '../components/products/ProductCard';
import ProductsHero from '../components/products/ProductsHero';
import CTA from '../components/home/CTA';
import { products, getProductsByCategory } from '../data/products';

const categories = [
  { id: 'all', name: 'Todos os Produtos' },
  { id: 'box-bau', name: 'Box Baú' },
  { id: 'bases', name: 'Bases' },
  { id: 'camas', name: 'Camas' },
  { id: 'cabeceiras', name: 'Cabeceiras' },
];

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Set category from URL parameters on initial load
    if (initialCategory !== 'all') {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    // Update displayed products when category changes
    if (activeCategory === 'all') {
      setDisplayedProducts(products);
    } else {
      setDisplayedProducts(getProductsByCategory(activeCategory));
    }

    // Update URL parameter
    if (activeCategory === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: activeCategory });
    }
  }, [activeCategory, setSearchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <ProductsHero />
      
      <section className="section bg-white">
        <Container>
          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="section-title mb-8">Nossos Produtos</h2>
            
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 text-sm font-medium transition-colors border ${
                    activeCategory === category.id
                      ? 'bg-primary-950 text-white border-primary-950'
                      : 'bg-white text-primary-600 border-primary-300 hover:bg-primary-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary-600 text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </Container>
      </section>
      
      <CTA />
    </>
  );
};

export default ProductsPage;