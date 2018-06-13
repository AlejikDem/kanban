import React from 'react';
import { css } from 'emotion';

import FieldContainer from './components/Field/FieldContainer';

const wrapper = css`
  padding: 0 15px;
  max-width: 1000px;
  margin: 0 auto;
`;

const top = css`
  display: flex;
  align-items: stretch;
`;

const topSlot = css`
  width: 50%;
  height: 200px;
`;

const Project = () => {
  return (
    <div className={wrapper}>
      <div className={top}>
        <div className={topSlot}></div>
        <div className={topSlot}></div>
      </div>
      <FieldContainer />
    </div>
  );
};

export default Project;