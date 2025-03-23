'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const phrases = [
    'Dev Full Stack apaixonado por tecnologia',
    'Especialista em criar experiências digitais únicas',
    'Transformando ideias em soluções escaláveis',
    'Café → Código → Inovação',
    'Não é bug, é feature™',
    'Código limpo, resultados incríveis',
    'Pronto para enfrentar novos desafios',
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12 pt-24">
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-texture-light dark:bg-texture-dark opacity-15"></div>

      <div className="container-custom relative z-10 flex flex-col gap-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Olá, bem-vindo(a) 👋 Eu sou
          </span>
        </motion.div>

        <motion.h1
          className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl relative"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="relative text-gradient">Marcelo Capello</span>
        </motion.h1>

        {/* Ajustado o espaçamento do AnimatedText */}
        <motion.div
          className="text-2xl sm:text-3xl font-semibold text-center w-full break-words relative z-10 min-h-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedText
            phrases={phrases}
            className="text-primary glitch-effect font-bold mx-auto block"
          />
        </motion.div>

        {/* Aumentado o espaçamento entre AnimatedText e o Parágrafo */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Sou um desenvolvedor apaixonado por criar soluções digitais que
          conectam pessoas e tecnologia. Combinando criatividade e lógica,
          transformo ideias em experiências únicas. Vamos construir algo
          incrível juntos?
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-primary hover:bg-secondary/90 text-secondary hover:text-muted-foreground rounded-full px-6 py-4">
            <a href="#contact" className="flex items-center">
              Contate-me
            </a>
          </Button>
          <Button variant="outline" className="rounded-full px-6 py-4">
            <a href="#projects" className="flex items-center">
              Ver Projetos
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Ícone de Scroll */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10"
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 text-primary/70" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
