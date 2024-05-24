import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

interface IconProps {
  $variant: keyof typeof defaultTheme;
}

export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  background-color: ${(props) => props.theme[props.$variant]};
  color: white;
`;
