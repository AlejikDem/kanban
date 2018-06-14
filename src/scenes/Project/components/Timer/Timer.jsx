import React from 'react';
import { css } from 'emotion';

const numbers = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 42px;
  margin-bottom: 10px;
`;

const buttons = css`
  display: flex;
  justify-content: center;
`;

const Timer = props => {
  return (
    <div>
      <div className={numbers}>
        <div>{props.minutes}</div>
        <div>:</div>
        <div>{props.seconds < 10 ? '0' : ''}{props.seconds}</div>
      </div>
      <div className={buttons}>
        {props.active && props.intervalId
          ? <button onClick={props.pause}>Pause</button>
          : <button onClick={props.start}>Play</button>
        }
        {props.active && <button onClick={props.stop}>Stop</button>}
      </div>
    </div>
  );
};

export default Timer;