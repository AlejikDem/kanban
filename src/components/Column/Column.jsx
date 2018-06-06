import React from 'react';
import { css } from 'emotion';

const column = css`
  flex-grow: 1;
`;

const getColumnColor = props => {
  const { active, hovered } = props;
  if (active && hovered) return 'white';
  if (active) return 'black';
  return '#d6eff7';
};

const Column = (props) => {
  return props.connectDropTarget(
    <div className={column} style={{ backgroundColor: getColumnColor(props) }}>
      <div>Title</div>
      <div>Column Inner</div>
      {props.active && <div>Can be dropped</div>}
      {props.hovered && <div>Hovered</div>}
    </div>
  );
};

export default Column;