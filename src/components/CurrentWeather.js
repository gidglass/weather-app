import React from 'react';
import icon from '../icons/sun.png';

const CurrentWeather = () => {
    return (
        <div className="current-weather">
        <div className="current-weather__icon">
          <img src={icon} href="#" alt="Todays weather icon" />
        </div>
        <div className="current-weather__description">
          <h3 className="current-weather__description-location">Current Location</h3>
          <p className="current-weather__description-condition">Clear</p>
          <p className="current-weather__description-precip">Chance of Rain: 0%</p>
        </div>
        <div className="current-weather__temp">
          <h3 className="current-weather__now">75°</h3>
          <p className="current-weather__low">53°</p>
          <p className="current-weather__high">81°</p>
        </div>
      </div>
    );
};

export default CurrentWeather;