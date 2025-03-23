'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-primary">404</h1>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Página não encontrada
      </h2>

      <p className="text-muted-foreground mb-8 max-w-md">
        Parece que você se perdeu no código. Não se preocupe, isso acontece até
        com os melhores (inclusive comigo, com frequência).
      </p>

      <Button asChild className="bg-primary hover:bg-primary/90 text-white">
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  );
}
