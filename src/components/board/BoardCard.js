import React, { useContext } from "react";

import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { GameContext } from "../../context/GameContext";

const BoardCard = ({ active, user = "nouser", index }) => {
  const { handleSquareClick } = useContext(GameContext);
  
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${active ? "active" : "shadow-gray"}`}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;
