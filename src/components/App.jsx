import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from './Table';

class App extends React.Component {
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

  render () {
    return (
      <div>
        <main className={this.myClassObj().main}>
          <Header
            toggleSidebar={this.toggleSidebar}
            myClass={this.myClassObj}
          />
          <Table
            myClass={this.myClassObj}
          />
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

export default App;
