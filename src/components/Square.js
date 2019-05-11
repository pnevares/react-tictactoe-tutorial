import React from "react";
import PropTypes from "prop-types";

export function Square({ value, onClick, winner }) {
  return (
    <button className={`square ${winner ? "winner" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  winner: PropTypes.bool
};
