import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">EducaTIC36</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a href="#" className="footer-link">Termos de Serviço</a>
            <a href="#" className="footer-link">Política de Privacidade</a>
            <a href="#" className="footer-link">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  