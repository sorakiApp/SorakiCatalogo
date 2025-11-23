import type { LucideProps } from "lucide-react";
import { BookOpen, NotebookText, FileText, CalendarDays, BookMarked } from "lucide-react";
import React from "react";

export const iconMap: { [key: string]: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> } = {
  BookOpen,
  NotebookText,
  FileText,
  CalendarDays,
  BookMarked,
};
