import React from "react";

const BusList = props => {
  if (props.error !== "") {
    return <div>{props.error}</div>;
  }
  const buses = props.buses.map(bus => {
    return (
      <div className="item" key={bus.datedvehiclejourneyref}>
        <i className="large bus middle aligned icon yellow" />
        <div className="content">
          <div className="header">
            {bus.lineref} - {bus.destinationdisplay}
          </div>
          <div className="description">
            {remainingTime(bus.expectedarrivaltime, bus.recordedattime)} - (
            {formattedTime(bus.expectedarrivaltime)})
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h3 className="ui header">
        {props.stopNumber} {props.stopName}
      </h3>
      <div className="ui relaxed divided list">{buses}</div>
    </div>
  );
};

const remainingTime = (expectedTime, currentTime) => {
  const remainingTime = Math.floor((expectedTime - currentTime) / 60);
  return remainingTime < 0 ? 0 : formatHoursAndMinutes(remainingTime);
};

const formatHoursAndMinutes = minutes => {
  const realMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  return hours > 0
    ? hours + " h " + realMinutes + " min"
    : realMinutes + " min";
};

const formattedTime = timestamp => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.substr(-2);
};

export default BusList;
