import {
  ColoredBox,
  DescriptionLine,
  Subtitle,
  SuccessContainer,
  Title,
} from "./styles";
import SuccessImg from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Icon } from "../../components/Icon";
import { useLocation } from "react-router-dom";
import { CheckoutInfo } from "../Checkout";

type PaymentMethod = "credit" | "debit" | "cash";

function paymentMethodToString(paymentMethod: PaymentMethod): string {
  switch (paymentMethod) {
    case "credit":
      return "Cartão de Crédito";

    case "debit":
      return "Cartão de Débito";

    case "cash":
      return "Dinheiro";
  }
}

export function Success() {
  const location = useLocation();

  const { address, paymentMethod } = location.state as CheckoutInfo;

  const paymentMethodString = paymentMethodToString(paymentMethod);

  return (
    <SuccessContainer>
      <div>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
        <ColoredBox>
          <DescriptionLine>
            <Icon $variant="purple">
              <MapPin />
            </Icon>
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {address.streetName}, {address.streetNumber}{" "}
                  {address.complement ?? ""}
                </span>
              </p>
              <p>
                {address.neighborhood} - {address.city}, {address.state}
              </p>
            </div>
          </DescriptionLine>
          <DescriptionLine>
            <Icon $variant="yellow">
              <Timer />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </DescriptionLine>
          <DescriptionLine>
            <Icon $variant="yellow-dark">
              <CurrencyDollar />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{paymentMethodString}</span>
              </p>
            </div>
          </DescriptionLine>
        </ColoredBox>
      </div>
      <img src={SuccessImg} alt="homem em uma moto levando o pedido" />
    </SuccessContainer>
  );
}
