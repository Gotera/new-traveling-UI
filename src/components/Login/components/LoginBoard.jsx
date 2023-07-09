import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
  InputContainer,
} from "./LoginBoard.style";
import { Li, Ul } from "../../HistoryContent/Components/DataUI/DataUI.style";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

function LoginPainel() {
  return (
    <UserWrapper>
      <UserTittle>
        <h2>Login</h2>
      </UserTittle>
      <FieldsWrapper>
        <form>
          <Ul>
            <Li>
              <InputContainer>
                <HiOutlineMail className="React_Icon" />
                <LoginInput type="email" placeholder="Email" />
              </InputContainer>
            </Li>
            <Li>
              <InputContainer>
                <HiOutlineLockClosed className="React_Icon" />
                <LoginInput type="password" placeholder="Senha" />
              </InputContainer>
            </Li>
            <Li>
              <p htmlfor="checkbox">
                <label>
                  <input
                    id="checkbox"
                    type="checkbox"
                  />
                  Lembrar
                </label>
              </p>
              <p>
                <a href="/">Esqueceu a Senha?</a>
              </p>
            </Li>
            <Li>
              <p>
                <a href="/register">Ainda não possui uma conta?</a>
              </p>
            </Li>
            <Li>
              <SubmitButton>Entrar</SubmitButton>
            </Li>
          </Ul>
        </form>
      </FieldsWrapper>
    </UserWrapper>
  );
}

export default LoginPainel;
