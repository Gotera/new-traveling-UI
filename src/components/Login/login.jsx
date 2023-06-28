import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  LoginTittle,
  LoginWrapper,
  SubmitButton,
} from "./login.style";
import { Li, Ul } from "../HistoryContent/Components/DataUI/DataUI.style";

function Login() {
  return (
    <LoginWrapper>
      <LoginTittle>
        <h2>Login</h2>
      </LoginTittle>
      <FieldsWrapper>
        <form>
          <Ul>
            <Li>
              <LoginInput type="name" placeholder="Nome" />
            </Li>
            <Li>
              <LoginInput type="email" placeholder="Email" />
            </Li>
            <Li>
              <LoginInput type="password" placeholder="Senha" />
            </Li>
            <Li>
              <LoginInput type="password" placeholder="Confirme a Senha" />
            </Li>
            <Li>
              <p>
              <input type="checkbox"/> Lembrar
              </p>
              <p><a>Esqueceu a Senha?</a></p>
            </Li>
            <Li>
              <SubmitButton>Entrar</SubmitButton>
            </Li>
          </Ul>
        </form>
      </FieldsWrapper>
    </LoginWrapper>
  );
}

export default Login;
