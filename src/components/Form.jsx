import React from "react";

const Form = (props) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        name="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
