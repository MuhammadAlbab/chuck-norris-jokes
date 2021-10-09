import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import Loading from "./components/Loading";
import reportWebVitals from "./reportWebVitals";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
