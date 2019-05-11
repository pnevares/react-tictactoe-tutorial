import React from "react";
import Square from "../containers/SquareContainer";

export default function Board() {
  function renderGrid() {
    return [0, 1, 2].map((row, index) => {
      return (
        <div key={index} className="board-row">
          {renderRow(row)}
        </div>
      );
    });
  }

  function renderRow(row) {
    return [0, 1, 2].map(column => {
      return renderSquare(row * 3 + column);
    });
  }

  function renderSquare(i) {
    return <Square key={i} index={i} />;
  }

  return <div>{renderGrid()}</div>;
}
