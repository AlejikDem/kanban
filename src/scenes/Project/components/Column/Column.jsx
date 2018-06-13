import React from 'react';
import { css } from 'emotion';

import TaskCardContainer from '../TaskCard/TaskCardContainer';

const getStyles = (isDragging, active, hovered) => {
  if (!isDragging) return normalStyles;
  if (active && hovered) return highlighting;
  if (!active) return disabled;

  return normalStyles;
};

const normalStyles = {
  backgroundColor: '#d6eff7'
};

const highlighting = {
  backgroundColor: '#d6eff7',
  boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)'
};

const disabled = {
  backgroundColor: '#ccc'
};

const column = css`
  flex-grow: 1;
  padding: 10px;
`;

const Column = props => {
  return props.connectDropTarget(
    <div className={column} style={getStyles(props.isDragging, props.active, props.hovered)}>
      {props.tasks.map(task => (
        <TaskCardContainer key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;