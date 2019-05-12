import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

export default function Game({
  history,
  stepNumber,
  displayMovesDescending,
  status,
  jumpTo,
  toggleDisplayMoves
}) {
  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move} ${step.location}`
      : "Go to game start";
    return (
      <li key={move}>
        <button
          className={stepNumber === move ? "selected" : ""}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol className={displayMovesDescending ? "descending" : ""}>{moves}</ol>
        <button onClick={() => toggleDisplayMoves()}>Reverse order</button>
      </div>
    </div>
  );
}

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
      location: PropTypes.string
    })
  ).isRequired,
  stepNumber: PropTypes.number.isRequired,
  displayMovesDescending: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  jumpTo: PropTypes.func.isRequired,
  toggleDisplayMoves: PropTypes.func.isRequired
};
