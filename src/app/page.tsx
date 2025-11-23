import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { SorakiMascot } from '@/components/soraki-mascot';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="container mx-auto flex flex-col items-center justify-center space-y-2 py-16 text-center md:py-24">
        <div className="flex items-center gap-3">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Soraki – Estudo Leve
          </h1>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground">
          Escolha o que combina com sua jornada de estudos hoje.
        </p>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-12 text-center">
        <SorakiMascot />
        <p className="text-sm text-muted-foreground">Um passo de cada vez, com carinho.</p>
      </footer>
    </div>
  );
}
