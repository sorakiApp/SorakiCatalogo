export type Product = {
  name: string;
  description: string;
  price: string;
  link: string;
  icon: string;
  guarantee?: string;
  image?: string;
};

export const products: Product[] = [
  {
    name: "Método Soraki de Estudo Leve",
    description: "O guia oficial do universo Soraki para estudar com leveza, clareza e constância.",
    price: "R$ 14,90",
    link: "https://pay.cakto.com.br/bryus4d_657937",
    icon: "BookMarked",
    guarantee: "7 dias de garantia",
    image: "sorakiMethodCover",
  },
];
