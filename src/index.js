import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "./Modal";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Modal />, document.getElementById("root"));
registerServiceWorker();
