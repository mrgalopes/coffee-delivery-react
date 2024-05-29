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
  position: relative;
`

export const CartCounter = styled.span`
  background-color: ${props => props.theme["yellow-dark"]};
  color: ${props => props.theme.white};

  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -0.5rem;
  left: 1.646875rem;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.3;
`