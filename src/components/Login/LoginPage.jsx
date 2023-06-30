import React from "react";
import {
  BookWrapper,
  LoginPageContainer,
  LoginPageWrapper,
  UlHorizontal,
} from "./LoginPage.style.";
import LoginBoard from "./components/LoginBoard";
import { Li } from "../HistoryContent/Components/DataUI/DataUI.style";

function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginPageContainer>
        <BookWrapper>
          <UlHorizontal>
            <Li>teste</Li>
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
