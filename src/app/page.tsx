import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { SorakiMascot } from '@/components/soraki-mascot';

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
          O guia oficial do universo Soraki para estudar com leveza, clareza e constância.
        </p>
      </header>
      <main className="flex-1">
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-12 text-center">
        <SorakiMascot />
        <p className="text-sm text-muted-foreground">Um passo de cada vez, com carinho.</p>
      </footer>
    </div>
  );
}
