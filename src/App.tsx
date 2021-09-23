import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListPage from './pages/List/List';

const App: React.FunctionComponent = () => {
  return (
    <div className="main">
      <nav>
        <ul>
          <Link to="/home">Home</Link>
        </ul>
        <ul>
          <Link to="/list">List</Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/home" render={() => <Home />}></Route>
        <Route path="/list" render={() => <ListPage />}></Route>
      </Switch>
    </div>
  );
};



export default App;
