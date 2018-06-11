import React from 'react';
import { css } from 'emotion';

import TaskCard from '../TaskCard/TaskCard';

const column = css`
  flex-grow: 1;
`;

const getColumnColor = props => {
  const { active, hovered } = props;
  if (active && hovered) return 'white';
  if (active) return 'black';
  return '#d6eff7';
};

const Column = props => {
  return props.connectDropTarget(
    <div className={column} style={{ backgroundColor: getColumnColor(props) }}>
      {/* {props.item.tasks.map(task => {
        return (
          <TaskCard task={task} />
        );
      })} */}
      {props.active && <div>Can be dropped</div>}
      {props.hovered && <div>Hovered</div>}
    </div>
  );
};

export default Column;