import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";

export const HomeContainer = styled.main`
  padding: 6rem 10rem;
`

export const HeroSection = styled.section`
  display: flex;
  gap: 3.5rem;
`

export const HeroText = styled.div`
  max-width: 36.75rem;
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]}
  }

  h2 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]}
  }
`

export const ProductDescription = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: max-content max-content;
  gap: 1.25rem 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

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

  background-color: ${props => props.theme[props.$variant]};
  color: white;
`

export const OurCoffeesSection = styled.section`
  margin-top: 2rem;
  h2 {
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 3.375rem;
  }
`

