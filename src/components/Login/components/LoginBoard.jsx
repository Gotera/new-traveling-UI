import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
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
              <HiOutlineMail className="React_Icon" />
              <LoginInput type="email" placeholder="Email" />
            </Li>
            <Li>
              <HiOutlineLockClosed className="React_Icon" />
              <LoginInput type="password" placeholder="Senha" />
            </Li>
            <Li>
              <p>
                <input type="checkbox" /> Lembrar
              </p>
              <p>
                <a>Esqueceu a Senha?</a>
              </p>
            </Li>
            <Li>
              <p>
                <a>Ainda não possui uma conta?</a>
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
