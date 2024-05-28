import {
  HeroSection,
  HeroText,
  HomeContainer,
  OurCoffeesSection,
  ProductDescription,
} from "./styles";
import HeroImg from "../../assets/Hero.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeCard } from "./CoffeeCard";
import { Icon } from "../../components/Icon";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Home() {
  const { coffeeVariants } = useContext(CoffeeContext);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery, você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <ProductDescription>
            <div>
              <Icon $variant="yellow-dark">
                <ShoppingCart weight="fill" />
              </Icon>
              Compra simples e segura
            </div>
            <div>
              <Icon $variant="base-text">
                <Package weight="fill" />
              </Icon>
              Embalagem mantém o café intacto
            </div>
            <div>
              <Icon $variant="yellow">
                <Timer weight="fill" />
              </Icon>
              Entrega rápida e rastreada
            </div>
            <div>
              <Icon $variant="purple">
                <Coffee weight="fill" />
              </Icon>
              O café chega fresquinho até você
            </div>
          </ProductDescription>
        </HeroText>
        <div>
          <img src={HeroImg} alt="copo de café" />
        </div>
      </HeroSection>

      <OurCoffeesSection>
        <h2>Nossos cafés</h2>
        <div>
          {coffeeVariants.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              title={coffee.name}
              tags={coffee.tags}
              description={coffee.description}
              imgPath={coffee.filename}
              priceInCents={coffee.priceInCents}
            />
          ))}
        </div>
      </OurCoffeesSection>
    </HomeContainer>
  );
}
