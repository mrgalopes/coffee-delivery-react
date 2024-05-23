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

import CoffeeImg from "../../../assets/Type=Café Gelado.png";
import { CoffeeAmountSelector } from "../../../components/CoffeeAmountSelector";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeImg} alt="foto do café gelado" />
      <CoffeeTags>
        <CoffeeTag>Tradicional</CoffeeTag>
        <CoffeeTag>Gelado</CoffeeTag>
      </CoffeeTags>
      <h3>Espresso Gelado</h3>
      <p>Bebida preparada com café expresso e cubos de gelo</p>

      <PriceRow>
        <PriceInfo>
          R$&nbsp;
          <span>9,90</span>
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
