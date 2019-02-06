import React, { Component } from "react";
import foli from "../api/foli";
import SearchBar from "./SearchBar";
import BusList from "./BusList";

class App extends Component {
  state = { stops: [], buses: [], error: "" };

  componentDidMount = async () => {
    const response = await foli.get("/gtfs/v0/stops");
    this.setState({ stops: response.data });
  };

  onSearchSubmit = async term => {
    if (typeof this.state.stops[term] !== "undefined") {
      const response = await foli.get(`/siri/sm/${term}`);
      this.setState({
        stopNumber: term,
        stopName: this.state.stops[term].stop_name,
        buses: response.data.result,
        error: ""
      });
    } else {
      this.setState({
        stopNumber: null,
        stopName: null,
        buses: [],
        error: "Annetulla hakusanalla ei löydy pysäkkiä!"
      });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <BusList
          stopNumber={this.state.stopNumber}
          stopName={this.state.stopName}
          buses={this.state.buses}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
