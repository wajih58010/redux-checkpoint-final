import React from "react";
import { connect } from "react-redux";
import { addItems } from "../actions";
import FilterTasks from "./FilterTasks";
import { useState } from "react";

const App = ({ qty, dispatch }) => {
  let input, item;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    item = {
      text: input.value,
    };
    dispatch(addItems(item));
    input.value = "";
  };

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className={"wrapper"}>
      <FilterTasks inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <br></br>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <div className={"div-wrapper"}>
          <label>Task: </label>
          <input type="text" name="name" ref={(node) => (input = node)} />
        </div>
        <div className={"div-wrapper"}>
          <label>&nbsp;</label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default connect()(App);
