import React from 'react';
import { cx, css } from 'emotion';

import FieldContainer from './components/Field/FieldContainer';
import TimerContainer from './components/Timer/TimerContainer';

const wrapper = css`
  padding: 0 15px;
  max-width: 1000px;
  margin: 0 auto;
`;

const top = css`
  display: flex;
  align-items: stretch;
  margin-bottom: 15px;
`;

const topSlot = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const first = css`
  width: 65%;
`;
const second = css`
  width: 35%;
`;

const Project = () => {
  return (
    <div className={wrapper}>
      <div className={top}>
        <div className={cx(topSlot, first)}></div>
        <div className={cx(topSlot, second)}>
          <TimerContainer />
        </div>
      </div>
      <FieldContainer />
    </div>
  );
};

export default Project;