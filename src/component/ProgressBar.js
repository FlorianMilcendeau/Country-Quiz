import React, { forwardRef } from 'react';
import './ProgressBar.css';

const ProgressBar = forwardRef((props, ref) => (
  <div className='wrapperProgress'>
    <div ref={ref} className='progressBar'></div>
  </div>
));

export default ProgressBar;
