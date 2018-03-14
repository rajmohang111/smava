import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import AsyncValidationForm from "./AsyncValidationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Register account</h2>
      <AsyncValidationForm onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
