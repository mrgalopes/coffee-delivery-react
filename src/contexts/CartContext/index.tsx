import { ReactNode, createContext, useState } from "react";
import { CoffeeVariant } from "../CoffeeContext";

export interface CartItem {
  item: CoffeeVariant;
  quantity: number;
}

interface CartContextState {
  cart: CartItem[];
  numberOfItemsInCart: number;
  addToCart: (item: CoffeeVariant, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextState);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const numberOfItemsInCart = cart.reduce(
    (prev, item) => prev + item.quantity,
    0
  );

  function addToCart(item: CoffeeVariant, quantity: number) {
    const newItem: CartItem = {
      item,
      quantity,
    };
    setCart((state) => [...state, newItem]);
  }

  const value = {
    cart,
    numberOfItemsInCart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
