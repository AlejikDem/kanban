import React from 'react';
import Column from '../Column/Column';

import { css } from 'emotion';

const columns = [0, 1, 2, 3];

const Wrapper = css`
  padding: 0 15px;
  max-width: 1000px;
`;

const Columns = css`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 300px;
`;

const Field = () => {
  return (
    <div className={Wrapper}>
      <div>Field</div>
      <div className={Columns}>
        {columns.map(item => (
          <Column key={item} />
        ))}
      </div>
    </div>
  );
};

export default Field;