import React from "react";
import PropTypes from "prop-types";

import { Square } from "./Square";

export class Board extends React.Component {
  renderGrid() {
    return [0, 1, 2].map((row, index) => {
      return (
        <div key={index} className="board-row">
          {this.renderRow(row)}
        </div>
      );
    });
  }

  renderRow(row) {
    return [0, 1, 2].map(column => {
      return this.renderSquare(row * 3 + column);
    });
  }

  renderSquare(i) {
    const { squares, onClick, winningLine } = this.props;
    return (
      <Square
        key={i}
        winner={winningLine && winningLine.includes(i)}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  render() {
    return <div>{this.renderGrid()}</div>;
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  winningLine: PropTypes.arrayOf(PropTypes.number)
};
