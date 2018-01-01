import React from 'react';
import {
  Collapse,
  Well,
  Button,
  Label,
  Navbar,
  FormControl,
  Form,
} from 'react-bootstrap';
import axios from 'axios';

class Sidebar extends React.Component {
  state = {
    seed: '',
  }


  collectSeed = (e) => {
    this.setState({ seed: e.target.value });

  }

  hello = (e) => {
    e.preventDefault();

    const data = {
      name: 'David',
      seed: this.state.seed
    }

    axios.post('http://localhost:5000/api/seedSubmit', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={this.props.myClass().sideBar}>
        <ul className="sidebar-list">
          <li className={this.props.myClass().sideBarItem}>
            <a
              href="#"
              className="sidebar-anchor"
              data-toggle="collapse"
              data-target="#setSeed"
              aria-expanded="false"
              aria-controls="setSeed"
              onClick={() => this.setState({ openSeed: !this.state.open })
            }>My Seed</a>

            <Collapse in={this.state.openSeed} id="setSeed">
              <Well id="enterSeed">
                <Form onSubmit={this.hello}>
                  <FormControl
                    onChange={this.collectSeed}
                    type="password"
                    id="userSeed"
                    placeholder="Your Seed" />
                  <Button type="submit" id="seedSubmit">Submit</Button>
                </Form>

              </Well>
            </Collapse>
          </li>
          <li className={this.props.myClass().sideBarItem}>
            <a
              href="#"
              className="sidebar-anchor"
              data-toggle="collapse"
              data-target="#getAddresses"
              aria-expanded="false"
              aria-controls="getAddresses"
              onClick={() => this.setState({ openAddresses: !this.state.open })}>My Addresses</a>

            <Collapse in={this.state.openAddresses} id='getAddresses'>
              <div className="genAddress__div">
                <div id="overlay">
                  <div className="panel panel-danger">
                    <div className="panel-heading">Generating Address</div>
                    <div className="panel-body">
                      <p>Currently generating your address. This can take anywhere between 1 - 20minutes so be patient. Once your address was generated this note will disappear.</p>
                    </div>
                  </div>
                </div>
                <Button
                  id="genAddress"
                  type="submit"
                  bsStyle="success">Generate Address</Button>
                <div id="allAddresses"></div>
              </div>
            </Collapse>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;