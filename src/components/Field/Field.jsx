import React from 'react';
import { css } from 'emotion';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { toClass } from 'recompose';

import Column from '../Column/Column';
import TaskCard from '../TaskCard/TaskCard';


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
      <TaskCard />
      <div className={Columns}>
        {columns.map(item => (
          <Column key={item} />
        ))}
      </div>
    </div>
  );
};

export default DragDropContext(HTML5Backend)(
  toClass(Field)
);