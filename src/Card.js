import React from "react";

const Card = ({ name, email, id }) => {
  // const { name, email } = props;

  return (
    <div className="flex">
      <div className="card">
        <img src={`https://robohash.org/${id}?200*200`} alt="robo"></img>
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
