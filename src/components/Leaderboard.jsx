import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from './Table';
import { Link } from 'react-router-dom';
class Leaderboard extends React.Component {
  state = {
    isActive: false,
    rankedList: [
      {"name":"David ","message":"Test1", value: 1}, {"name":"David","message":"Test2", value: 2},
    ],
  }

  renderRankedList = () => {
    return (
      this.state.rankedList.map(({ message, name, value }, i) => {
        const rank = i + 1;
        return (
          <tr key={i}>
            <td className="iota__rank">{rank}</td>
            <td className="iota__name">{name}</td>
            <td className="iota__message">{message}</td>
            <td className="iota__value">{value}</td>
          </tr>
        );
      })
    )
  }

  updateRankedList = (rankedList) => {
    this.setState({ rankedList }, () => console.log('updateRankedList', this.state.rankedList));
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
            renderRankedList={this.renderRankedList}
          />
        </main>
        <Sidebar
          updateRankedList={this.updateRankedList}
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

export default Leaderboard;
