import React, {Component} from 'react';

import Tag from '../tag';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      tags: []
    }
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    if (e.keyCode === 13) {
      console.log('enter');
      this.setState({searchTerm: "", tags: [...this.state.tags, inputValue.toLowerCase()]}, () => this.props.handleDataFilter(this.state.tags));
    } else {
      this.setState({searchTerm: inputValue});
    }
  }

  handleRemoveTag = (removedTagindex) => {
    console.log(removedTagindex);
    const filteredTags = this.state.tags.filter((item, index) => index !== removedTagindex);
    this.setState({tags: filteredTags}, () => this.props.handleDataFilter(this.state.tags));
  }

  render() {
    return(
      <section>
        <ul>
          {this.state.tags.map((item, index) => <li key={index}><Tag tagName={item} index={index} handleRemoveTag={this.handleRemoveTag}/></li>)}
        </ul>
        <input type="text" value={this.state.searchTerm} placeholder="Search with name" onChange={this.handleSearchInput} onKeyDown={this.handleSearchInput} />
      </section>
    )
  }
}

export default Search;