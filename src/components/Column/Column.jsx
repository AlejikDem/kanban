import React from 'react';
import { css } from 'emotion';
import { DropTarget } from 'react-dnd';
import { compose, toClass } from 'recompose';

import { TASK } from '../../helpers/dragItems';

const column = css`
  width: 23%;
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

const drop = props => {
  console.log('target', props);
    return ({
      bob: 1
    });
};

const target = {
  drop
};

const collect = (connect,  monitor) => {
  return ({
    connectDropTarget: connect.dropTarget(),
    active: monitor.canDrop(),
    hovered: monitor.isOver({ shallow: true }),
  });
};

const enhance = compose(toClass);
const enhancedColumn = enhance(Column);

export default DropTarget(TASK, target, collect)(enhancedColumn);