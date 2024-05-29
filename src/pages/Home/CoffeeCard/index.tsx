import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  AddToCardButton,
  CoffeeCardContainer,
  CoffeeTag,
  CoffeeTags,
  ItemSelectionInfo,
  PriceInfo,
  PriceRow,
} from "./styles";

import { CoffeeAmountSelector } from "../../../components/CoffeeAmountSelector";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CoffeeVariant } from "../../../contexts/CoffeeContext";

interface CoffeeCardProps {
  title: string;
  imgPath: string;
  tags: string[];
  description: string;
  priceInCents: number;
}

export function CoffeeCard({
  title,
  imgPath,
  tags,
  description,
  priceInCents,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const fullImgPath = `./src/assets/${imgPath}`;

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  const priceInReals = formatter.format(priceInCents / 100);

  function handleUpdateQuantity(amount: number) {
    if (quantity + amount < 1) {
      return;
    }
    setQuantity((q) => q + amount);
  }

  function handleAddToCart() {
    const item: CoffeeVariant = {
      name: title,
      description,
      filename: imgPath,
      priceInCents,
      tags,
    };

    addToCart(item, 1);
    setQuantity(1);
  }

  return (
    <CoffeeCardContainer>
      <img src={fullImgPath} alt="foto do café gelado" />
      <CoffeeTags>
        {tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTags>
      <h3>{title}</h3>
      <p>{description}</p>

      <PriceRow>
        <PriceInfo>
          R$&nbsp;
          <span>{priceInReals}</span>
        </PriceInfo>
        <ItemSelectionInfo>
          <CoffeeAmountSelector
            value={quantity}
            updater={handleUpdateQuantity}
          />
          <AddToCardButton onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCardButton>
        </ItemSelectionInfo>
      </PriceRow>
    </CoffeeCardContainer>
  );
}
