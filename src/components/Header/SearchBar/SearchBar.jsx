import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../features/search-bar/searchSlice";
import "./SearchBar.scss";


const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie here..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
