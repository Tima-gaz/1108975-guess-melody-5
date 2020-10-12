import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";

const Settings = {
  ERRORS_COUNTS: 4
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNTS}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
