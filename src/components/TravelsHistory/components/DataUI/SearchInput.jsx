/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useState } from "react";
import useDebounce from "common/useDebounce";
import { CustomSearchInput } from "components/TravelsHistory/components/DataUI/DataUI.style";

function SearchInput({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 1000);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <CustomSearchInput
      placeholder="Buscar"
      type="search"
      value={displayValue}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
