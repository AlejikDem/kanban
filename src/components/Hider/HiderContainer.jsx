import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import Hider from './Hider';

const mapState = ({ hider }) => ({
  showHider: hider.showHider
});

const enhance = compose(
  connect(mapState),
  pure
);

export default enhance(Hider);