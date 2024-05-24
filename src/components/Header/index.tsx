import { CartButton, HeaderContainer, LocationButton } from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Header() {
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
          </CartButton>
        </Link>
      </div>
    </HeaderContainer>
  );
}
