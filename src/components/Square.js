import React from "react";

export function Square({ value, onClick, winner }) {
  return (
    <button className={`square ${winner ? "winner" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}
