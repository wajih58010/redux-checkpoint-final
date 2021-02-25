import React from "react";
import { Form } from "react-bootstrap";

const FilterTasks = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
      <h2>Search Task:</h2>
      <Form.Control
        type="text"
        placeholder="Enter Task name ..."
        className="inputFilter"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
      />
    </div>
  );
};

export default FilterTasks;
