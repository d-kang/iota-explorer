import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style.scss';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Send from './components/Send/Send';
import {
  HashRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const Main = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Leaderboard} />
        <Route exact path="/send" component={Send} />
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));
