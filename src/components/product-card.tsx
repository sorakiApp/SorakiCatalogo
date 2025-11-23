"use client";

import type { Product } from '@/lib/products';
import { iconMap } from '@/lib/icon-map';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Heart, Sparkle } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <Card className="group flex flex-col overflow-hidden bg-card rounded-xl border-border/80 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/50 text-accent-foreground">
            {Icon && <Icon className="h-6 w-6" />}
          </div>
          <CardTitle className="font-headline text-lg font-bold">{product.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-headline text-xl font-bold">{product.price}</p>
        <Button asChild className="w-full shadow-sm hover:shadow-md sm:w-auto">
          <Link href={product.link}>
            Acessar produto <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
