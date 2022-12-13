import React from "react";

import "./cards.css";
import { AiFillHeart } from "react-icons/ai";

function Cards(props) {
  return (
    <div className="card">
      <h4>{props.question}</h4>
      <h4>{props.answer}</h4>
      <p>View entire Discussion</p>
      <div className="categorie_container">
        {props.categories
          ? props.categories.map((cat) => (
              <button className={`cat`}>{cat}</button>
            ))
          : ""}
      </div>
      <div className="bottom">
        <div className="user">
          <img className="pic" src={props.profile} />
          <h5>{props.author}</h5>
        </div>
        <div className="likes">
          <AiFillHeart />
          <h6>{props.like}</h6>
        </div>
      </div>
    </div>
  );
}

export default Cards;
