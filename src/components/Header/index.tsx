import {
  CartButton,
  CartCounter,
  HeaderContainer,
  LocationButton,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { numberOfItemsInCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="logo do coffee delivery" />
      </Link>
      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <Link to="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {numberOfItemsInCart > 0 && (
              <CartCounter>{numberOfItemsInCart}</CartCounter>
            )}
          </CartButton>
        </Link>
      </div>
    </HeaderContainer>
  );
}
