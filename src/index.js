import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  ERRORS_COUNTS: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNTS}
    />,
    document.querySelector(`#root`)
);
