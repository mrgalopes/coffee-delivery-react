import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;
  form {
    display: grid;
    grid-template-columns: 40rem 1fr;
    gap: 2rem;
  }
`

export const Heading = styled.h2`
  margin-bottom: 1rem;

  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.3;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Card = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`

interface CardHeaderProps {
  $iconColor: keyof typeof defaultTheme;
}

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme[props.$iconColor]};
  }

  div h3 {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 500;
  }

  div p {
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 500;
  }

  margin-bottom: 2rem;
`

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem 0.75rem;

  & > div > input {
    width: 100%;
  }

  & > :nth-child(1) { // CEP
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > :nth-child(2) { // Rua
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  & > :nth-child(3) { // Número
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  & > :nth-child(4) { // Complemento
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  & > :nth-child(5) { // Bairro
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  & > :nth-child(6) { // Cidade
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
  
  & > :nth-child(7) { // UF
    grid-column: 3 / 4;
    grid-row: 4 / 5;
  }
`

export const Input = styled.input`
  padding: 0.75rem;
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${props => props.theme["yellow-dark"]};
    outline: none;
  }
`

export const ComplementInput = styled(Input)`
  &::placeholder {
    // TODO descobrir se dá para estilizar para colocar o Opcional do outro lado
    // como no design
  }
`

export const PaymentSelectionSection = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    display: none;
  }

  input:checked + label {
    background-color: ${props => props.theme["purple-light"]};
  }
`

export const PaymentSelectionButton = styled.label`
  padding: 1rem;
  width: 100%;

  background-color: ${props => props.theme["base-button"]};
  border: none;
  border-radius: 6px;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${props => props.theme["base-text"]};

  cursor: pointer;

  svg {
    font-size: 1rem;
    color: ${props => props.theme.purple};
  }

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
  }
`
