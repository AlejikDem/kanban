import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { compose, toClass } from 'recompose';

import Field from './Field';

const mapState = ({ columns }) => ({
  columns
});

const enhance = compose(
  connect(mapState),
  DragDropContext(HTML5Backend),
  toClass
);

export default enhance(Field);