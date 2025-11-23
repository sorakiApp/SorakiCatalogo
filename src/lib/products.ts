export type Product = {
  name: string;
  description: string;
  price: string;
  link: string;
  icon: string;
};

export const products: Product[] = [
  {
    name: "Planner de Estudos",
    description: "Organize sua rotina e otimize seu aprendizado.",
    price: "R$ 49,90",
    link: "#",
    icon: "NotebookText",
  },
  {
    name: "Caderno de Resumos",
    description: "Condense o conhecimento e revise com mais eficiência.",
    price: "R$ 39,90",
    link: "#",
    icon: "BookOpen",
  },
  {
    name: "Template de Anotações",
    description: "Padronize suas anotações para clareza e organização.",
    price: "R$ 29,90",
    link: "#",
    icon: "FileText",
  },
  {
    name: "Calendário Acadêmico",
    description: "Nunca mais perca um prazo importante.",
    price: "R$ 19,90",
    link: "#",
    icon: "CalendarDays",
  },
];
