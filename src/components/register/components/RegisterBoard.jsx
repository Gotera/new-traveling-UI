import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  LoginTittle,
  LoginWrapper,
  SubmitButton,
} from "./LoginBoard.style";
import { Li, Ul } from "../../HistoryContent/Components/DataUI/DataUI.style";
import { BiUser } from "react-icons/bi";
import {
  HiOutlineMail,
  HiOutlineLockOpen,
  HiOutlineLockClosed,
} from "react-icons/hi";

function RegisterPainel() {
  return (
    <LoginWrapper>
      <LoginTittle>
        <h2>Login</h2>
      </LoginTittle>
      <FieldsWrapper>
        <form>
          <Ul>
            <Li>
              <BiUser className="React_Icon" />
              <LoginInput type="name" placeholder="Nome"></LoginInput>
            </Li>
            <Li>
              <HiOutlineMail className="React_Icon" />
              <LoginInput type="email" placeholder="Email" />
            </Li>
            <Li>
              <HiOutlineLockClosed className="React_Icon" />
              <LoginInput type="password" placeholder="Senha" />
            </Li>
            <Li>
              <HiOutlineLockOpen className="React_Icon" />
              <LoginInput type="password" placeholder="Confirme a Senha" />
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

export default RegisterPainel;
