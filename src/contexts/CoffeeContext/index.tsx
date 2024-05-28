import { ReactNode, createContext } from "react";
import { coffeeVariants } from "./coffeeVariants";

export interface CoffeeVariant {
  name: string;
  filename: string;
  tags: string[];
  description: string;
  priceInCents: number;
}

interface CoffeeContextState {
  coffeeVariants: CoffeeVariant[];
}

export const CoffeeContext = createContext({} as CoffeeContextState);

interface CoffeeProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const value = {
    coffeeVariants,
  };

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  );
}
