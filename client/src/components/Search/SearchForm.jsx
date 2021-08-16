import { useState, useMemo } from "react";
import searchFilter from "../Search/searchFilter";
import "./searchStyles.css";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("name");
  const data = props.data;

  const searchFilterMemo = useMemo(
    () => searchFilter(data, searchText, searchField),
    [data, searchText, searchField]
  );

  return (
    <>
      <div className="SearchForm Card">
        <label htmlFor="searchInput">
          <strong>Search for</strong>
        </label>
        <input
          id="searchInput"
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <label htmlFor="fieldSelect">
          <strong>In Attribute</strong>
        </label>
        <select
          id="fieldSelect"
          value={searchField}
          onChange={(event) => {
            setSearchField(event.target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="species">Species</option>
        </select>
      </div>
      {props.children(searchFilterMemo)}
    </>
  );
};

export default SearchForm;
