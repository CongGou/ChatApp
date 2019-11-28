import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jion.css";

const Jion = props => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="jionOuterContainer">
      <div className="jionInnerContainer">
        <h1 className="heading">
          Jion
          <div>
            <input
              placeholder="Name"
              className="jionInput mt-20"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="jionInput mt-20"
              type="text"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button" type="submit">
              Sign In
            </button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Jion;
