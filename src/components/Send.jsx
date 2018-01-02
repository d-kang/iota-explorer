import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

class Send extends Component {
  state = {
    isActive: false,
  }

  toggleSidebar = () => {
    console.log('toggleSidebar ran!')
    this.setState({ isActive: !this.state.isActive })
  }
  myClassObj = () => {
    return this.state.isActive ? style.isActive : style.isNotActive;
  }

  render() {
    return (
      <div>
        <main className={this.myClassObj().main}>


          <Header
            toggleSidebar={this.toggleSidebar}
            myClass={this.myClassObj}
          />

          <section className="send__section">
            <div className="send">
                <div className="send__header">
                    <p className="send__header-title">Send Message</p>
                </div>
                <div className="send__body">
                    <div className="row">

                        <div className="col-xs-12 send__body-title">
                            <p className="send__body-balance"><img className="send__logo" src="images/logo-black.png" /> Balance: <span className="label label-primary" id="iota__balance">0</span></p>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" maxlength="16" className="form-control" id="name" placeholder="Enter Name" />
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="value">Value</label>
                                <input type="number" className="form-control" id="value" placeholder="Value to Send" />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <div className = "form-group">
                                <label for="address">Recipient Address</label>
                                <input type="text" className="form-control" id="address" placeholder="IOTA address of recipient" />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <div className = "form-group">
                                <label for="message">Text Area</label>
                                <textarea id="message" className="form-control" rows="3" placeholder="Message to send"></textarea>
                            </div>
                        </div>

                        <div className="send__button">
                            <button className="btn btn-success btn-lg" id="submit">Submit</button>
                        </div>

                    </div>

                    {/* <!-- Message to be displayed once successfully sent --> */}
                    <div id="send__success"></div>
                    {/* <!-- --> */}

                    {/* <!-- Loading screen while doing PoW --> */}
                    <div id="send__waiting">
                        <div className="row">
                            <ul className="bokeh">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="send__waiting-title">
                            <p>Doing Proof of Work. Please be patient!</p>
                        </div>
                        <div className="alert alert-success" role="alert">
                            <p>While waiting, you can read more about the <a href="https://dev.iota.org" className="alert-link">IOTA API here.</a> Or you can read our Blog on <a href="https://medium.com/iotatangle" className="alert-link">Medium</a>. Always useful to know this stuff.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>


        </main>


      <Sidebar
        myClass={this.myClassObj}
      />

    </div>
    )
  }

}


const style = {
  isActive: {
    button: 'button active',
    main: 'move-to-left',
    sideBarItem: 'sidebar-item active',
    sideBar: 'sidebar',
  },
  isNotActive: {
    button: 'button',
    main: '',
    sideBarItem: 'sidebar-item',
    sideBar: 'sidebar donotdisplay'
  },
}

export default Send;
