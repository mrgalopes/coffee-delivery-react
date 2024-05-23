import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
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
  Item,
  ItemActions,
  OrderSummary,
  PaymentSelectionButton,
  PaymentSelectionSection,
  RemoveButton,
  SelectedCoffeeCard,
} from "./styles";

import Expresso from "../../assets/Type=Expresso.png";
import Latte from "../../assets/Type=Latte.png";
import { CoffeeAmountSelector } from "../../components/CoffeeAmountSelector";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
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
            <Item>
              <div>
                <img src={Expresso} alt="Expresso" />
                <ItemActions>
                  <p>Expresso Tradicional</p>
                  <div>
                    <CoffeeAmountSelector />
                    <RemoveButton>
                      <Trash />
                      <span>Remover</span>
                    </RemoveButton>
                  </div>
                </ItemActions>
              </div>
              <span>R$ 9,90</span>
            </Item>
            <Item>
              <div>
                <img src={Latte} alt="Latte" />
                <ItemActions>
                  <p>Latte</p>
                  <div>
                    <CoffeeAmountSelector />
                    <RemoveButton>
                      <Trash />
                      <span>Remover</span>
                    </RemoveButton>
                  </div>
                </ItemActions>
              </div>
              <span>R$ 9,90</span>
            </Item>
            <OrderSummary>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </OrderSummary>
            <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
          </SelectedCoffeeCard>
        </section>
      </form>
    </CheckoutContainer>
  );
}
