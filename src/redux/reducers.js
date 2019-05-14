import { combineReducers } from "redux";

import calculateWinner from "../calculateWinner";
import calculateRound from "../calculateRound";

function claimSquare(state, action) {
  const { index } = action;
  const { history, xIsNext, stepNumber } = state;
  const newHistory = history.slice(0, stepNumber + 1);
  const squares = newHistory[newHistory.length - 1].squares.slice();

  // return if the game is over or if the space is taken
  if (calculateWinner(squares) || squares[index]) {
    return state;
  }
  squares[index] = xIsNext ? "X" : "O";

  return {
    ...state,
    ...calculateRound(squares, stepNumber + 1),
    history: newHistory.concat([
      {
        squares,
        location: `(${(index % 3) + 1},${Math.floor(index / 3) + 1})`
      }
    ])
  };
}

function jumpTo(state, action) {
  const { step } = action;
  const { squares } = state.history[step];

  return {
    ...state,
    ...calculateRound(squares, step)
  };
}

function displayMovesDescending(state = false, action) {
  switch (action.type) {
    case "TOGGLE_DISPLAY_MOVES":
      return !state;
    default:
      return state;
  }
}

function game(
  state = {
    history: [{ squares: Array(9).fill(null), location: null }],
    xIsNext: true,
    stepNumber: 0,
    status: "Next player: X",
    winningLine: null
  },
  action
) {
  switch (action.type) {
    case "CLAIM_SQUARE":
      return claimSquare(state, action);
    case "JUMP_TO":
      return jumpTo(state, action);
    default:
      return state;
  }
}

const gameReducers = combineReducers({
  displayMovesDescending,
  game
});

export default gameReducers;
