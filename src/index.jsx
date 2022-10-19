import React, { startTransition } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faDeleteLeft, faRotateLeft} from '@fortawesome/free-solid-svg-icons';

const Weather =  () => {
  const [mode, setMode] = useState(true);
  const [count, setCount] = useState(0);
return (
  <div className={`main ${(mode)?"light":"dark"}`}>
    <div className="change-mode">
      <div className="mode" onClick={()=>(setMode(!mode))}>
        {
        (mode)?
        <FontAwesomeIcon title='dark'icon={faMoon} />
        :
        <FontAwesomeIcon title='bright' icon={faSun} />
        }
        </div>
    </div>
    <div className="counter">
        <span className="counter-head">Counter</span>
        <div className="count-box">
          <span className="count">{count}</span>
          <button className="count-btn" onClick={()=>{setCount(count+1)}}>Count</button>
          <div className="more-btns">
            <button className="del-btn" onClick={()=>{(count===0)?setCount(count):setCount(count-1)}}><FontAwesomeIcon title='delete' icon={faDeleteLeft} /></button>
            <button className="reset-btn" onClick={()=>{setCount(0)}}><FontAwesomeIcon title='reset' icon={faRotateLeft} /></button>
          </div>
        </div>
    </div>

  </div>
        )
};


ReactDOM.render(<Weather/>,document.querySelector("#root"));