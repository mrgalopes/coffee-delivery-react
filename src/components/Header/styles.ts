import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 6px;

  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};

  display: flex;
  gap: 0.25rem;
  align-items: center;
  svg {
    color: ${props => props.theme["purple"]};
  }
`

export const CartButton = styled(BaseButton)`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
`