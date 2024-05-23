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
`

export const PaymentSelectionButton = styled.button`
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

  // TODO colocar estado selecionado
`

export const SelectedCoffeeCard = styled(Card)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${props => props.theme["base-button"]};

  &:first-child {
    padding-top: 0;
  }

  & > div {
    display: flex;
    gap: 1.5rem;
  }

  & > span {
    font-weight: bold;
    line-height: 1.3;
  }
`

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${props => props.theme["base-subtitle"]};
    line-height: 1.3;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background-color: ${props => props.theme["base-button"]};
  border: none;
  border-radius: 6px;

  svg {
    color: ${props => props.theme.purple};
  }

  span {
    color: ${props => props.theme["base-text"]};
    text-transform: uppercase;
    line-height: 1.6;
    font-size: 0.75rem;
  }
`

export const OrderSummary = styled.div`
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    line-height: 1.3;

    &:last-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
  }
`