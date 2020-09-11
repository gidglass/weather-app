import React from 'react';

const ForecastList = (props) => {
    return (
        <div className="forecast">
            { props.dailyForecast.map(day => {
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
    );
};

export default ForecastList;