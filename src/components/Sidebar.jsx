import React from 'react';
import {
  Collapse,
  Well,
  Button,
  Label,
  Navbar,
  FormGroup,
  FormControl,

} from 'react-bootstrap'
class Sidebar extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {};
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
            }>
              My Seed
            </a>
            <Collapse in={this.state.openSeed} id="setSeed">
              <Well id="enterSeed">
                <FormGroup>
                  <FormControl type="password" id="userSeed" placeholder="Your Seed" />
                </FormGroup>
                <Button type="submit" id="seedSubmit">Submit</Button>
                </Well>
            </Collapse>
          </li>
              {/* <div className="collapse" id="setSeed">
                <div className="well" id="enterSeed">
                  <div className="form-group">
                    <Input type="password" id="userSeed" placeholder="Your Seed" />
                  </div>
                  <Button type="button" id="seedSubmit" >Submit</Button>
                </div>
              </div> */}

          <li className={this.props.myClass().sideBarItem}>
            <a
              href="#"
              className="sidebar-anchor"
              data-toggle="collapse"
              data-target="#getAddresses"
              aria-expanded="false"
              aria-controls="getAddresses"
              onClick={() => this.setState({ openAddresses: !this.state.open })}
            >
              My Addresses
            </a>

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
                bsStyle="success"
                >Generate Address</Button>
              <div id="allAddresses"></div>
            </div>
        </Collapse>


            {/* <div className="collapse" id="getAddresses">
              <div className="genAddress__div">
                <div id="overlay">
                  <div className="panel panel-danger">
                    <div className="panel-heading">Generating Address</div>
                    <div className="panel-body">
                      <p>Currently generating your address. This can take anywhere between 1 - 20minutes so be patient. Once your address was generated this note will disappear.</p>
                    </div>
                  </div>
                </div> */}
                {/* <button
                  type="button"
                  id="genAddress"
                  className="btn btn-success"
                >
                  Generate Address
                </button> */}
                {/* <div id="allAddresses"></div> */}
              {/* </div>
            </div> */}



          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
