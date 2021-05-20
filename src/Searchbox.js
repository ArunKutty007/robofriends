import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="search robots"
        onChange={(e) => searchChange(e)}
      ></input>
    </div>
  );
};

export default Searchbox;
