import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 1.25rem 1.5rem;
  background-color: ${props => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    top: -2.5rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme["base-label"]}
  }
`

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: -1.25rem;
`

export const CoffeeTag = styled.span`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  
  text-transform: uppercase;
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: bold;
`

export const PriceRow = styled.div`
  margin-top: 2.0625rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceInfo = styled.div`
  font-size: 0.875rem;

  span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 800;
  }
`

export const ItemSelectionInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddToCardButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme["base-card"]};
  background-color: ${props => props.theme["purple-dark"]};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme["purple"]};
  }
`