import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="filed">
            <label>Pysäkkihaku</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Pysäkin numero"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
