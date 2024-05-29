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
import { useContext } from "react";
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
  const { addToCart } = useContext(CartContext);

  const fullImgPath = `./src/assets/${imgPath}`;

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  const priceInReals = formatter.format(priceInCents / 100);

  function handleAddToCart() {
    const item: CoffeeVariant = {
      name: title,
      description,
      filename: imgPath,
      priceInCents,
      tags,
    };

    addToCart(item, 1);
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
          <CoffeeAmountSelector />
          <AddToCardButton onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCardButton>
        </ItemSelectionInfo>
      </PriceRow>
    </CoffeeCardContainer>
  );
}
