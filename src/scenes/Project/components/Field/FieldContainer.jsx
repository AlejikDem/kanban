import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { compose, toClass, pure } from 'recompose';

import Field from './Field';

const mapState = ({ columns }) => ({
  columns
});

const enhance = compose(
  connect(mapState),
  DragDropContext(HTML5Backend),
  toClass,
  pure
);

export default enhance(Field);