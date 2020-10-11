import React, { useState, lazy, Suspense } from "react";
import "./Card.css";

const Menu = lazy(() => import("./Menu"));
const Question = lazy(() => import("./Question"));
const Result = lazy(() => import("./Result"));

const Card = () => {
  const [choice, setChoice] = useState(null);
  const [play, setPlay] = useState(true);
  const [results, setResults] = useState(0);

  const tryAgain = () => {
    setPlay(!play);
    setResults(0);
  };

  const returnMenu = () => {
    setPlay(!play);
    setChoice(null);
    setResults(0);
  };

  return (
    <div className="card">
      <Suspense
        fallback={
          <div className="ballWaiting">
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </div>
        }
      >
        {!choice && <Menu setChoice={(str) => setChoice(str)} />}
        {choice && play && (
          <Question
            choice={choice}
            play={(bool) => setPlay(bool)}
            results={(n) => setResults(n + results)}
          />
        )}
        {!play && (
          <Result results={results} returnMenu={() => returnMenu()} tryAgain={() => tryAgain()} />
        )}
      </Suspense>
    </div>
  );
};

export default Card;
