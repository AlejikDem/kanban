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

const Timer = () => {
  return (
    <div>
      <div className={numbers}>
        <div>25</div>
        <div>:</div>
        <div>00</div>
      </div>
      <div className={buttons}>
        <button>Play</button>
        {/* <button>Pause</button>
        <button>Stop</button> */}
      </div>
    </div>
  );
};

export default Timer;