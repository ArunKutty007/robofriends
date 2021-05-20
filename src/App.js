import React, { useState } from "react";
import CardList from "./CardList";

import "./index";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./index.css";
const App = () => {
  const [value, setValue] = useState({ robots: robots, searchfield: "" });

  const onSearchchange = (e) => {
    console.log(e);
    setValue({ ...value, searchfield: e });
    console.log("value", value.searchfield);

    console.log(value.searchfield);

    console.log(filteredrobots);
  };
  const filteredrobots = value.robots.filter((robots) => {
    return robots.name.toLowerCase().includes(value.searchfield.toLowerCase());
  });
  return (
    <div>
      <h1 className="text-center">Robo friends</h1>
      <Searchbox searchChange={(e) => onSearchchange(e.target.value)} />
      <CardList robots={filteredrobots} />
    </div>
  );
};

export default App;
