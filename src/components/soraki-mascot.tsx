import { cn } from '@/lib/utils';
import Image from 'next/image';

export function SorakiMascot({ className, ...props }: { className?: string }) {
  return (
    <Image
      src="/soraki.png"
      alt="Soraki Mascot"
      width={80}
      height={80}
      className={cn('text-foreground/80', className)}
      {...props}
    />
  );
}
