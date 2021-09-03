import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Form = (props) => {
  const { onSubmit, onChange, value, onClick } = props;
  return (
    <form id="form" className="d-flex" onSubmit={onSubmit}>
      <div>
        <button className="submit-btn" type="submit">
          <SearchIcon className="fa fa-search" />
        </button>
        <input
          className="searchbar"
          name="search"
          type="search"
          placeholder="search city..."
          aria-label="Search"
          onChange={onChange}
          required
          value={value}
          onClick={onClick}
        />
      </div>
    </form>
  );
};

export default Form;
