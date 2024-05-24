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

export function Success() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </DescriptionLine>
        </ColoredBox>
      </div>
      <img src={SuccessImg} alt="homem em uma moto levando o pedido" />
    </SuccessContainer>
  );
}
