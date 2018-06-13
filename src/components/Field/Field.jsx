import React from 'react';
import { css } from 'emotion';

import ColumnContainer from '../Column/ColumnContainer';

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

const columnWrapper = css`
  display: flex;
  flex-direction: column;
  width: 23%;
`;

const columnTitle = css`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const Field = ({ columns }) => {
  return (
    <div className={Wrapper}>
      <div>Field</div>
      <div className={Columns}>
        {columns.map(item => (
          <div className={columnWrapper} key={item.id}>
            <div className={columnTitle}>{item.title}</div>
            <ColumnContainer key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Field;