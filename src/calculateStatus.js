export default function calculateStatus(winner, stepNumber, xIsNext) {
  if (winner) {
    return `Winner: ${winner.symbol}`;
  } else if (stepNumber === 9) {
    return "Result is a draw!";
  } else {
    return `Next player: ${xIsNext ? "X" : "O"}`;
  }
}
