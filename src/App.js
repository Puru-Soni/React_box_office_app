import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs'
import { Home } from './pages/Home';
import { Starred } from './pages/Starred';

const App = ()=>{
  return (
    <div>
      <Navs />

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
    </div> 
  );
}

export default App;