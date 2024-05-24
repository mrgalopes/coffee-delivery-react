import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding: 6rem 10rem;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${props => props.theme["yellow-dark"]};
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;

  margin-bottom: 2.5rem;
`

export const ColoredBox = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(${props => props.theme.background}, ${props => props.theme.background}) padding-box,
    linear-gradient(45deg, ${props => props.theme.yellow}, ${props => props.theme.purple}) border-box;
  border: 1px solid transparent;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const DescriptionLine = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    font-weight: bold;
  }
`