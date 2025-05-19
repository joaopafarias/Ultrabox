import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import ProductsPreview from '../components/home/ProductsPreview';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <About />
      <ProductsPreview />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;