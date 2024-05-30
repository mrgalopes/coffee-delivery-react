import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  Card,
  CardHeader,
  Cards,
  CheckoutContainer,
  ComplementInput,
  ConfirmOrderButton,
  Heading,
  Input,
  Inputs,
  OrderSummary,
  PaymentSelectionButton,
  PaymentSelectionSection,
  SelectedCoffeeCard,
} from "./styles";

import { FormEvent, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemInCart } from "./ItemInCart";

export function Checkout() {
  const { cart, totalPriceInCents } = useContext(CartContext);

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <section>
          <Heading>Complete o seu pedido</Heading>
          <Cards>
            <Card>
              <CardHeader $iconColor="yellow-dark">
                <MapPinLine size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber o pedido</p>
                </div>
              </CardHeader>
              <Inputs>
                <Input type="text" placeholder="CEP" />
                <Input type="text" placeholder="Rua" />
                <Input type="text" placeholder="Número" />
                <ComplementInput
                  type="text"
                  placeholder="Complemento (Opcional)"
                />
                <Input type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" />
              </Inputs>
            </Card>
            <Card>
              <CardHeader $iconColor="purple">
                <CurrencyDollar />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </CardHeader>
              <PaymentSelectionSection>
                <PaymentSelectionButton>
                  <CreditCard />
                  <span>Cartão de Crédito</span>
                </PaymentSelectionButton>
                <PaymentSelectionButton>
                  <Bank />
                  Cartão de Débito
                </PaymentSelectionButton>
                <PaymentSelectionButton>
                  <Money />
                  Dinheiro
                </PaymentSelectionButton>
              </PaymentSelectionSection>
            </Card>
          </Cards>
        </section>

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
            <ConfirmOrderButton type="submit">
              Confirmar Pedido
            </ConfirmOrderButton>
          </SelectedCoffeeCard>
        </section>
      </form>
    </CheckoutContainer>
  );
}
