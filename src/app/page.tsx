"use client";

import { ProductCard } from '@/components/product-card';
import { SorakiMascot } from '@/components/soraki-mascot';
import { useState } from 'react';
import { locale } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en">('pt');

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="container mx-auto flex flex-col items-center justify-center space-y-2 py-16 text-center md:py-24">
        <div className="flex items-center gap-3">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            {locale[lang].title}
          </h1>
          <Button variant="outline" size="icon" onClick={toggleLang}>
            <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground">
          {locale[lang].description}
        </p>
      </header>
      <main className="flex-1">
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          {locale[lang].products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
      <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-12 text-center">
        <SorakiMascot />
        <p className="text-sm text-muted-foreground">{locale[lang].footer}</p>
      </footer>
    </div>
  );
}
