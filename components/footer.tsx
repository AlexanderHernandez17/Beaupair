// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Espacio para el Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-32" />
        </div>
        
        {/* Información de Contacto */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-2">Contáctanos:</h2>
          <p>(+57) 304 419 2414</p>
          <p>(+57) 322 418 5190</p>
          <p>info@beaupair.co</p>
          
          {/* Redes Sociales */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.facebook.com/tu_pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.youtube.com/tu_canal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        
        {/* Términos y Condiciones */}
        <div className="flex-shrink-0 text-center md:text-right">
          <a
            href="/terminos-y-condiciones"
            className="text-sm text-gray-400 hover:text-white"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
