import React from "react";
import {
  BookWrapper,
  LoginPageContainer,
  LoginPageWrapper,
  UlHorizontal,
} from "./LoginPage.style.";
import LoginBoard from "./components/LoginBoard";
import { Li } from "../HistoryContent/Components/DataUI/DataUI.style";
import SVGIcon from "../../assets/Login/undraw_delivery_truck_vt6p.svg";

function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginPageContainer>
        <BookWrapper>
          <UlHorizontal>
            <Li>
              <img src={SVGIcon} height={220} width={503} />
            </Li>
            <Li>
              <LoginBoard />
            </Li>
          </UlHorizontal>
        </BookWrapper>
      </LoginPageContainer>
    </LoginPageWrapper>
  );
}

export default LoginPage;
