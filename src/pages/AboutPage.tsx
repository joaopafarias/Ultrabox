import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import Story from '../components/about/Story';
import Values from '../components/about/Values';
import Process from '../components/about/Process';
import CTA from '../components/home/CTA';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <Story />
      <Process />
      <Values />
      <CTA />
    </>
  );
};

export default AboutPage;