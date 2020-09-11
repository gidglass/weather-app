import React from 'react';
import './App.css';
import icon from './icons/sun.png';

function App() {
  // Sample data
  const daily = [
    {
      "dt": 1595268000,
      "sunrise": 1595243663,
      "sunset": 1595296278,
      "temp": {
        "day": 298.82,
        "min": 293.25,
        "max": 301.9,
        "night": 293.25,
        "eve": 299.72,
        "morn": 293.48
      },
      "feels_like": {
        "day": 300.06,
        "night": 292.46,
        "eve": 300.87,
        "morn": 293.75
      },
      "pressure": 1014,
      "humidity": 82,
      "dew_point": 295.52,
      "wind_speed": 5.22,
      "wind_deg": 146,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 97,
      "pop": 1,
      "rain": 12.57,
      "uvi": 10.64
    },
    {
      "dt": 1595289600,
      "sunrise": 1595243663,
      "sunset": 1595296278,
      "temp": {
        "day": 298.82,
        "min": 293.25,
        "max": 301.9,
        "night": 293.25,
        "eve": 299.72,
        "morn": 293.48
      },
      "feels_like": {
        "day": 300.06,
        "night": 292.46,
        "eve": 300.87,
        "morn": 293.75
      },
      "pressure": 1014,
      "humidity": 82,
      "dew_point": 295.52,
      "wind_speed": 5.22,
      "wind_deg": 146,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 97,
      "pop": 1,
      "rain": 12.57,
      "uvi": 10.64
    },
    {
      "dt": 1595376000,
      "sunrise": 1595243663,
      "sunset": 1595296278,
      "temp": {
        "day": 298.82,
        "min": 293.25,
        "max": 301.9,
        "night": 293.25,
        "eve": 299.72,
        "morn": 293.48
      },
      "feels_like": {
        "day": 300.06,
        "night": 292.46,
        "eve": 300.87,
        "morn": 293.75
      },
      "pressure": 1014,
      "humidity": 82,
      "dew_point": 295.52,
      "wind_speed": 5.22,
      "wind_deg": 146,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 97,
      "pop": 1,
      "rain": 12.57,
      "uvi": 10.64
    }
  ];

  return (
    <div className="weather-container">
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
      <div className="forecast">
        { daily.map(day => {
          return (
            <div key={day.dt} className="daily-forecast">
              <div className="daily-forecast__date">{new Date(day.dt * 1000).getDate()}</div>
              <div className="daily-forecast__icon">
                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                     href="#" 
                     alt="Forecast weather icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
