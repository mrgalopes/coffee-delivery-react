import styled from "styled-components"
import { Card } from "../styles"

export const SelectedCoffeeCard = styled(Card)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
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