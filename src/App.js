import React from 'react';

import Home from './components/Home';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Uslugi from './components/Uslugi';

import {HashRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App;

