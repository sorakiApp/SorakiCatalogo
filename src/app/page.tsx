import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { SorakiMascot } from '@/components/soraki-mascot';
import { Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="container mx-auto flex flex-col items-center justify-center space-y-2 py-12 text-center md:py-20">
        <div className="flex items-center gap-3">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Soraki – Estudo Leve
          </h1>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground">
          Escolha o que combina com sua jornada de estudos.
        </p>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 text-center">
        <SorakiMascot />
        <p className="text-sm text-muted-foreground">Um passo de cada vez.</p>
      </footer>
    </div>
  );
}
