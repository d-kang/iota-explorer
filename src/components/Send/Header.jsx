import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to='/'>Leaderboard</Link>
        <Link to='/send'>Send</Link>
        <p className="header__title">My <span><img className="header__logo" src={logo} /></span> Leaderboard</p>
        <nav>
          <div className="nav-right hidden-xs">
            <div
              className={this.props.myClass().button}
              id="btn"
              onClick={this.props.toggleSidebar}
              >
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
