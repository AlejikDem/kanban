import React from 'react';
import { css } from 'emotion';

import TaskCardContainer from '../TaskCard/TaskCardContainer';

const column = css`
  flex-grow: 1;
  background-color: #d6eff7;
  padding: 10px;
`;

const highlighting = {
  boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)'
};

const placeholder = css`
  background-color: #888;
  height: 22px;
  margin-bottom: 10px;
`;

const Column = props => {
  return props.connectDropTarget(
    <div className={column} style={props.active ? highlighting : {}}>
      {(props.active && props.hovered) && <div className={placeholder}></div>}
      {props.tasks.map(task => (
        <TaskCardContainer key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;