import { Trash } from "@phosphor-icons/react";
import { CoffeeAmountSelector } from "../../../components/CoffeeAmountSelector";
import { CartContext, CartItem } from "../../../contexts/CartContext";
import { Item, ItemActions, RemoveButton } from "./styles";
import { useContext } from "react";

interface CartItemProps {
  cartItem: CartItem;
}

export function ItemInCart({ cartItem }: CartItemProps) {
  const { increaseQuantityBy, removeItemFromCart } = useContext(CartContext);

  const fullImgPath = `./src/assets/${cartItem.item.filename}`;

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });

  const totalPriceInReals =
    (cartItem.item.priceInCents * cartItem.quantity) / 100;

  function increaseThisItemQuantityBy(amount: number) {
    increaseQuantityBy(cartItem.item.name, amount);
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(cartItem.item.name);
  }

  return (
    <Item>
      <div>
        <img src={fullImgPath} alt={cartItem.item.name} />
        <ItemActions>
          <p>{cartItem.item.name}</p>
          <div>
            <CoffeeAmountSelector
              value={cartItem.quantity}
              updater={increaseThisItemQuantityBy}
            />
            <RemoveButton onClick={handleRemoveItemFromCart}>
              <Trash />
              <span>Remover</span>
            </RemoveButton>
          </div>
        </ItemActions>
      </div>
      <span>R$ {formatter.format(totalPriceInReals)}</span>
    </Item>
  );
}
