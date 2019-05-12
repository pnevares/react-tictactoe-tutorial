import { connect } from "react-redux";
import { toggleDisplayMoves, jumpTo } from "../redux/actions";
import Game from "../components/Game";

const mapStateToProps = state => {
  const { displayMovesDescending } = state;
  const { history, stepNumber, status } = state.game;

  return {
    history,
    stepNumber,
    displayMovesDescending,
    status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    jumpTo: step => dispatch(jumpTo(step)),
    toggleDisplayMoves: () => dispatch(toggleDisplayMoves())
  };
};

const SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default SquareContainer;
