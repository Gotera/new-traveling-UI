/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { createContext, useState, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();
UserContext.displayName = "DeleteFunction";

export default function UserProvider({ children }) {
  const [histories, setHistories] = useState([]);
  const [update, setUpdate] = useState(-1);
  const [nome_destino, SetNomeDestino] = useState("");
  const [nota_fiscal, setNotaFiscal] = useState("");
  const [data_ida, setDataIda] = useState();
  const [data_volta, setDataVolta] = useState();
  const [quilometragem_ida, setQuilometragemIda] = useState("");
  const [quilometragem_volta, setQuilometragemVolta] = useState("");
  const [valor_diesel, setValorDiesel] = useState("");
  const [lucro, setLucro] = useState("");
  return (
    <UserContext.Provider
      value={{
        histories,
        setHistories,
        update,
        setUpdate,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const {
    histories,
    setHistories,
    update,
    setUpdate,
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

  function deleteData(dataToBeDeleted) {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/delete/${dataToBeDeleted}`)
      .then(() => {
        const listOfData = histories.filter(
          (data) => data._id !== dataToBeDeleted
        );
        setHistories([...listOfData]);
      })
      .then(location.reload());
  }

  function updateData(dataToBeUpdated) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/travels/${dataToBeUpdated}`)
      .then((res) => {
        SetNomeDestino(res.data.travelResult.nome_destino);
        setNotaFiscal(res.data.travelResult.nota_fiscal);
        setDataIda(res.data.travelResult.data_ida);
        setDataVolta(res.data.travelResult.data_volta);
        setQuilometragemIda(res.data.travelResult.quilometragem_ida);
        setQuilometragemVolta(res.data.travelResult.quilometragem_volta);
        setValorDiesel(res.data.travelResult.valor_diesel);
        setLucro(res.data.travelResult.lucro);
      });
    setUpdate(dataToBeUpdated);
  }

  function handleUpdate() {
    axios
      .put(`${process.env.REACT_APP_API_URL}/update/${update}`, {
        id: update,
        nome_destino,
        nota_fiscal,
        data_ida,
        data_volta,
        quilometragem_ida,
        quilometragem_volta,
        valor_diesel,
        lucro,
      })
      .then(() => {
        location.reload();
        setUpdate(-1);
      })
      .catch((err) => console.log(err));
  }
  return {
    deleteData,
    updateData,
    handleUpdate,
  };
}
