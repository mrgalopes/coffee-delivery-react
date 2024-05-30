import styled from "styled-components"

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