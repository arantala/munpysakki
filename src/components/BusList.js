import React from "react";

const BusList = props => {
  const buses = props.buses.map(bus => {
    return (
      <div className="item" key={bus.datedvehiclejourneyref}>
        <i className="large bus middle aligned icon yellow" />
        <div className="content">
          <div className="header">
            {bus.lineref} - {bus.destinationdisplay}
          </div>
          <div className="description">
            {remainingTime(bus.expectedarrivaltime, bus.recordedattime)} min - (
            {formattedTime(bus.expectedarrivaltime)})
          </div>
        </div>
      </div>
    );
  });
  return <div className="ui relaxed divided list">{buses}</div>;
};

const remainingTime = (expectedTime, currentTime) => {
  const remainingTime = Math.floor((expectedTime - currentTime) / 60);
  return remainingTime < 0 ? 0 : remainingTime;
};

const formattedTime = timestamp => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.substr(-2);
};

export default BusList;
