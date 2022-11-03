import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LoggedInUserContextProvider from "./components/LoggedInUserContextProvider";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
        <LoggedInUserContextProvider>

    <React.StrictMode>
        <App />
    </React.StrictMode>
    </LoggedInUserContextProvider>

  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
