import React from 'react';
import { css } from 'emotion';

const column = css`
  width: 23%;
  background-color: #d6eff7;
`;

const Column = () => {
  return (
    <div className={column}>
      <div>Title</div>
      <div>Column Inner</div>
    </div>
  );
};

export default Column;