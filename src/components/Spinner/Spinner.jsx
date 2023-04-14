import React from "react";
import "./Spinner.scss";

const Spinner = ({ initial }) => {
  return (
    <div className={`app__loadingSpinner ${initial ? "initial" : ""}`}>
      <svg className="app__spinner" viewBox="0 0 50 50">
        <circle
          className="app__spinner_path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Spinner;
