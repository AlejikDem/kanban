import { DropTarget } from 'react-dnd';
import { compose, toClass, pure } from 'recompose';
import { connect } from 'react-redux';

import { TASK } from '../../helpers/dragItems';
import { makeGetTasksByStatus } from '../../helpers/selectors';

import Column from './Column';

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

const mapState = (state, props) => {
  const getTasksByStatus = makeGetTasksByStatus();
  return {
    tasks: getTasksByStatus(state, props)
  };
};

const enhance = compose(
  connect(mapState),
  DropTarget(TASK, target, collect),
  toClass,
  pure
);

export default enhance(Column);