'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaRegWindowClose,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiFramer,
  SiJest,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// Lista de habilidades principais
const skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    color: 'text-orange-500',
    description: 'HTML é a estrutura básica da web.',
    usage:
      'HTML é usado para criar a estrutura das páginas web, definindo elementos como títulos, parágrafos, links, imagens e formulários. Ele é a fundação sobre a qual outras tecnologias como CSS e JavaScript atuam. Sem HTML, não seria possível exibir conteúdo em um navegador.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    color: 'text-blue-500',
    description: 'CSS define o estilo visual das páginas.',
    usage:
      'CSS é usado para estilizar páginas web, proporcionando cores, fontes, layouts e animações. Ele permite a criação de designs responsivos que se adaptam a diferentes dispositivos e tamanhos de tela. Além disso, o CSS melhora a experiência do usuário ao tornar as interfaces mais atraentes e fáceis de usar.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-500',
    description: 'JavaScript traz interatividade às páginas.',
    usage:
      'JavaScript é a linguagem de programação que torna as páginas web interativas e dinâmicas. Ele permite a manipulação do DOM, criação de animações, validação de formulários e comunicação com servidores através de APIs. JavaScript também é fundamental para a criação de SPAs (Single Page Applications).',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'text-cyan-500',
    description: 'React facilita a criação de interfaces dinâmicas.',
    usage:
      'React é uma biblioteca para construção de interfaces de usuário, baseada em componentes reutilizáveis. Ele permite a criação de aplicações web escaláveis e rápidas, usando um Virtual DOM para melhorar a performance. O React é amplamente utilizado em grandes projetos como Facebook, Instagram e WhatsApp.',
    doc: 'https://react.dev/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    color: 'text-green-500',
    description: 'Node.js permite JavaScript no servidor.',
    usage:
      'Node.js é um ambiente de execução de JavaScript no lado do servidor, permitindo a criação de aplicações escaláveis e rápidas. Ele é usado para construir servidores web, APIs RESTful e sistemas em tempo real, como chats e notificações. A natureza assíncrona e orientada a eventos do Node.js torna-o ideal para aplicações de alta performance.',
    doc: 'https://nodejs.org/en/docs/',
  },
  {
    name: 'PHP',
    icon: <FaPhp />,
    color: 'text-indigo-500',
    description: 'PHP é usado no desenvolvimento web dinâmico.',
    usage:
      'PHP é uma linguagem de programação do lado do servidor usada para criar sites dinâmicos, processar formulários e interagir com bancos de dados. Ele é amplamente utilizado em sistemas de gerenciamento de conteúdo (CMS) como WordPress, além de frameworks como Laravel para construir aplicações web robustas e seguras.',
    doc: 'https://www.php.net/docs.php',
  },
  {
    name: 'Laravel',
    icon: <FaLaravel />,
    color: 'text-red-500',
    description: 'Laravel é um framework PHP poderoso.',
    usage:
      'Laravel é um framework PHP que facilita o desenvolvimento de aplicações web, oferecendo recursos como roteamento, ORM Eloquent, autenticação e segurança. Ele é amplamente utilizado para construir desde pequenas aplicações até grandes sistemas corporativos, proporcionando uma arquitetura limpa e escalável.',
    doc: 'https://laravel.com/docs',
  },
  {
    name: 'SQL',
    icon: <FaDatabase />,
    color: 'text-blue-700',
    description: 'SQL gerencia bancos de dados relacionais.',
    usage:
      'SQL é a linguagem usada para gerenciar e manipular dados em bancos de dados relacionais. Ele permite realizar operações como consultas, inserções, atualizações e exclusões de dados. SQL é essencial para qualquer aplicação que precise armazenar dados de forma estruturada e consistente em um banco de dados, como sistemas de gerenciamento de conteúdo e e-commerce.',
    doc: 'https://www.w3schools.com/sql/',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    color: 'text-purple-500',
    description: 'Bootstrap acelera o design responsivo.',
    usage:
      'Bootstrap é um framework CSS que fornece uma coleção de componentes e estilos prontos para uso, permitindo a criação rápida de layouts responsivos e modernos. Ele inclui um sistema de grid flexível, botões, formulários e tipografia, tornando o desenvolvimento de interfaces mais ágil e consistente.',
    doc: 'https://getbootstrap.com/docs/',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'text-cyan-400',
    description: 'Tailwind é um framework CSS utilitário.',
    usage:
      'Tailwind CSS é um framework CSS utilitário que permite construir interfaces altamente customizáveis diretamente no HTML. Ele promove um estilo de desenvolvimento mais rápido e eficiente, oferecendo uma enorme variedade de classes predefinidas para estilos de layout, tipografia, cores e responsividade, permitindo designs consistentes sem sair do HTML.',
    doc: 'https://tailwindcss.com/docs',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: 'text-gray-800 dark:text-gray-200',
    description: 'Next.js é um framework para React.',
    usage:
      'Next.js é um framework baseado no React que facilita a criação de aplicações web com renderização híbrida (SSR e SSG). Ele proporciona melhor performance e SEO, além de recursos como roteamento automático, APIs e otimização de imagens. É ideal para construir aplicações escaláveis e de alto desempenho.',
    doc: 'https://nextjs.org/docs',
  },
  {
    name: 'Framer Motion',
    icon: <SiFramer />,
    color: 'text-pink-500',
    description: 'Framer Motion cria animações fluidas.',
    usage:
      'Framer Motion é uma biblioteca de animações para React que facilita a criação de transições suaves e interações animadas. Ela fornece uma API declarativa e permite a criação de animações complexas com poucas linhas de código. É amplamente usada para criar interfaces interativas e dinâmicas em React.',
    doc: 'https://www.framer.com/motion/',
  },
  {
    name: 'ShadCN',
    icon: <SiShadcnui />,
    color: 'text-purple-400',
    description: 'ShadCN acelera o desenvolvimento de UI.',
    usage:
      'ShadCN é uma coleção de componentes prontos para uso, acessíveis e customizáveis, baseada em Radix UI e Tailwind CSS. Ele permite construir interfaces modernas de forma rápida e flexível, com foco em acessibilidade e boas práticas de design. Ideal para desenvolvedores que buscam agilidade na criação de UIs.',
    doc: 'https://ui.shadcn.com/',
  },
];

// Lista de tecnologias que estão sendo estudadas
const studyingNow = [
  {
    name: 'AWS',
    icon: <FaAws />,
    color: 'text-orange-400',
    description: 'AWS fornece serviços de nuvem.',
    usage:
      'AWS (Amazon Web Services) oferece uma vasta gama de serviços de computação em nuvem, incluindo hospedagem, armazenamento, bancos de dados e inteligência artificial. Usado por empresas para construir, escalar e administrar aplicações web e móveis, permitindo alta disponibilidade e escalabilidade.',
    doc: 'https://aws.amazon.com/documentation/',
  },
  {
    name: 'Vue.js',
    icon: <FaVuejs />,
    color: 'text-green-500',
    description: 'Vue.js é um framework progressivo.',
    usage:
      'Vue.js é um framework JavaScript que facilita a construção de interfaces de usuário interativas. Ele é fácil de integrar com outras bibliotecas e é amplamente utilizado para criar SPAs (Single Page Applications). Vue também oferece excelente desempenho e uma curva de aprendizado suave.',
    doc: 'https://vuejs.org/',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    color: 'text-blue-500',
    description: 'Docker cria containers para apps.',
    usage:
      'Docker é uma plataforma que utiliza containers para empacotar e distribuir aplicações de forma consistente em diferentes ambientes. Ele permite que desenvolvedores criem, testem e implantem aplicações rapidamente, garantindo que o ambiente de produção seja idêntico ao de desenvolvimento.',
    doc: 'https://docs.docker.com/',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-600',
    description: 'TypeScript adiciona tipagem ao JavaScript.',
    usage:
      'TypeScript é um superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro e fácil de depurar. Ele é amplamente utilizado em grandes projetos, melhorando a manutenção do código e proporcionando ferramentas poderosas para o desenvolvimento de aplicativos complexos.',
    doc: 'https://www.typescriptlang.org/docs/',
  },
  {
    name: 'Jest',
    icon: <SiJest />,
    color: 'text-red-500',
    description: 'Jest facilita os testes no JavaScript.',
    usage:
      'Jest é uma framework de testes para JavaScript, proporcionando uma forma rápida e eficiente de testar código. Ele inclui funcionalidades como mocks e spies, além de ser otimizado para testes de unidades, integração e snapshots. Jest é uma excelente ferramenta para garantir a qualidade do código.',
    doc: 'https://jestjs.io/docs/',
  },
];

// Lista de quotes
const quotes = [
  {
    text: 'Não é um bug, é uma característica inesperada. Minha assinatura em todo pull request.',
    author: '— Todo desenvolvedor em algum momento',
  },
  {
    text: 'Alguns chamam de gambiarra, eu chamo de solução criativa temporária permanente.',
    author: '— Minha filosofia de código',
  },
  {
    text: 'O código funciona? Não mexe. Documentar? O que é isso? Comentário é para os fracos!',
    author: '— Eu às 3h da manhã finalizando um projeto',
  },
  {
    text: 'No desenvolvimento, existem problemas sem solução e soluções à procura de problemas.',
    author: '— Versão moderna de um ditado antigo',
  },
  {
    text: 'Se pelo menos 30% do código funciona em produção, os outros 70% são apenas recursos futuros!',
    author: '— Otimismo de desenvolvedor',
  },
  {
    text: 'Se o código está funcionando, não pergunte como. Apenas aceite e siga em frente.',
    author: '— GitHub Copilot',
  },
];

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0); // Índice do quote atual

  // Função que troca os quotes automaticamente a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Troca de 30 em 30 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Função para renderizar o carrossel com drag
  const renderCarousel = (skillsList) => {
    const duplicatedSkills = [...skillsList, ...skillsList];

    return (
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.2}
          initial={{ x: 0 }}
          animate={{
            x: isPaused ? 0 : '-173%',
          }} // Movimenta o carrossel de 0% até -172% que faz um loop completo
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 0,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <Drawer key={index}>
              <DrawerTrigger>
                <div
                  className="card-hover flex flex-col items-center p-6 rounded-xl shadow-lg max-w-[200px] text-center bg-muted cursor-pointer hover:brightness-125"
                  onClick={() => setIsPaused(setIsPaused(prev))}
                >
                  <div className={`text-6xl mb-4 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{skill.name}</h3>
                  <div className="w-10 h-1 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </DrawerTrigger>
              <DrawerContent className="flex-col items-left p-6">
                <DrawerHeader className="flex-row justify-between align-start">
                  <div>
                    <DrawerTitle>
                      <div className={`text-6xl mb-4 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      {skill.name}
                    </DrawerTitle>
                    <DrawerDescription>{skill.description}</DrawerDescription>
                  </div>
                  <DrawerClose className="flex items-start">
                    <FaRegWindowClose />
                  </DrawerClose>
                </DrawerHeader>
                <p>{skill.usage}</p>
                <DrawerFooter>
                  <Link href={skill.doc}>Link Oficial</Link>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </motion.div>
      </div>
    );
  };

  // Função para renderizar as habilidades estáticas (Estudando Agora)
  const renderStaticSkills = (skillsList) => (
    <div className="flex flex-wrap justify-center gap-6">
      {skillsList.map((skill, index) => (
        <div
          key={index}
          className="card-hover flex flex-col items-center p-6 rounded-xl shadow-lg max-w-[200px] text-center bg-muted cursor-pointer"
        >
          <div className={`text-6xl mb-4 ${skill.color}`}>{skill.icon}</div>
          <h3 className="mt-2 text-xl font-bold">{skill.name}</h3>
          <div className="w-10 h-1 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um conjunto diversificado de habilidades adquiridas através de horas
            infinitas debugando o que deveria ter funcionado de primeira. 🔍
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full my-8"></div>
        </motion.div>

        {/* Carrossel de habilidades principais */}
        <div className="mt-8">{renderCarousel(skills)}</div>

        {/* Seção "Estudando Agora" */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Estudando <span className="text-gradient">Agora</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorando novas tecnologias para expandir meu conjunto de
            habilidades e enfrentar novos desafios. 🚀
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full my-8"></div>
        </motion.div>

        {/* Cards estáticos de "Estudando Agora" */}
        <div className="mt-8">{renderStaticSkills(studyingNow)}</div>

        {/* Quotes com transição */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minha Filosofia de{' '}
            <span className="text-gradient">Desenvolvedor</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma frase que reflete minha visão sobre o mundo da programação.
          </p>

          {/* Display do Quote */}
          <div className="mt-8 text-xl italic">
            <p>"{quotes[quoteIndex].text}"</p>
            <p className="mt-4 text-lg font-semibold">
              - {quotes[quoteIndex].author}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
