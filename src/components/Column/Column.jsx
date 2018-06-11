import React from 'react';
import { css } from 'emotion';

import TaskCardContainer from '../TaskCard/TaskCardContainer';

const column = css`
  flex-grow: 1;
  background-color: #d6eff7;
  padding: 10px;
`;

const Column = props => {
  return props.connectDropTarget(
    <div className={column}>
      {props.tasks.map(task => (
        <TaskCardContainer key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;