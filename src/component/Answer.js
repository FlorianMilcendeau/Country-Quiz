import React from 'react';
import PropTypes from 'prop-types';

import './Answer.css';

const Answer = ({ onClick, index, answer }) => (
  <div onClick={onClick} className='content-response'>
    <div className='index-answer'>{index}</div>
    <p className='answer'>{answer}</p>
  </div>
);

export default Answer;

Answer.propTypes = {
  onClick: PropTypes.func,
  index: PropTypes.string,
  answer: PropTypes.string,
};
