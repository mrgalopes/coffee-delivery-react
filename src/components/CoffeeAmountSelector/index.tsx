import { Minus, Plus } from "@phosphor-icons/react";
import { CoffeeAmount, CoffeeAmountContainer, Symbol } from "./styles";

interface CoffeeAmountSelectorProps {
  value: number;
  updater: (updateValue: number) => void;
}

export function CoffeeAmountSelector({
  value,
  updater,
}: CoffeeAmountSelectorProps) {
  return (
    <CoffeeAmountContainer>
      <Symbol onClick={() => updater(-1)}>
        <Minus size={14} />
      </Symbol>
      <CoffeeAmount>{value}</CoffeeAmount>
      <Symbol onClick={() => updater(1)}>
        <Plus size={14} />
      </Symbol>
    </CoffeeAmountContainer>
  );
}
