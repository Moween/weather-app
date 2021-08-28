import React from "react";

const Form = (props) => {
  const { onSubmit, onChange , value} = props;
  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        name="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
        value={value}
        required
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
