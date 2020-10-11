import React from "react";
import PropTypes from "prop-types";
import imgWinner from "../assets/undraw_winners_ao2o 2.svg";

const Result = ({ results, tryAgain, returnMenu }) => (
  <div className="content-result">
    <img src={imgWinner} alt="winner" />
    <h2>Result</h2>
    <p>
      You got <span className="result">{results}</span>/10 correct answer
    </p>
    <div>
      <button onClick={() => returnMenu()} className="btn secondary">
        Menu
      </button>
      <button onClick={() => tryAgain()} className="btn secondary">
        Try again
      </button>
    </div>
  </div>
);

export default Result;

Result.propTypes = {
  results: PropTypes.number,
  tryAgain: PropTypes.func,
  returnMenu: PropTypes.func,
};
