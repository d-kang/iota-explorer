import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style.scss';
import Leaderboard from './components/Leaderboard';
import Send from './components/Send';
import {
  HashRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const Main = () => {
  return (
    <HashRouter>
      <div>
        <Link to='/'>Leaderboard</Link>
        <Link to='/send'>Send</Link>
        <Switch>
          <Route exact path='/' component={Leaderboard} />
          <Route exact path="/send" component={Send} />
        </Switch>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));
