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
  Heading,
  Input,
  Inputs,
  PaymentSelectionButton,
  PaymentSelectionSection,
} from "./styles";

import { FormEvent } from "react";
import { SelectedCoffeesSection } from "./SelectedCoffeesSection";

export function Checkout() {
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

        <SelectedCoffeesSection />
      </form>
    </CheckoutContainer>
  );
}
