import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './helpers/routes';

const App = () => {
  return (
    <div>
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