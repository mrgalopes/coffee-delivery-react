import { ReactNode, createContext, useState } from "react";
import { CoffeeVariant } from "../CoffeeContext";

export interface CartItem {
  item: CoffeeVariant;
  quantity: number;
}

interface CartContextState {
  cart: CartItem[];
  numberOfItemsInCart: number;
  totalPriceInCents: number;
  addToCart: (item: CoffeeVariant, quantity: number) => void;
  increaseQuantityBy: (itemName: string, amount: number) => void;
  removeItemFromCart: (itemName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextState);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const numberOfItemsInCart = cart.reduce(
    (prev, cartItem) => prev + cartItem.quantity,
    0
  );

  const totalPriceInCents = cart.reduce(
    (prev, cartItem) => prev + cartItem.item.priceInCents * cartItem.quantity,
    0
  );

  function addToCart(item: CoffeeVariant, quantity: number) {
    if (cart.findIndex((cartItem) => cartItem.item.name === item.name) !== -1) {
      setCart((state) =>
        state.map((cartItem) => {
          if (cartItem.item.name !== item.name) {
            return cartItem;
          }
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        })
      );
    } else {
      const newItem: CartItem = {
        item,
        quantity,
      };
      setCart((state) => [...state, newItem]);
    }
  }

  function increaseQuantityBy(itemName: string, amount: number) {
    setCart((oldCart) =>
      oldCart.map((cartItem) => {
        if (cartItem.item.name !== itemName) {
          return cartItem;
        }
        return {
          ...cartItem,
          quantity: cartItem.quantity + amount,
        };
      })
    );
  }

  function removeItemFromCart(itemName: string) {
    setCart((oldCart) =>
      oldCart.filter((cartItem) => cartItem.item.name !== itemName)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const value = {
    cart,
    numberOfItemsInCart,
    totalPriceInCents,
    addToCart,
    increaseQuantityBy,
    removeItemFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
