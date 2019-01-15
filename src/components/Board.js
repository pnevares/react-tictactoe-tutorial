import React from "react";
import { Square } from "./Square";

export class Board extends React.Component {
  renderGrid() {
    return [0, 1, 2].map(row => {
      return <div className="board-row">{this.renderRow(row)}</div>;
    });
  }

  renderRow(row) {
    return [0, 1, 2].map(column => {
      return this.renderSquare(row * 3 + column);
    });
  }

  renderSquare(i) {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  render() {
    return <div>{this.renderGrid()}</div>;
  }
}
