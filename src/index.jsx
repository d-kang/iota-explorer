import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style.scss';
import logo from '../assets/images/logo.png';



class Header extends React.Component {
  state = {
    isActive: false,
  }
  myClassName = () => {
    return this.state.isActive ? 'button active' : 'button';
  }
  toggleSidebar = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <header className="header">
        <p className="header__title">My <span><img className="header__logo" src={logo} /></span> Leaderboard</p>
        <nav>
          <div className="nav-right hidden-xs">
            <div
              className={this.myClassName()}
              id="btn"
              onClick={this.toggleSidebar}
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

const Table = () => {
  return (
    <section className="leaderboard">
      <table className="table-fill">
        <thead>
          <tr>
            <th className="rank__title">Rank</th>
            <th className="address__title">Name</th>
            <th className="amount__title">Message</th>
            <th className="full__title">Value</th>
          </tr>
        </thead>
        <tbody id="leaderboard">
          <tr>
            <td className="iota__rank"></td>
            <td className="iota__name"></td>
            <td className="iota__message">Nothing here right now. Generate an address and tell someone (or you yourself) to send a transaction with a message to it.</td>
            <td className="iota__value"></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

const Sidebar = () => {
  return (
    <div className="sidebar donotdisplay">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="#" className="sidebar-anchor" data-toggle="collapse" data-target="#setSeed" aria-expanded="false" aria-controls="setSeed">My Seed</a>
          <div className="collapse" id="setSeed">
            <div className="well" id="enterSeed">
              <div className="form-group">
                <input type="password" id="userSeed" className="form-control" placeholder="Your Seed" />
              </div>
              <button type="button" id="seedSubmit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </li>

        <li className="sidebar-item">
            <a href="#" className="sidebar-anchor" data-toggle="collapse" data-target="#getAddresses" aria-expanded="false" aria-controls="getAddresses">My Addresses</a>
            <div className="collapse" id="getAddresses">
              <div className="genAddress__div">
                <div id="overlay">
                  <div className="panel panel-danger">
                    <div className="panel-heading">Generating Address</div>
                    <div className="panel-body">
                      <p>Currently generating your address. This can take anywhere between 1 - 20minutes so be patient. Once your address was generated this note will disappear.</p>
                    </div>
                  </div>
                </div>
                <button type="button" id="genAddress" className="btn btn-success">Generate Address</button>
                <div id="allAddresses">
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
  )
}


const MyPage = () => {
  return (
    <div>
      <main>
        <Header />
        <Table />
      </main>
      {/* <Sidebar /> */}
    </div>
  )
}

ReactDOM.render(<MyPage />, document.getElementById('root'));
