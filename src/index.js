import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./css/style.css";
import "./css/1.style.css";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
