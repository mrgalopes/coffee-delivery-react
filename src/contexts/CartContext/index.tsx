import { ReactNode, createContext, useState } from "react";
import { CoffeeVariant } from "../CoffeeContext";

interface CartItem {
  item: CoffeeVariant;
  quantity: number;
}

interface CartContextState {
  cart: CartItem[];
  addToCart: (item: CoffeeVariant, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextState);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CoffeeVariant, quantity: number) {
    const newItem: CartItem = {
      item,
      quantity,
    };
    setCart((state) => [...state, newItem]);
  }

  const value = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
