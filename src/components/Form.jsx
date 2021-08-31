import React from "react";

const Form = (props) => {
  const { onSubmit, onChange , value} = props;
  return (
    <form id="form" className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        name="search"
        type="search"
        placeholder="search  city"
        aria-label="Search"
        onChange={onChange}
        required
        value={value}
      />
      <button className="btn btn-light" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
