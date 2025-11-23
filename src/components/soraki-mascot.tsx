import Image from 'next/image';
import { cn } from '@/lib/utils';

export function SorakiMascot({ className, ...props }: { className?: string }) {
  return (
    <Image
      src="/soraki.png"
      alt="Soraki Mascot"
      width={40}
      height={40}
      className={cn('text-foreground/80', className)}
      {...props}
    />
  );
}
