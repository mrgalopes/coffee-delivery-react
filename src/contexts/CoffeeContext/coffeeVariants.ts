interface CoffeeVariant {
  name: string;
  filename: string;
  tags: string[];
  description: string;
  priceInCents: number;
}

export const CoffeeVariants: CoffeeVariant[] = [
  {
    name: "Expresso Tradicional",
    filename: "Type=Expresso.png",
    tags: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    priceInCents: 990,
  },
  {
    name: "Expresso Americano",
    filename: "Type=Americano.png",
    tags: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    priceInCents: 990,
  },
  {
    name: "Expresso Cremoso",
    filename: "Type=Expresso Cremoso.png",
    tags: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    priceInCents: 990,
  },
  {
    name: "Expresso Gelado",
    filename: "Type=Café Gelado.png",
    tags: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    priceInCents: 990,
  },
  {
    name: "Café com Leite",
    filename: "Type=Café com Leite.png",
    tags: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    priceInCents: 990,
  },
  {
    name: "Latte",
    filename: "Type=Latte.png",
    tags: ["tradicional", "com leite"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    priceInCents: 990,
  },
  {
    name: "Capuccino",
    filename: "Type=Capuccino.png",
    tags: ["tradicional", "com leite"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    priceInCents: 990,
  },
  {
    name: "Macchiato",
    filename: "Type=Macchiato.png",
    tags: ["tradicional", "com leite"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    priceInCents: 990,
  },
  {
    name: "Mocaccino",
    filename: "Type=Mocaccino.png",
    tags: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    priceInCents: 990,
  },
  {
    name: "Chocolate Quente",
    filename: "Type=Chocolate Quente.png",
    tags: ["especial", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    priceInCents: 990,
  },
  {
    name: "Cubano",
    filename: "Type=Cubano.png",
    tags: ["especial", "alcoólico", "gelado"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    priceInCents: 990,
  },
  {
    name: "Havaiano",
    filename: "Type=Havaiano.png",
    tags: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    priceInCents: 990,
  },
  {
    name: "Árabe",
    filename: "Type=Árabe.png",
    tags: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    priceInCents: 990,
  },
  {
    name: "Irlandês",
    filename: "Type=Irlandês.png",
    tags: ["especial", "alcóolico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    priceInCents: 990,
  },
]