'use client';
import React from 'react';
import { ChevronUp, Code, Coffee, Github, PhoneCall } from 'lucide-react';

const Footer = () => {
  // Função para rolar de volta ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Link do WhatsApp formatado com número de telefone
  const whatsappLink = 'https://wa.me/5521980969725'; // Substitua pelo seu número

  return (
    <footer className="bg-background py-12 border-t border-border relative">
      {/* Textura sutil de fundo */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* Logo com nome */}
            <a
              href="#"
              className="font-display font-bold text-2xl text-gradient inline-flex items-center gap-2"
            >
              <div className="bg-primary/10 rounded-lg p-1.5 flex items-center text-primary">
                <Code className="h-5 w-5 mr-1" />
                <span className="font-mono text-sm">&lt;MC/&gt;</span>
                <Coffee className="h-5 w-5 ml-1" />
              </div>
              Marcelo Capello
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desenvolvedor Full Stack com paixão por criar soluções elegantes
              para problemas complexos. Também conhecido como o cara que
              transforma café em código. ☕→💻
            </p>

            {/* Referência ao nickname de jogos - Comentada conforme pedido */}
            {/* <p className="text-muted-foreground mt-2 text-sm italic">
              Procurando por "Mackgaren" em algum jogo online? Provavelmente sou eu! Vamos formar um squad e destruir alguns bugs... ou inimigos.🎮
            </p> */}

            {/* Links de contato - Trocado Twitter por WhatsApp */}
            <div className="flex mt-4 gap-4">
              <a
                href="https://github.com/MBCapello"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <PhoneCall className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Botão para rolar para o topo */}
            <button
              onClick={scrollToTop}
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-3 transition-colors mb-4"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Marcelo Capello. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
