import { compose, pure } from 'recompose';

import Timer from './Timer';

const enhance = compose(
  pure
);

export default enhance(Timer);