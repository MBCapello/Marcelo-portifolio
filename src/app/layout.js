import { ThemeProvider } from '@/components/providers/ThemeProviders';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import { Toaster } from '@/components/ui/sonner';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcelo Capello - Desenvolvedor Full Stack',
  description:
    'Portfólio profissional de Marcelo Capello, Desenvolvedor Full Stack, com experiência em tecnologias como React, Node.js, PHP, Laravel e SQL. Aqui você encontrará meus projetos, habilidades e experiência.',
  keywords:
    'Desenvolvedor Full Stack, Marcelo Capello, portfólio, React, Node.js, PHP, Laravel, SQL, web development, front-end, back-end, desenvolvedor júnior',
  author: 'Marcelo Capello',
  robots: 'index, follow',

  openGraph: {
    title: 'Marcelo Capello - Desenvolvedor Full Stack',
    description:
      'Portfólio profissional de Marcelo Capello, Desenvolvedor Full Stack, com experiência em tecnologias como React, Node.js, PHP, Laravel e SQL. Aqui você encontra meus projetos e habilidades.',
    url: 'https://seu-site.com',
    site_name: 'Portfólio de Marcelo Capello',
    images: [
      {
        url: '/avatar2.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcelo Capello - Desenvolvedor Full Stack',
      },
    ],
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
  },

  // Charset
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative">
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
