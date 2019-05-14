import calculateStatus from "./calculateStatus";
import calculateWinner from "./calculateWinner";

export default function calculateRound(squares, stepNumber) {
  const xIsNext = stepNumber % 2 === 0;
  const winner = calculateWinner(squares);
  const winningLine = winner ? winner.line : null;
  const status = calculateStatus(winner, stepNumber, xIsNext);

  return {
    xIsNext,
    status,
    stepNumber,
    winningLine
  };
}
