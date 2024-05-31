import styled from "styled-components";

export const CoffeeAmountContainer = styled.div`
  padding: 0.53125rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
`

export const Symbol = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    color: ${props => props.theme["purple"]};
  }

  svg:hover {
    color: ${props => props.theme["purple-dark"]};
  }
`

export const CoffeeAmount = styled.span`
  font-size: 1rem;
  line-height: 1.3;
`