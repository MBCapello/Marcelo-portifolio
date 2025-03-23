'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Education data
  const education = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UniFatecie',
      period: 'Conclusão prevista para 2026',
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
  ];

  // Courses and certifications
  const courses = [
    {
      title: 'Desenvolvimento Web Full Stack',
      institution: 'Cubos Academy',
      year: '2021',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Back-End PHP com Laravel',
      institution: 'Be Academy',
      year: '2022',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Web Developer Java',
      institution: 'Digital Innovation One',
      year: '2022',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Lógica de Programação',
      institution: 'SENAI',
      year: '2021',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Montagem e Manutenção de Computadores',
      institution: 'Microcamp',
      year: '2007',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="education" className="section bg-secondary/50 mb-5">
      <div className="container-custom">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formação <span className="text-gradient">Acadêmica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Investindo em conhecimento para resolver problemas que ainda nem
            existem. 🎓
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 rounded-full my-8"></div>
        </motion.div>

        {/* Education section */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="mr-2 h-8 w-8" />
            Educação Formal
          </motion.h3>

          <div className="grid md:grid-cols-1 gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center bg-secondary px-4 py-2 rounded-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses and certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <Award className="mr-2 h-8 w-8" />
            Cursos e Certificações
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-5 border border-border shadow-sm flex items-start gap-4"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{course.title}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-muted-foreground text-sm">
                      {course.institution}
                    </p>
                    <div className="bg-secondary px-3 py-1 rounded-full text-xs">
                      {course.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
