import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ContactHero from '../components/contact/ContactHero';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send form data to your email service
      const response = await fetch('https://formspree.io/f/atendimento@ultraboxba.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };
  
  return (
    <>
      <ContactHero />
      
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title mb-6">Fale Conosco</h2>
              <p className="text-primary-600 mb-10">
                Entre em contato para saber mais sobre nossos produtos, solicitar um orçamento ou tirar dúvidas. Nossa equipe está pronta para atendê-lo.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-sm mr-4">
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                    <p className="text-primary-600">
                      Rua Ivan Figueiredo, 162, Recreio Ipitanga<br />
                      Lauro de Freitas / BA, CEP: 42700-830
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-sm mr-4">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                    <p className="text-primary-600">
                      <a href="tel:+5571981048754" className="hover:text-accent-600 transition-colors">
                        (71) 98104-8754
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-sm mr-4">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-primary-600">
                      <a href="mailto:atendimento@ultraboxba.com.br" className="hover:text-accent-600 transition-colors">
                        atendimento@ultraboxba.com.br
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-sm mr-4">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-primary-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
                
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6">
                    Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-primary-200 focus:border-accent-400 focus:ring focus:ring-accent-200 focus:ring-opacity-50 outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-primary-200 focus:border-accent-400 focus:ring focus:ring-accent-200 focus:ring-opacity-50 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-primary-200 focus:border-accent-400 focus:ring focus:ring-accent-200 focus:ring-opacity-50 outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-primary-200 focus:border-accent-400 focus:ring focus:ring-accent-200 focus:ring-opacity-50 outline-none transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Orçamento">Orçamento</option>
                        <option value="Informações">Informações</option>
                        <option value="Parceria">Parceria</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-primary-200 focus:border-accent-400 focus:ring focus:ring-accent-200 focus:ring-opacity-50 outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-10">
        <div className="w-full h-96">
          <iframe
            title="Mapa da localização da Ultrabox"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4558260909245!2d-38.328731884768224!3d-12.879756690930826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161587affd967d%3A0x6908a6c3eb0d98a!2sR.%20Ivan%20Figueiredo%2C%20162%20-%20Recreio%20Ipitanga%2C%20Lauro%20de%20Freitas%20-%20BA%2C%2042700-830!5e0!3m2!1spt-BR!2sbr!4v1625141507211!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;