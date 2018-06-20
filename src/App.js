import React from 'react';
import { css } from 'emotion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './helpers/icons';
import routes from './helpers/routes';

const wrapper = css`
  position: relative;
  height: 100%;
`;

const App = () => {
  return (
    <div className={wrapper}>
      <Router>
        <Switch>
          {routes.map(item => (
            <Route key={item.title} {...item} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;