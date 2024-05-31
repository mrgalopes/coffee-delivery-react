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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const checkoutFormValidationSchema = z.object({
  address: z.object({
    zipNumber: z.string().min(1, "Campo CEP é obrigatório!"),
    streetName: z.string().min(1, "Campo Rua é obrigatório!"),
    streetNumber: z.string().min(1, "Campo Número é obrigatório!"),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, "Campo Bairro é obrigatório!"),
    city: z.string().min(1, "Campo Cidade é obrigatório!"),
    state: z.string().min(1, "Campo UF é obrigatório!"),
  }),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    message: "Escolha uma forma de pagamento",
  }),
});

type CheckoutInfo = z.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const { numberOfItemsInCart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (numberOfItemsInCart === 0) {
      console.log("redirecting to home...");

      navigate("/");
    }
  }, [numberOfItemsInCart, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutInfo>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

  function handleSubmitCheckout(data: CheckoutInfo) {
    console.log(data);
    navigate("/success");
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
                <div>
                  <Input
                    type="text"
                    placeholder="CEP"
                    {...register("address.zipNumber")}
                    aria-invalid={errors.address?.zipNumber ? "true" : "false"}
                  />
                  {errors.address?.zipNumber && (
                    <p>{errors.address.zipNumber.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Rua"
                    {...register("address.streetName")}
                  />
                  {errors.address?.streetName && (
                    <p>{errors.address.streetName.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Número"
                    {...register("address.streetNumber")}
                  />
                  {errors.address?.streetNumber && (
                    <p>{errors.address.streetNumber.message}</p>
                  )}
                </div>
                <div>
                  <ComplementInput
                    type="text"
                    placeholder="Complemento (Opcional)"
                    {...register("address.complement")}
                  />
                  {errors.address?.complement && (
                    <p>{errors.address.complement.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Bairro"
                    {...register("address.neighborhood")}
                  />
                  {errors.address?.neighborhood && (
                    <p>{errors.address.neighborhood.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Cidade"
                    {...register("address.city")}
                  />
                  {errors.address?.city && <p>{errors.address.city.message}</p>}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="UF"
                    {...register("address.state")}
                  />
                  {errors.address?.state && (
                    <p>{errors.address.state.message}</p>
                  )}
                </div>
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
              {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
            </Card>
          </Cards>
        </section>

        <SelectedCoffeesSection />
      </form>
    </CheckoutContainer>
  );
}
