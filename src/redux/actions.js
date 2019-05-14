export function claimSquare(index) {
  return { type: "CLAIM_SQUARE", index };
}

export function toggleDisplayMoves() {
  return { type: "TOGGLE_DISPLAY_MOVES" };
}

export function jumpTo(step) {
  return { type: "JUMP_TO", step };
}
