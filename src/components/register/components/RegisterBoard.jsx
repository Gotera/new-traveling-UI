import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
} from "../../Login/components/LoginBoard.style";
import { Li, Ul } from "../../HistoryContent/Components/DataUI/DataUI.style";
import { BiUser } from "react-icons/bi";
import {
  HiOutlineMail,
  HiOutlineLockOpen,
  HiOutlineLockClosed,
} from "react-icons/hi";

function RegisterPainel() {
  return (
    <UserWrapper>
      <UserTittle>
        <h2>Registrar-se</h2>
      </UserTittle>
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
              <SubmitButton>Registrar</SubmitButton>
            </Li>
          </Ul>
        </form>
      </FieldsWrapper>
    </UserWrapper>
  );
}

export default RegisterPainel;
