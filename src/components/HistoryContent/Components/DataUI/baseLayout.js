import React from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { BsTrashFill } from 'react-icons/bs';
import { format } from 'date-fns';
import { useUserContext } from '../../../../common/contexts/User';
import {
  HistoryCellWrapper,
  DataUiWrapper,
  ContentTittle,
  ContentData,
  Button,
} from './DataUI.style';

function BaseLayout({ travel }) {
  const { deleteData, updateData } = useUserContext();
  return (
    <HistoryCellWrapper>
      <DataUiWrapper>
        <ContentTittle>
          {travel.nome_destino}
          <div>
            <Button type="button" onClick={() => updateData(travel._id)}>
              <RiPencilFill /> Editar
            </Button>
            <Button type="button" onClick={() => deleteData(travel._id)}>
              <BsTrashFill /> Deletar
            </Button>
          </div>
        </ContentTittle>
        <ContentData>
          Nota Fiscal: {travel.nota_fiscal}
          <ul>
            <li>
              Data de Saida: {format(new Date(travel.data_ida), 'dd/MM/yyyy')}
            </li>
            {travel.data_volta && <li>
              Data de Volta:
              {format(new Date(travel.data_volta), 'dd/MM/yyyy')}
            </li>}
          </ul>
          <ul>
            <li>Quilimetragem de Ida: {travel.quilometragem_ida} km</li>
            <li>Quilometragem de Volta: {travel.quilometragem_volta} km</li>
          </ul>
          <ul>
            <li>Valor do Diesel: {travel.valor_diesel}</li>
            <li>Lucro: {travel.lucro} R$</li>
          </ul>
        </ContentData>
      </DataUiWrapper>
    </HistoryCellWrapper>
  );
}

export default BaseLayout;
