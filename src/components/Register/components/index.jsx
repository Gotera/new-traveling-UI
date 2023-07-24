import React from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
  InputContainer,
} from "components/Login/components/LoginBoard.style";
import { Li, Ul } from "components/TravelsHistory/components/DataUI/DataUI.style";
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
              <InputContainer>
                <BiUser className="React_Icon" />
                <LoginInput type="name" placeholder="Nome"></LoginInput>
              </InputContainer>
            </Li>
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
              <InputContainer>
                <HiOutlineLockOpen className="React_Icon" />
                <LoginInput type="password" placeholder="Confirme a Senha" />
              </InputContainer>
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
