import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { SorakiMascot } from '@/components/soraki-mascot';

export default function Home() {
  const mainProduct = products[0];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="container mx-auto flex flex-col items-center justify-center space-y-2 py-16 text-center md:py-24">
        <div className="flex items-center gap-3">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Soraki – Estudo Leve
          </h1>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground">
          O guia oficial do universo Soraki para estudar com leveza, clareza e constância.
        </p>
      </header>
      <main className="flex flex-1 items-start justify-center">
        <div className="container mx-auto max-w-sm px-4">
          <ProductCard product={mainProduct} />
        </div>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-12 text-center">
        <SorakiMascot />
        <p className="text-sm text-muted-foreground">Um passo de cada vez, com carinho.</p>
      </footer>
    </div>
  );
}
