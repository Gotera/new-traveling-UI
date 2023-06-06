/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../common/contexts/User';
import BaseLayout from './baseLayout';
import UpdateLayout from './updateLayout';
import Pagination from './Pagination';
import SearchInput from './SearchInput';
import { ContentTittle, ContentData, DataUiComponnet } from './DataUI.style';

function DataUI() {
  const itemsPerPage = 10;
  const { histories, setHistories, update } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState();
  const [items, setItems] = useState([]);
  const [qtPags, setQtPags] = useState(0);
  const [text, setText] = useState('');
  const api = 'http://localhost:3338/api/travels/';

  const axiosItems = async (page, place) => {
    const response = await axios.get(`${api}search?page=${page}&place=${text}`);
    setItems(response.data.result);
    setQtPags(response.data.count);
  };

  useEffect(() => {
    axiosItems(currentPage);
  }, [currentPage, text]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DataUiComponnet>
      {items.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={qtPags}
          onPageChange={onPageChange}
        />
      )}
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !currentItems && <span>Carregando...</span>}
      {items?.map((travel) => {
        return travel._id === update ? (
          <UpdateLayout travel={travel} key={travel._id} />
        ) : (
          <BaseLayout travel={travel} key={travel._id} />
        );
      })}
    </DataUiComponnet>
  );
}

export default DataUI;
