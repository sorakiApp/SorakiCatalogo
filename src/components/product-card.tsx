"use client";

import type { Product } from '@/lib/products';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SorakiMethodCover from './metodo-soraki.png';

export function ProductCard({ product }: { product: Product }) {

  return (
    <Card className="group flex flex-col overflow-hidden bg-card rounded-xl border-border/80 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5">
      {product.image === 'sorakiMethodCover' && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image 
            src={SorakiMethodCover}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="p-6">
        <CardTitle className="font-headline text-xl font-bold">{product.name}</CardTitle>
        <CardDescription className="pt-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="flex items-center justify-between">
          <p className="font-headline text-3xl font-bold text-primary">{product.price}</p>
          {product.guarantee && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>{product.guarantee}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full text-lg py-6 shadow-sm hover:shadow-md">
          <Link href={product.link}>
            Acessar produto <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
