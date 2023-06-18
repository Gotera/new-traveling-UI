/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';

function Seacher(histories) {
  const [search, setSearch] = useState('');
  const filteredHistories = histories.filter((history) =>
    history.startsWith(search)
  );
  return (
    <>
      <div className="Seacher__Wrapper">
        <input
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}

export default Seacher;
