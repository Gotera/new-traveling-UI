import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { BsTrashFill } from "react-icons/bs";
import { format } from "date-fns";
import { useUserContext } from "../../../../common/contexts/User";
import {
  HistoryCellWrapper,
  DataUiWrapper,
  ContentTittle,
  ContentData,
  Button,
  Ul,
  Li,
  DataWrapper,
  ButtonsWrapper,
} from "./DataUI.style";

function BaseLayout({ travel }) {
  const { deleteData, updateData } = useUserContext();
  return (
    <HistoryCellWrapper>
      <DataUiWrapper>
        <ContentTittle>
          {travel.nome_destino}
          <ButtonsWrapper>
            <Button type="button" onClick={() => updateData(travel._id)}>
              <RiPencilFill /> Editar
            </Button>
            <Button type="button" onClick={() => deleteData(travel._id)}>
              <BsTrashFill /> Deletar
            </Button>
          </ButtonsWrapper>
        </ContentTittle>
        <ContentData>
          Nota Fiscal: {travel.nota_fiscal}
          <Ul>
            <Li>
              <DataWrapper>
                Data de Saida: {format(new Date(travel.data_ida), "dd/MM/yyyy")}
              </DataWrapper>
              {travel.data_volta && (
                <DataWrapper>
                  Data de Volta:{" "}
                  {format(new Date(travel.data_volta), "dd/MM/yyyy")}
                </DataWrapper>
              )}
            </Li>
            <Li>Quilimetragem de Ida: {travel.quilometragem_ida} km</Li>
            <Li>Quilometragem de Volta: {travel.quilometragem_volta} km</Li>
            <Li>Valor do Diesel: {travel.valor_diesel}</Li>
            <Li>Lucro: {travel.lucro} R$</Li>
          </Ul>
        </ContentData>
      </DataUiWrapper>
    </HistoryCellWrapper>
  );
}

export default BaseLayout;
