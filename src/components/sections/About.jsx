'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Brain,
  Code,
  Coffee,
  Download,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg']; // Lista de imagens

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Troca a cada 10 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [images.length]);

  // Variantes de animação para elementos do container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variantes de animação para itens individuais
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Code />,
      title: 'Full Stack Dev',
      serious:
        'Desenvolvimento completo de soluções digitais com foco em escalabilidade.',
      funny:
        'Desenvolvo soluções completas que funcionam perfeitamente. Na maioria das vezes. 🤞',
    },
    {
      icon: <Brain />,
      title: 'Aprendizado Contínuo',
      serious: 'Busca constante por conhecimento e aprimoramento técnico.',
      funny:
        'Aprendo rápido porque tenho que corrigir meus próprios erros diariamente. 🧠',
    },
    {
      icon: <Coffee />,
      title: 'Movido a Café',
      serious: 'Alta produtividade e foco intenso em períodos estratégicos.',
      funny:
        'Meu código fica melhor proporcionalmente à quantidade de cafeína no sangue. ☕',
    },
    {
      icon: <ShieldCheck />,
      title: 'Código Seguro',
      serious: 'Implementação de boas práticas e padrões de segurança.',
      funny:
        'Tão seguro que nem eu mesmo consigo hackear. Às vezes nem consigo entender. 🔒',
    },
  ];

  const whatsappLink = 'https://wa.me/5521980969725';

  return (
    <section id="about" className="section relative overflow-hidden mb-5">
      {/* Elementos decorativos */}
      <div className="absolute top-80 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="container-custom">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quando não estou debugando, estou provavelmente pensando por que
            escolhi essa profissão.
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full my-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem/avatar com animação de revelação - Tamanho reduzido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-1 max-w-[600px] mx-auto shadow-lg">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-gray-600 to-gray-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-texture opacity-20"></div>
                <AnimatePresence>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="Avatar"
                      width={600}
                      height={600}
                      className="transition-all duration-500 ease-in-out"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Texto biográfico com revelação sequencial */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold">
              Marcelo Capello
            </motion.h3>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              Desenvolvedor Full Stack Jr. em busca da minha primeira
              oportunidade para mostrar que posso transformar café em código de
              qualidade. ☕→💻
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              Formando em Análise e Desenvolvimento de Sistemas, com experiência
              prática em React, Next.js, Node.js, Vue.js e Laravel. Sou
              extremamente curioso e me adapto rápido a novas tecnologias, não
              porque sou inteligente, mas porque sou teimoso demais para
              desistir quando algo não funciona. 💪
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              Atualmente estou ampliando meus conhecimentos em Salesforce, AWS,
              TypeScript e GraphQL — porque, aparentemente, ter uma vida social
              é superestimado. 🙃
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-wrap gap-4"
            >
              <a
                href="doc/Dev Marcelo Capello.pdf"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
                download="Dev Marcelo Capello.pdf"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full px-6 py-3 transition-all hover:scale-105"
              >
                <PhoneCall className="h-4 w-4" />
                WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Cards de características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 shadow-sm border transition-all duration-300 hover:-translate-y-2 ${
                hoveredCard === index
                  ? 'bg-card-foreground border-gray-300 dark:border-gray-700'
                  : 'bg-background border-border'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors ${
                  hoveredCard === index
                    ? 'text-primary dark:text-primary-foreground'
                    : ''
                }`}
              >
                {React.cloneElement(feature.icon, {
                  className: 'h-10 w-10', // Garante que o tamanho seja consistente
                })}
              </div>
              <h3
                className={`font-bold text-xl mt-4 ${
                  hoveredCard === index ? 'text-primary-foreground' : ''
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm mt-2 ${
                  hoveredCard === index ? 'text-primary-foreground ' : ''
                }`}
              >
                {hoveredCard === index ? feature.funny : feature.serious}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
