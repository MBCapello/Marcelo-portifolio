'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Coffee, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Formação', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'py-2 backdrop-blur-lg bg-background/80 shadow-sm'
      : 'py-5 bg-transparent'
  }`;

  const logoMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const itemMotion = {
    rest: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display font-bold text-2xl flex items-center gap-2"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={logoMotion}
        >
          <div className="bg-primary/10 rounded-lg p-1.5 flex items-center text-primary">
            <Code className="h-5 w-5 mr-1" />
            <span className="font-mono text-sm">&lt;MC/&gt;</span>
            <Coffee className="h-5 w-5 ml-1" />
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-primary transition-colors link-underline"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-16 bg-background/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium my-3 hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
