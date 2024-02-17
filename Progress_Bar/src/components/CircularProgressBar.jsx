import {Circle } from 'rc-progress';
import { MAX, MIN } from '../constant';
import  { useEffect, useState } from 'react';

const CircularProgressBar = ({ value = 0, onComplete = () => {} }) => {
const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
     return onComplete();
    }
  }, [value]);
  
  return (
    <div className='roundProgressBar'>
        <Circle percent={percent.toFixed()} strokeWidth={5} strokeColor="#00c251" /> 	
        <span>
        {percent.toFixed()}%
      </span>
    </div>
  )
}

export default CircularProgressBar;