'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envio de email com EmailJS
    emailjs
      .send(
        'service_8e94prj', // Substitua pelo seu ID de serviço do EmailJS
        'template_x6x76nq', // Substitua pelo seu ID de template do EmailJS
        formData,
        'SqIzRnuV-lLsTdsGc', // Substitua pelo seu ID de usuário do EmailJS
      )
      .then(
        (response) => {
          toast.success('Mensagem enviada com sucesso!', {
            description: 'Obrigado pelo contato, retornarei em breve.',
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('Ocorreu um erro ao enviar sua mensagem.', {
            description: 'Tente novamente mais tarde.',
          });
          setIsSubmitting(false);
        },
      );
  };

  // Informações de contato
  const contactInfo = [
    {
      icon: <MapPin className="size-5" />,
      title: 'Localização',
      details: 'Rio de Janeiro, RJ - Brasil',
    },
    {
      icon: <Mail className="size-5" />,
      title: 'Email',
      details: 'mbcapello@gmail.com',
    },
    {
      icon: <Phone className="size-5" />,
      title: 'Telefone',
      details: '(21) 98096-9725',
    },
  ];

  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre como posso contribuir para o seu projeto ou
            equipe. Estou disponível para discutir oportunidades e colaborações.
            💬
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-background border-border rounded-xl px-4 py-6"
                />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                  className="bg-background border-border rounded-xl px-4 py-6"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  required
                  className="min-h-32 bg-background border-border rounded-xl px-4 py-3"
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white w-full rounded-xl py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Check className="mr-2 size-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-first md:order-last"
          >
            <div className="bg-card rounded-xl p-8 border border-border h-full">
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground mt-1">
                        {info.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Me encontre nas redes</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MBCapello"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-secondary p-3 rounded-full border border-border transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-secondary p-3 rounded-full border border-border transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM8 4.646a1.946 1.946 0 1 0 0 3.892 1.946 1.946 0 0 0 0-3.892zM4.062 6.5h1.929V13H4.062zM8 8.219a2.219 2.219 0 1 1 0 4.438 2.219 2.219 0 0 1 0-4.438zM11.208 6.5h1.929V13h-1.93z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
