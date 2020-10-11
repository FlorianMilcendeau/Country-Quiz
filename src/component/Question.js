import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import imgAdventure from "../assets/undraw_adventure_4hum 1.svg";
import axios from "axios";
import PropTypes from "prop-types";

const Question = ({ results, play, choice }) => {
  const [laps, setLaps] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [next, setNext] = useState(false);
  const [response, setResponse] = useState({ capital: "", country: "" });

  useEffect(() => {
    let array = [];
    const number = Math.floor(Math.random() * 250);

    if (laps <= 10) {
      axios.get("https://restcountries.eu/rest/v2").then((res) => {
        setResponse({
          capital: res.data[number][choice],
          country: res.data[number].name,
        });

        array.push(randomCountry(number, res.data));

        for (let i = 0; i < 3; i++) {
          const random = Math.floor(Math.random() * 250);
          array.push(randomCountry(random, res.data));
        }

        setAnswers(mixArray(array));
        setLaps(1 + laps);
      });
    } else {
      play(false);
      setLaps(0);
    }
  }, [next]);

  //if the answer it not checked I verify if the answer is correct.
  const checkAnswer = (e) => {
    document.querySelector(".next-answer").style.visibility = "visible";

    let element = e.currentTarget,
      children = element.parentNode.children,
      checked = false;
    const value = element.lastElementChild.textContent;

    for (const child of children) {
      if (child.classList.contains("valid")) {
        checked = true;
      }
    }

    if (!checked) {
      if (value === response.country) {
        element.classList.add("valid");
        results(1);
      } else {
        element.classList.add("error");

        for (let child of children) {
          if (child.lastElementChild.textContent === response.country) {
            child.classList.add("valid");
          }
        }
      }
    }
  };

  const nextAnswer = () => {
    setNext(!next);
    document.querySelector(".next-answer").style.visibility = "hidden";

    let allAnswer = document.querySelectorAll(".content-response");

    for (const answer of allAnswer) {
      answer.classList.remove("error", "valid");
    }
  };

  return (
    <>
      <img className="decoration" src={imgAdventure} alt="decoration" />
      <h2 className="second-title">
        {/.svg/g.test(response.capital) ? (
          <img lazy="true" className="flag" src={response.capital} alt="flag country" />
        ) : (
          response.capital
        )}{" "}
        is the capital of
      </h2>
      <div className="content-answer">
        {answers.map((answer, index) => {
          return (
            <Answer
              onTouchStart={(e) => checkAnswer(e)}
              onClick={(e) => checkAnswer(e)}
              key={index}
              index={String.fromCharCode(65 + index)}
              answer={answer}
            />
          );
        })}
      </div>
      <button onClick={() => nextAnswer()} className="btn next-answer">
        next
      </button>
    </>
  );
};

export default Question;

const randomCountry = (random, object) => {
  return object[random].name;
};

const mixArray = (array) => {
  let index = 0,
    tmp;
  for (let i = 0, length = array.length; i < length; i++) {
    index = Math.floor(Math.random() * length);

    tmp = array[i];
    array[i] = array[index];
    array[index] = tmp;
  }

  return array;
};

Question.propType = {
  result: PropTypes.number,
  play: PropTypes.func,
  choice: PropTypes.string,
};
