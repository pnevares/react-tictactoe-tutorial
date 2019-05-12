import { connect } from "react-redux";
import { claimSquare } from "../redux/actions";
import Square from "../components/Square";

const mapStateToProps = (state, ownProps) => {
  const { history, stepNumber, winningLine } = state.game;
  const { index } = ownProps;
  const current = history[stepNumber];

  return {
    value: current.squares[index],
    winner: winningLine !== null && winningLine.includes(index)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(claimSquare(ownProps.index))
  };
};

const SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);

export default SquareContainer;
