import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../../assets/logo';
import { navItems } from '../../data/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo className="text-white mb-6" />
            <p className="text-primary-200 mb-6">
              Transformando ambientes com peças exclusivas e de alta qualidade. Especialistas em cabeceiras, box baú, bases e camas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-200">Links</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-200">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-300 mt-1" />
                <span className="text-primary-200">
                  Rua Ivan Figueiredo, 162, Recreio Ipitanga<br />
                  Lauro de Freitas / BA, CEP: 42700-830
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-300" />
                <a 
                  href="tel:+5571981048754" 
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  (71) 98104-8754
                </a>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 mr-3 text-accent-300" />
                  <a 
                    href="mailto:atendimento@ultraboxba.com.br" 
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    atendimento@ultraboxba.com.br
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-3 text-accent-300" />
                  <a 
                    href="https://instagram.com/ultraboxba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    @ultraboxba
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} Ultrabox. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;