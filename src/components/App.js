import React, { Component } from "react";
import foli from "../api/foli";
import SearchBar from "./SearchBar";
import BusList from "./BusList";

class App extends Component {
  state = { buses: [] };

  onSearchSubmit = async term => {
    const response = await foli.get(`/siri/sm/${term}`);
    this.setState({ buses: response.data.result });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <BusList buses={this.state.buses} />
      </div>
    );
  }
}

export default App;
