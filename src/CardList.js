import React from "react";
import Card from "./Card";
import { robots } from "./robots";
const CardList = ({ robots }) => {
  const cardcomponent = robots.map((user, i) => {
    return (
      <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} />
    );
  });
  return <div className="flex">{cardcomponent}</div>;
};

export default CardList;
