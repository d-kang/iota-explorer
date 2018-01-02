import React, { Component } from 'react';
import Heading from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import logoBlack from '../../../assets/images/logo-black.png';
import {
  Grid,
  Row,
  Col,
  Label,
  Title,
  Form,
  Button,
  Collapse,
  Well,
} from 'react-bootstrap';
class Send extends Component {
  state = {
    isActive: false,
    POW: false,
    info: {
      seed: '',
      balance: 0,
      latestAddress: '',
    }
  }

  updateInfo = (info) => {
    this.setState({ info }, () => {
      console.log('this.state.info', this.state.info);
    });
  }

  getRefs = () => {
    this.proofOfWork();
    const myInputs = {
      name: this._name.value,
      value: this._value.value,
      address: this._address.value,
      message: this._message.value,
    };

    return myInputs;
  }
  sendMessage = () => {
    const data = this.getRefs();

    axios.post('http://localhost:5000/api/seedSubmit', data)
      .then(response => {
        console.log('response.data!!', response.data);
        // this.props.updateRankedList(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  proofOfWork = () => {
    this.setState({ POW: true });
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
                    <Label bsStyle="primary" id="iota__balance">{this.state.info.balance}</Label>
                  </p>
                </Col>
                <Col xs={6}>
                  <Form>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      maxLength="16"
                      className="form-control"
                      id="name"
                      ref={name => this._name = name}
                      placeholder="Enter Name" />
                  </Form>
                </Col>
                <Col xs={6}>
                  <Form>
                    <label htmlFor="value">Value</label>
                    <input
                      type="number"
                      className="form-control"
                      id="value"
                      ref={value => this._value = value}
                      placeholder="Value to Send" />
                  </Form>
                </Col>
                <Col xs={12}>
                  <Form>
                    <label htmlFor="address">Recipient Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      ref={address => this._address = address}
                      placeholder="IOTA address of recipient" />
                  </Form>
                </Col>
                <Col xs={12}>
                  <Form>
                    <label htmlFor="message">Text Area</label>
                    <textarea
                      id="message"
                      ref={message => this._message = message}
                      className="form-control"
                      rows="3"
                      placeholder="Message to send">
                    </textarea>
                  </Form>
                </Col>
                <div className="send__button">
                  <Button onClick={this.sendMessage} id="submit" bsStyle="success" bsSize="large">Submit</Button>
                </div>

                <Collapse in={this.state.POW}>
                  <Well id="enterSeed">
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
                  </Well>
                </Collapse>




              </Row>
            </div>
          </Grid>
        </main>
        <Sidebar
          updateInfo={this.updateInfo}
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
