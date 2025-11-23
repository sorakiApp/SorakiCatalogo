"use client";

import type { Product } from '@/lib/products';
import { iconMap } from '@/lib/products';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <Card className="flex flex-col overflow-hidden bg-card rounded-xl border-border shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
            {Icon && <Icon className="h-6 w-6 text-primary" />}
          </div>
          <CardTitle className="font-headline text-lg font-bold">{product.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-headline text-xl font-bold">{product.price}</p>
        <Button asChild className="w-full sm:w-auto">
          <Link href={product.link}>
            Acessar produto <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
