import styled from "styled-components";
import { colors } from "../../../App.style";

export const UserWrapper = styled.div`
  position: relative;
  padding: 4rem;
  border-radius: 0.8rem;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  background-color: ${colors.lightierBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 370px) {
    padding: 3rem;
  }
  @media (max-width: 330px) {
    height: 28rem;
    padding: 1.1rem;
  }
`;

export const UserTittle = styled.div`
  font-family: "Roboto Mono", monospace, Circular, -apple-system,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  padding: 1.5rem 2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: ${colors.white};
  background-color: ${colors.babyBlue};
  border: 2px solid ${colors.white};
  position: absolute;
  bottom: 93%;
`;

export const FieldsWrapper = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  p {
    cursor: pointer;
    text-align: center;
    user-select: none;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
  Li:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${colors.white};
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
  Li:nth-child(4) {
    color: ${colors.white};
    p {
      text-align: center;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
    }
  }
`;

export const InputContainer = styled.div`
  border: 0;
  outline: 0;
  border-bottom: 4px solid ${colors.babyBlue};
  box-sizing: border-box;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  background-color: ${colors.white};
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  .React_Icon {
    z-index: 1;
    padding: 0.8rem 4px;
    /* position: absolute; */
    color: ${colors.darkGrey};
  }
`;

export const LoginInput = styled.input`
  all: unset;
  text-align: start;
`;

export const SubmitButton = styled.button`
  border: 0.1px solid ${colors.white};
  height: 3rem;
  padding: 4px;
  background-color: ${colors.babyBlue};
  color: ${colors.white};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  letter-spacing: normal;
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.babyBlue};
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;
