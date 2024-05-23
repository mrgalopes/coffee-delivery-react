import { Minus, Plus } from "@phosphor-icons/react";
import { CoffeeAmount, CoffeeAmountContainer, Symbol } from "./styles";

export function CoffeeAmountSelector() {
  return (
    <CoffeeAmountContainer>
      <Symbol>
        <Minus size={14} />
      </Symbol>
      <CoffeeAmount>1</CoffeeAmount>
      <Symbol>
        <Plus size={14} />
      </Symbol>
    </CoffeeAmountContainer>
  );
}
