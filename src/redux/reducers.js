import { combineReducers } from "redux";

import calculateWinner from "../calculateWinner";
import calculateStatus from "../calculateStatus";

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
    status: "Next player: X"
  },
  action
) {
  switch (action.type) {
    case "CLAIM_SQUARE": {
      const { index } = action;
      const { history, xIsNext, stepNumber } = state;
      const newHistory = history.slice(0, stepNumber + 1);
      const current = newHistory[newHistory.length - 1];
      const newSquares = current.squares.slice();

      if (calculateWinner(newSquares) || newSquares[index]) {
        return state;
      }
      newSquares[action.index] = xIsNext ? "X" : "O";

      const winner = calculateWinner(newSquares);
      const status = calculateStatus(winner, stepNumber + 1, !xIsNext);

      return {
        ...state,
        history: newHistory.concat([
          {
            squares: newSquares,
            location: `(${(index % 3) + 1},${Math.floor(index / 3) + 1})`
          }
        ]),
        xIsNext: !xIsNext,
        stepNumber: newHistory.length,
        status
      };
    }
    case "JUMP_TO_MOVE": {
      const { step } = action;
      const { history } = state;
      const xIsNext = step % 2 === 0;
      const winner = calculateWinner(history[step].squares);

      return {
        ...state,
        xIsNext,
        stepNumber: step,
        status: calculateStatus(winner, step, xIsNext)
      };
    }
    default:
      return state;
  }
}

const gameReducers = combineReducers({
  displayMovesDescending,
  game
});

export default gameReducers;
