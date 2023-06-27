import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  LoginTittle,
  LoginWrapper,
} from "./login.style";
import { Li, Ul } from "../HistoryContent/Components/DataUI/DataUI.style";

function Login() {
  return (
    <LoginWrapper>
      <LoginTittle>
        <h2>Login</h2>
      </LoginTittle>
      <FieldsWrapper>
        <Ul>
          <Li>
            <LoginInput />
          </Li>
        </Ul>
      </FieldsWrapper>
    </LoginWrapper>
  );
}

export default Login;
