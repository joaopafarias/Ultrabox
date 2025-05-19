import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import Logo from '../../assets/logo';
import Container from '../ui/Container';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo className={isScrolled ? 'text-primary-950' : 'text-primary-950'} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-accent-600'
                    : isScrolled
                    ? 'text-primary-950 hover:text-accent-600'
                    : 'text-primary-950 hover:text-accent-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            className="md:hidden z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-950" />
            ) : (
              <Menu className="w-6 h-6 text-primary-950" />
            )}
          </button>
        </nav>
      </Container>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <Container className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xl font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-accent-600'
                      : 'text-primary-950 hover:text-accent-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;