import React, { Component } from 'react';
import Search from '../search';
import GuestsList from '../guests_List';

class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  handleDataFilter = (searchKeys) => {
    if (searchKeys.length) {
      const filteredData = this.props.data.filter(guestData => searchKeys.filter(key => guestData.name.toLowerCase().includes(key)).length > 0);
      this.setState({data: filteredData});
    } else {
      this.setState({data: this.props.data});
    }
  }

  render() {
    return (
      <section>
        <Search handleDataFilter={this.handleDataFilter} />
        <GuestsList data={this.state.data} />
      </section>
    )
  }
}

export default Guests;