import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import gameReducers from "./redux/reducers";
import Game from "./containers/GameContainer";
import "./index.css";

const store = createStore(gameReducers);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
