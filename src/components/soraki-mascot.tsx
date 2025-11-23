import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function SorakiMascot(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-10 w-10 text-foreground/80", props.className)}
      {...props}
    >
      <path d="M11.99,2C6.47,2,2,6.48,2,12c0,3.95,2.4,7.34,5.78,8.85L7,22h10l-0.78-1.15C19.6,19.34,22,15.95,22,12 C22,6.48,17.52,2,11.99,2z M9,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S10.1,14,9,14z M15,14c-1.1,0-2-0.9-2-2s0.9-2,2-2 s2,0.9,2,2S16.1,14,15,14z" />
    </svg>
  );
}
