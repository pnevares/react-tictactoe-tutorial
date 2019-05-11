import React from "react";
import { Board } from "./Board";
import calculateWinner from "../calculateWinner";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), location: null }],
      xIsNext: true,
      stepNumber: 0,
      displayMovesDescending: false
    };
  }

  handleClick(i) {
    const { history, xIsNext, stepNumber } = this.state;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const newSquares = current.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    this.setState({
      history: newHistory.concat([
        {
          squares: newSquares,
          location: `(${(i % 3) + 1},${Math.floor(i / 3) + 1})`
        }
      ]),
      xIsNext: !xIsNext,
      stepNumber: newHistory.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  toggleDisplayMoves() {
    const { displayMovesDescending } = this.state;
    this.setState({
      displayMovesDescending: !displayMovesDescending
    });
  }

  render() {
    const { history, xIsNext, stepNumber, displayMovesDescending } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} ${step.location}`
        : "Go to game start";
      return (
        <li key={move}>
          <button
            className={stepNumber === move ? "selected" : ""}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner.symbol}`;
    } else if (stepNumber === 9) {
      status = "Result is a draw!";
    } else {
      status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winningLine={winner ? winner.line : null}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol className={displayMovesDescending ? "descending" : ""}>
            {moves}
          </ol>
          <button onClick={() => this.toggleDisplayMoves()}>
            Reverse order
          </button>
        </div>
      </div>
    );
  }
}
