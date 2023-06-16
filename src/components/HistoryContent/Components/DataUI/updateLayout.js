/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { useContext } from "react";
import { RiPencilFill } from "react-icons/ri";
import { format } from "date-fns";
import { UserContext, useUserContext } from "../../../../common/contexts/User";
import {
  HistoryCellWrapper,
  DataUiWrapper,
  ContentTittle,
  Button,
  ContentData,
  CustomDataInput,
  CustomNotaFiscalInput,
} from "./DataUI.style";

function UpdateLayout({ travel }) {
  const {
    nome_destino,
    SetNomeDestino,
    nota_fiscal,
    setNotaFiscal,
    data_ida,
    setDataIda,
    data_volta,
    setDataVolta,
    quilometragem_ida,
    setQuilometragemIda,
    quilometragem_volta,
    setQuilometragemVolta,
    valor_diesel,
    setValorDiesel,
    lucro,
    setLucro,
  } = useContext(UserContext);
  const { handleUpdate } = useUserContext();

  return (
    <HistoryCellWrapper key={travel._id}>
      <DataUiWrapper>
        <ContentTittle>
          <input
            type="text"
            defaultValue={travel.nome_destino}
            onChange={(e) => SetNomeDestino(e.target.value)}
          />
          <div>
            <Button type="button" onClick={handleUpdate}>
              <RiPencilFill /> Enviar
            </Button>
          </div>
        </ContentTittle>
        <ContentData>
          Nota Fiscal: N°
          <CustomNotaFiscalInput
            type="text"
            defaultValue={nota_fiscal}
            onChange={(e) => setNotaFiscal(e.target.value)}
          />
          <ul>
            <li>
              Data de Saida:
              <input
                type="date"
                placeholder="{data_ida}"
                onChange={(e) => setDataIda(e.target.value)}
              />
              <p>
                {data_ida && format(new Date(travel.data_ida), "dd/MM/yyyy")}
              </p>
            </li>
            <li>
              Data de Volta:
              <input
                type="date"
                placeholder={data_volta}
                onChange={(e) => setDataVolta(e.target.value)}
              />
              <p>
                {data_volta &&
                  data_volta &&
                  format(new Date(travel.data_volta), "dd/MM/yyyy")}
              </p>
            </li>
          </ul>
          <ul>
            <li>
              Quilimetragem de Ida:
              <br />
              <input
                type="text"
                defaultValue={quilometragem_ida}
                onChange={(e) => setQuilometragemIda(e.target.value)}
              />{" "}
              km
            </li>
            <li>
              Quilometragem de Volta:
              <br />
              <input
                type="text"
                defaultValue={quilometragem_volta}
                onChange={(e) => setQuilometragemVolta(e.target.value)}
              />{" "}
              km
            </li>
          </ul>
          <ul>
            <li>
              Valor do Diesel:
              <br />
              <CustomDataInput
                type="text"
                defaultValue={valor_diesel}
                onChange={(e) => setValorDiesel(e.target.value)}
              />{" "}
              p /L
            </li>
            <li>
              Lucro:
              <br />
              <CustomDataInput
                type="text"
                defaultValue={lucro}
                onChange={(e) => setLucro(e.target.value)}
              />
              R$
            </li>
          </ul>
        </ContentData>
      </DataUiWrapper>
    </HistoryCellWrapper>
  );
}

export default UpdateLayout;
