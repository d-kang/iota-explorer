import React from 'react';

class Table extends React.Component {
  render() {
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

            {/* <tr>
              <td className="iota__rank"></td>
              <td className="iota__name"></td>
              <td className="iota__message">Nothing here right now. Generate an address and tell someone (or you yourself) to send a transaction with a message to it.</td>
              <td className="iota__value"></td>
            </tr> */}
            {this.props.renderRankedList()}
          </tbody>
        </table>
      </section>
    )
  }
}

export default Table;
