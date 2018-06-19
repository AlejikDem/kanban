import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const timer = css`
  width: 160px;
  height: 160px;
  position: relative;
  padding: 8px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    border: 5px dashed green;
    border-radius: 50%;
  }
`;

const timerInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 102;
  background-color: yellow;
  border-radius: 50%;
  height: 100%;
`;

const numbers = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 48px;
  margin-bottom: 10px;
  color: green;
`;

const buttons = css`
  display: flex;
  justify-content: center;
`;

const icon = css`
  margin: 0 4px;
  color: red;
  cursor: pointer;
`;

const Timer = ({
  minutes,
  seconds,
  start,
  pause,
  stop,
  active,
  intervalId
}) => {
  return (
    <div className={timer}>
      <div className={timerInner}>
        <div className={numbers}>
          <div>{minutes}</div>
          <div>:</div>
          <div>{seconds < 10 ? '0' : ''}{seconds}</div>
        </div>
        <div className={buttons}>
          {active && intervalId
            ? <FontAwesomeIcon className={icon} size="2x" icon="pause" onClick={pause} />
            : <FontAwesomeIcon className={icon} size="2x" icon="play" onClick={start} />
          }
          {active && <FontAwesomeIcon className={icon}  size="2x" icon="stop" onClick={stop} />}
        </div>
      </div>
    </div>
  );
};

export default Timer;