import { DropTarget } from 'react-dnd';
import { compose, toClass, pure } from 'recompose';
import { connect } from 'react-redux';

import { TASK } from '../../../../helpers/dragItems';
import { makeGetTasksByStatus } from '../../../../helpers/selectors';

import Column from './Column';

const drop = ({ item }) => ({ columnId: item.id });
const canDrop = ({ item, activeMoves }) => activeMoves.some(move => move === item.id);

const target = {
  drop,
  canDrop
};

const collect = (connect,  monitor) => {
  return ({
    connectDropTarget: connect.dropTarget(),
    active: monitor.canDrop(),
    hovered: monitor.isOver({ shallow: true })
  });
};

const mapState = ({ tasks, dragging }, { item }) => {
  const getTasksByStatus = makeGetTasksByStatus();
  return {
    tasks: getTasksByStatus(tasks, item),
    activeMoves: dragging.activeMoves,
    isDragging: dragging.isDragging
  };
};

const enhance = compose(
  connect(mapState),
  DropTarget(TASK, target, collect),
  toClass,
  pure
);

export default enhance(Column);