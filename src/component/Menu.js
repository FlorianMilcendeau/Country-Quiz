import React from "react";
import "../index.css";
import Answer from "./Answer";
import imgAdventure from "../assets/undraw_adventure_4hum 1.svg";
import PropTypes from "prop-types";

const Menu = ({ setChoice }) => (
  <div>
    <img className="decoration" src={imgAdventure} alt="decoration" />
    <h2>What knwoledge do you want to test ?</h2>
    <Answer onClick={() => setChoice("capital")} answer="Capitals" />
    <Answer onClick={() => setChoice("flag")} answer="Flags" />
  </div>
);

export default Menu;

Menu.propTypes = {
  setChoice: PropTypes.func,
};
