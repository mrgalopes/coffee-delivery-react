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

import { SelectedCoffeesSection } from "./SelectedCoffeesSection";
import { useForm } from "react-hook-form";

interface Address {
  zipNumber: string;
  streetName: string;
  streetNumber: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface CheckoutInfo {
  address: Address;
  paymentMethod: "credit" | "debit" | "cash";
}

export function Checkout() {
  const { register, handleSubmit } = useForm<CheckoutInfo>();

  function handleSubmitCheckout(data: CheckoutInfo) {
    console.log(data);
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitCheckout)}>
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
                <Input
                  type="text"
                  placeholder="CEP"
                  {...register("address.zipNumber")}
                />
                <Input
                  type="text"
                  placeholder="Rua"
                  {...register("address.streetName")}
                />
                <Input
                  type="text"
                  placeholder="Número"
                  {...register("address.streetNumber")}
                />
                <ComplementInput
                  type="text"
                  placeholder="Complemento (Opcional)"
                  {...register("address.complement")}
                />
                <Input
                  type="text"
                  placeholder="Bairro"
                  {...register("address.neighborhood")}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  {...register("address.city")}
                />
                <Input
                  type="text"
                  placeholder="UF"
                  {...register("address.state")}
                />
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
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  {...register("paymentMethod")}
                />
                <PaymentSelectionButton htmlFor="credit">
                  <CreditCard />
                  <span>Cartão de Crédito</span>
                </PaymentSelectionButton>

                <input
                  type="radio"
                  id="debit"
                  value="debit"
                  {...register("paymentMethod")}
                />
                <PaymentSelectionButton htmlFor="debit">
                  <Bank />
                  Cartão de Débito
                </PaymentSelectionButton>

                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  {...register("paymentMethod")}
                />
                <PaymentSelectionButton htmlFor="cash">
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
