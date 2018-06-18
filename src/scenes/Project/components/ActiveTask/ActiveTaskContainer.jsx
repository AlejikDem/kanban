import { compose, pure } from 'recompose';

import ActiveTask from './ActiveTask';

const enhance = compose(pure);

export default enhance(ActiveTask);