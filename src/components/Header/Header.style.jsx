import styled from "styled-components";
import { colors } from "../../App.style";

export const HeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  background-color: ${colors.darkBlue};
  box-shadow: 0 0 20px 3px;
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: ab;
`;

export const HeaderWrapperBars = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 32px;
  margin-left: 32px;
  color: ${colors.red};
  cursor: pointer;
  position: fixed;
`;
