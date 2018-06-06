import { DropTarget } from 'react-dnd';
import { compose, toClass } from 'recompose';

import { TASK } from '../../helpers/dragItems';

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

const enhance = compose(
  DropTarget(TASK, target, collect),
  toClass
);

export default enhance(Column);