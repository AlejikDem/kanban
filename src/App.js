import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './helpers/icons';

import Header from './components/Header/Header';
import routes from './helpers/routes';


const App = () => {
  return (
    <div>
      <Header />
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