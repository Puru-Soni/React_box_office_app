import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = ()=>{
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/error">
        <div>
          Not Found!
        </div>
      </Route>
    </Switch>
  );
}

export default App;