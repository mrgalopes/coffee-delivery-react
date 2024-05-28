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
  const fullImgPath = `./src/assets/${imgPath}`;

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  const priceInReals = formatter.format(priceInCents / 100);
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
          <AddToCardButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCardButton>
        </ItemSelectionInfo>
      </PriceRow>
    </CoffeeCardContainer>
  );
}
