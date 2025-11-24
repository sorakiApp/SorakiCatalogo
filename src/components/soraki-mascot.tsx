import { cn } from '@/lib/utils';
import Image from 'next/image';
import SorakiMascotImage from './soraki.png';

export function SorakiMascot({ className, ...props }: { className?: string }) {
  return (
    <Image
      src={SorakiMascotImage}
      alt="Soraki Mascot"
      width={40}
      height={40}
      className={cn('text-foreground/80', className)}
      {...props}
    />
  );
}
