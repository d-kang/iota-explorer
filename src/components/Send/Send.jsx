import React, { Component } from 'react';
import Heading from './Header';
import Sidebar from './Sidebar';

import logoBlack from '../../../assets/images/logo-black.png';
import {
  Grid,
  Row,
  Col,
  Label,
  Title,
  Form,
  Button,
} from 'react-bootstrap';
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
          <Heading
            toggleSidebar={this.toggleSidebar}
            myClass={this.myClassObj}
          />

          <Grid className="send__section">
            <div className="send">
              <h1 className="send__header">
                  <p className="send__header-title">Send Message</p>
              </h1>
                <Row className="show-grid">
                  <Col xs={12}>
                    <p className="send__body-balance">
                      <img className="send__logo" src={logoBlack}/> <strong style={{fontSize: '25px'}}>Balance:</strong>
                      <Label bsStyle="primary" id="iota__balance">0</Label>
                    </p>
                  </Col>
                  <Col xs={6}>
                    <Form>
                      <label htmlFor="name">Your Name</label>
                      <input type="text" maxLength="16" className="form-control" id="name" placeholder="Enter Name" />
                    </Form>
                  </Col>
                  <Col xs={6}>
                    <Form>
                      <label htmlFor="value">Value</label>
                      <input type="number" className="form-control" id="value" placeholder="Value to Send" />
                    </Form>
                  </Col>
                  <Col xs={12}>
                    <Form>
                      <label htmlFor="address">Recipient Address</label>
                      <input type="text" className="form-control" id="address" placeholder="IOTA address of recipient" />
                    </Form>
                  </Col>
                  <Col xs={12}>
                    <Form>
                      <label htmlFor="message">Text Area</label>
                      <textarea id="message" className="form-control" rows="3" placeholder="Message to send"></textarea>
                    </Form>
                  </Col>
                  <div className="send__button">
                    <Button id="submit" bsStyle="success" bsSize="large">Submit</Button>
                  </div>


                  {/* <!-- Message to be displayed once successfully sent --> */}
                  <div id="send__success"></div>
                  {/* <!-- --> */}

                {/* <!-- Loading screen while doing PoW --> */}
                <div id="send__waiting">
                  <div className="row">
                    <ul className="bokeh">
                      {/* <li></li>
                      <li></li>
                      <li></li>
                      <li></li> */}
                    </ul>
                  </div>
                  <div className="send__waiting-title">
                    <p>Doing Proof of Work. Please be patient!</p>
                  </div>
                  <div className="alert alert-success" role="alert">
                    <p>While waiting, you can read more about the <a href="https://dev.iota.org" className="alert-link">IOTA API here.</a> Or you can read our Blog on <a href="https://medium.com/iotatangle" className="alert-link">Medium</a>. Always useful to know this stuff.</p>
                  </div>
                </div>
              </Row>
            </div>
          </Grid>


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
