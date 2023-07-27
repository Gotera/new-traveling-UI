import styled from "styled-components";
import { colors } from "App.style";

export const DarkTechButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  border: none;
  cursor: pointer;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: ${colors.lightierBlue};
    border-color: #000000;
    transform: scale(0.96);
  }

  &:hover {
    color: ${colors.neonGreen};
  }

  p {
    padding-bottom: 1%;
  }

  svg {
    margin-left: 1rem;
    rotate: 180deg;
  }
`;
