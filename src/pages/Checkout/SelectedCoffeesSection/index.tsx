import { useContext } from "react";
import { Heading } from "../styles";
import { ConfirmOrderButton, OrderSummary, SelectedCoffeeCard } from "./styles";
import { CartContext } from "../../../contexts/CartContext";
import { ItemInCart } from "../ItemInCart";
import { Link } from "react-router-dom";

export function SelectedCoffeesSection() {
  const { cart, totalPriceInCents } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section>
        <Heading>Cafés selecionados</Heading>
        <SelectedCoffeeCard>
          <h3>Parece que você não adicionou nenhum café ainda...</h3>
          <h4>Vá até a home e adicione alguns no seu carrinho!</h4>

          <Link to="/">
            <ConfirmOrderButton>Escolher cafés</ConfirmOrderButton>
          </Link>
        </SelectedCoffeeCard>
      </section>
    );
  }

  const formatter = Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });

  const formattedTotalItemsPriceInReals = formatter.format(
    totalPriceInCents / 100
  );

  const deliveryPriceInCents = 350;
  const formattedDeliveryPriceInReals = formatter.format(
    deliveryPriceInCents / 100
  );

  const formattedFinalPriceInReals = formatter.format(
    (totalPriceInCents + deliveryPriceInCents) / 100
  );

  return (
    <section>
      <Heading>Cafés selecionados</Heading>
      <SelectedCoffeeCard>
        {cart.map((cartItem) => (
          <ItemInCart key={cartItem.item.name} cartItem={cartItem} />
        ))}
        <OrderSummary>
          <div>
            <span>Total de itens</span>
            <span>R$ {formattedTotalItemsPriceInReals}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {formattedDeliveryPriceInReals}</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {formattedFinalPriceInReals}</span>
          </div>
        </OrderSummary>
        <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
      </SelectedCoffeeCard>
    </section>
  );
}
