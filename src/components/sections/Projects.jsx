'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  // Referência para o container do carousel
  const carouselRef = useRef(null);

  // Estado para rastrear o índice do projeto atual e a posição de deslocamento
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // Dados dos projetos com pilhas de tecnologia e imagens
  const projects = [
    {
      id: 1,
      title: 'E-commerce Full Stack',
      description:
        'Um e-commerce completo desenvolvido com Next.js, Node.js e integração com banco de dados SQL para gerenciamento de produtos, carrinho de compras e sistema de pagamento.',
      image:
        'https://placehold.co/600x400/3b82f6/FFFFFF/png?text=E-commerce+App',
      tech: [
        {
          name: 'Next.js',
          color: 'bg-black text-white dark:bg-zinc-800 dark:text-white',
        },
        {
          name: 'Node.js',
          color: 'bg-green-500 text-white dark:bg-green-600 dark:text-white',
        },
        {
          name: 'Tailwind CSS',
          color: 'bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white',
        },
        {
          name: 'SQL',
          color: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
        },
        {
          name: 'API REST',
          color: 'bg-indigo-500 text-white dark:bg-indigo-600 dark:text-white',
        },
      ],
      longDescription:
        'Este projeto é uma aplicação de e-commerce completa que inclui um sistema de carrinho de compras, autenticação de usuários, painel de administração, e integração com gateway de pagamento. Desenvolvi tanto o frontend quanto o backend, utilizando práticas modernas de desenvolvimento web.',
      features: [
        'Catálogo de produtos com filtros e busca',
        'Sistema de carrinho persistente',
        'Autenticação e perfis de usuário',
        'Painel administrativo para gerenciar produtos',
        'Integração com gateway de pagamento',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
    {
      id: 2,
      title: 'Gerenciador de Tarefas',
      description:
        'API RESTful em Node.js com PostgreSQL para gerenciamento de tarefas, com funcionalidades de CRUD e autenticação via JWT. Inclui dashboard para visualização de progresso.',
      image: 'https://placehold.co/600x400/8b5cf6/FFFFFF/png?text=Task+Manager',
      tech: [
        {
          name: 'Node.js',
          color: 'bg-green-500 text-white dark:bg-green-600 dark:text-white',
        },
        {
          name: 'Express',
          color: 'bg-gray-700 text-white dark:bg-gray-600 dark:text-white',
        },
        {
          name: 'PostgreSQL',
          color: 'bg-blue-700 text-white dark:bg-blue-800 dark:text-white',
        },
        {
          name: 'JWT',
          color: 'bg-red-500 text-white dark:bg-red-600 dark:text-white',
        },
        {
          name: 'React',
          color: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
        },
      ],
      longDescription:
        'Este gerenciador de tarefas foi desenvolvido para ajudar equipes a organizarem seus projetos e acompanharem o progresso. A aplicação conta com um backend robusto em Node.js, utilizando Express e PostgreSQL, e um frontend em React com visualizações interativas do progresso.',
      features: [
        'Criação, edição e exclusão de tarefas',
        'Categorização e priorização',
        'Sistema de lembretes e notificações',
        'Dashboard com gráficos de progresso',
        'Autenticação segura com JWT',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
    {
      id: 3,
      title: 'Portfólio Pessoal',
      description:
        'Portfólio interativo desenvolvido com React e Tailwind CSS, apresentando projetos, habilidades e experiência profissional de forma elegante e responsiva.',
      image: 'https://placehold.co/600x400/10b981/FFFFFF/png?text=Portfolio',
      tech: [
        {
          name: 'React',
          color: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
        },
        {
          name: 'Tailwind CSS',
          color: 'bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white',
        },
        {
          name: 'Framer Motion',
          color: 'bg-purple-500 text-white dark:bg-purple-600 dark:text-white',
        },
        {
          name: 'Shadcn UI',
          color: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white',
        },
      ],
      longDescription:
        'Meu portfólio pessoal é uma vitrine dos meus projetos e habilidades técnicas, com um design moderno e responsivo. Utilizei React para construir uma experiência interativa e Framer Motion para adicionar animações que tornam a navegação mais agradável.',
      features: [
        'Design responsivo adaptável a qualquer dispositivo',
        'Animações suaves com Framer Motion',
        'Modo claro/escuro',
        'Exibição detalhada de projetos',
        'Formulário de contato integrado',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
    {
      id: 4,
      title: 'Blog Tech',
      description:
        'Blog sobre tecnologia desenvolvido com Laravel e Vue.js, com sistema de autenticação, comentários e painel administrativo para gerenciamento de conteúdo.',
      image: 'https://placehold.co/600x400/ef4444/FFFFFF/png?text=Tech+Blog',
      tech: [
        {
          name: 'Laravel',
          color: 'bg-red-500 text-white dark:bg-red-600 dark:text-white',
        },
        {
          name: 'Vue.js',
          color: 'bg-green-500 text-white dark:bg-green-600 dark:text-white',
        },
        {
          name: 'MySQL',
          color: 'bg-blue-600 text-white dark:bg-blue-700 dark:text-white',
        },
        {
          name: 'Tailwind CSS',
          color: 'bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white',
        },
      ],
      longDescription:
        'Um blog sobre tecnologia e desenvolvimento web com recursos avançados, incluindo um sistema completo de gerenciamento de conteúdo. Os usuários podem criar contas, publicar artigos, interagir através de comentários e seguir seus autores favoritos.',
      features: [
        'Sistema de autenticação e autorização',
        'Editor rico de texto para artigos',
        'Sistema de comentários em tempo real',
        'Tags e categorias para artigos',
        'Painel administrativo completo',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
    {
      id: 5,
      title: 'Sistema CRM',
      description:
        'Sistema de gerenciamento de relacionamento com o cliente (CRM) desenvolvido com React e Firebase, oferecendo funcionalidades de cadastro, segmentação e acompanhamento de leads.',
      image: 'https://placehold.co/600x400/0ea5e9/FFFFFF/png?text=CRM+System',
      tech: [
        {
          name: 'React',
          color: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
        },
        {
          name: 'Firebase',
          color: 'bg-yellow-500 text-white dark:bg-yellow-600 dark:text-white',
        },
        {
          name: 'Redux',
          color: 'bg-purple-600 text-white dark:bg-purple-700 dark:text-white',
        },
        {
          name: 'Material UI',
          color: 'bg-blue-700 text-white dark:bg-blue-800 dark:text-white',
        },
      ],
      longDescription:
        'Este sistema de CRM foi desenvolvido para ajudar empresas a gerenciar seus relacionamentos com clientes e prospects. A aplicação utiliza React e Firebase para criar uma experiência fluida e em tempo real, com atualizações instantâneas e sincronização entre dispositivos.',
      features: [
        'Dashboard personalizado com métricas de vendas',
        'Gestão de leads e oportunidades',
        'Pipeline de vendas com visualização Kanban',
        'Integração com email e calendário',
        'Relatórios e análises avançadas',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
    {
      id: 6,
      title: 'App de Finanças Pessoais',
      description:
        'Aplicativo de finanças pessoais construído com React Native e integração com APIs bancárias, permitindo controle de gastos, orçamentos e visualização de relatórios.',
      image: 'https://placehold.co/600x400/f97316/FFFFFF/png?text=Finance+App',
      tech: [
        {
          name: 'React Native',
          color: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
        },
        {
          name: 'GraphQL',
          color: 'bg-pink-500 text-white dark:bg-pink-600 dark:text-white',
        },
        {
          name: 'MongoDB',
          color: 'bg-green-600 text-white dark:bg-green-700 dark:text-white',
        },
        {
          name: 'AWS',
          color: 'bg-orange-500 text-white dark:bg-orange-600 dark:text-white',
        },
      ],
      longDescription:
        'Este aplicativo de finanças pessoais ajuda os usuários a gerenciar melhor seu dinheiro com uma interface intuitiva e recursos avançados. Desenvolvido com React Native para suportar iOS e Android, com um backend poderoso usando GraphQL e MongoDB para processamento e armazenamento de dados financeiros.',
      features: [
        'Sincronização com contas bancárias',
        'Categorização automática de transações',
        'Planejamento de orçamento mensal',
        'Alertas de gastos e lembretes de contas',
        'Relatórios detalhados e projeções financeiras',
      ],
      github: 'https://github.com/MBCapello',
      demo: '#',
    },
  ];

  // Total de projetos
  const totalProjects = projects.length;

  // Configurações do carousel estilo Netflix
  // Número de projetos visíveis ao mesmo tempo
  const visibleItems = 3;
  // Largura de cada item do carousel em porcentagem
  const itemWidth = 100 / visibleItems;

  // Função para navegar para o próximo conjunto de projetos
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % totalProjects;
    setCurrentIndex(newIndex);
  };

  // Função para navegar para o conjunto anterior de projetos
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    setCurrentIndex(newIndex);
  };

  // Efeito para atualizar o deslocamento do carousel quando o índice muda
  useEffect(() => {
    // Calcula o deslocamento com base no índice atual
    setOffset(-currentIndex * itemWidth);

    // Ajuste para o carousel infinito (solução para o espaço vazio no final)
    if (currentIndex === totalProjects - 1) {
      // Preparar para retornar ao início
      setTimeout(() => {
        // Desativa a transição temporariamente
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }
        setCurrentIndex(0);
        // Reativa a transição após um pequeno delay
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 500ms ease-out';
          }
        }, 50);
      }, 500); // Tempo suficiente para a transição terminar
    }
  }, [currentIndex, itemWidth, totalProjects]);

  // Efeito para rotação automática do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Muda a cada 6 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Variantes de animação para o contêiner
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes de animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos meus trabalhos. Não são perfeitos, mas são meus — e
            funcionam na minha máquina. 💻
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full my-8"></div>
        </motion.div>

        {/* Carousel estilo Netflix */}
        <div className="relative w-full max-w-7xl mx-auto mb-16 overflow-hidden px-4">
          {/* Setas de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 text-foreground p-2 rounded-full shadow-lg backdrop-blur-sm"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card/90 text-foreground p-2 rounded-full shadow-lg backdrop-blur-sm"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Container do Carousel */}
          <div
            ref={carouselRef}
            className="flex flex-nowrap transition-transform duration-500 ease-out overflow-visible"
            style={{ transform: `translateX(${offset}%)` }}
          >
            {/* Renderiza todos os projetos em um layout flexível - Repetimos os primeiros projetos no final para o efeito de loop */}
            {[...projects, ...projects.slice(0, visibleItems)].map(
              (project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="!w-[400px] !min-w-[200px] px-2"
                >
                  <motion.div
                    className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-0 right-0 p-2 flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass p-2 rounded-full hover:scale-110 transition-transform"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass p-2 rounded-full hover:scale-110 transition-transform"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className={`${tech.color} font-medium`}
                          >
                            {tech.name}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge className="bg-secondary text-secondary-foreground font-medium">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Drawer para detalhes do projeto - Ajustado para não ter scroll */}
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button variant="ghost" className="group/btn px-0">
                            <span className="mr-2">Ver detalhes</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </DrawerTrigger>
                        <DrawerContent className="h-[100  vh] max-h-screen mb-4">
                          <div className="mx-auto w-full max-w-4xl h-full flex flex-col overflow-y-auto">
                            <DrawerHeader className="text-left">
                              <div className="flex justify-between items-center">
                                <DrawerTitle className="text-xl font-bold">
                                  {project.title}
                                </DrawerTitle>
                                <DrawerClose asChild>
                                  <Button variant="ghost" size="icon">
                                    <X className="h-4 w-4" />
                                  </Button>
                                </DrawerClose>
                              </div>
                              <DrawerDescription className="flex flex-wrap">
                                {project.tech.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    className={`${tech.color} font-medium mr-2 mb-2`}
                                  >
                                    {tech.name}
                                  </Badge>
                                ))}
                              </DrawerDescription>
                            </DrawerHeader>
                            <div className="px-4 py-0 flex-1 overflow-y-auto">
                              {/* Conteúdo do Drawer */}
                              <div className="flex flex-col md:flex-row gap-4 mb-4 overflow-auto m-">
                                <div className="md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                                  />
                                </div>
                                <div className="md:w-3/4">
                                  <div className="mb-3">
                                    <h4 className="text-base font-semibold mb-1">
                                      Sobre o projeto
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                      {project.longDescription}
                                    </p>
                                  </div>
                                  <div className="mb-3">
                                    <h4 className="text-base font-semibold mb-1">
                                      Funcionalidades
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-xs">
                                      {project.features.map(
                                        (feature, index) => (
                                          <li key={index}>{feature}</li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <h4 className="text-base font-semibold mb-1">
                                  Desafios e Aprendizados
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                  Durante o desenvolvimento deste projeto,
                                  enfrentei desafios como otimização de
                                  performance, integração de múltiplas APIs e
                                  experiência de usuário responsiva. Esses
                                  obstáculos me proporcionaram aprendizados
                                  valiosos em arquitetura de software e práticas
                                  de desenvolvimento modernas.
                                </p>
                              </div>
                              <div className="mt-3 mb-3 flex flex-wrap gap-2">
                                <Button
                                  asChild
                                  size="sm"
                                  className="flex-1 sm:flex-none"
                                >
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs"
                                  >
                                    <Github className="h-3 w-3" />
                                    Ver código-fonte
                                  </a>
                                </Button>
                                {project.demo && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="flex-1 sm:flex-none"
                                  >
                                    <a
                                      href={project.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-xs"
                                    >
                                      <ExternalLink className="h-3 w-3" />
                                      Visitar demonstração
                                    </a>
                                  </Button>
                                )}
                              </div>
                              <div className="border-t border-border pt-3 mt-2">
                                <h4 className="text-base font-semibold mb-2">
                                  Stack Tecnológica
                                </h4>
                                <p className="text-muted-foreground text-xs mb-2">
                                  Tecnologias escolhidas para proporcionar a
                                  melhor experiência possível.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                                  {project.tech.map((tech, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-1"
                                    >
                                      <Badge
                                        className={`${tech.color} h-5 text-xs`}
                                      >
                                        {tech.name}
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </motion.div>
                </div>
              ),
            )}
          </div>

          {/* Indicadores de página (bolinhas) */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
