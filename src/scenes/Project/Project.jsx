import React from 'react';
import { cx, css } from 'emotion';

import HeaderContainer from '../../components/Header/HeaderContainer';
import HiderContainer from '../../components/Hider/HiderContainer';
import FieldContainer from './components/Field/FieldContainer';
import TimerContainer from './components/Timer/TimerContainer';
import ActiveTaskContainer from './components/ActiveTask/ActiveTaskContainer';

const wrapper = css`
  padding: 67px 15px 0;
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
  align-items: flex-start;
  justify-content: center;
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
      <HiderContainer />
      <HeaderContainer />
      <div className={top}>
        <div className={cx(topSlot, first)}>
          <ActiveTaskContainer />
        </div>
        <div className={cx(topSlot, second)}>
          <TimerContainer />
        </div>
      </div>
      <FieldContainer />
    </div>
  );
};

export default Project;