import React from "react";

const Section = (props) => {
  const { weatherInfo } = props;

  const convertTemp = (unitInKelvin) => {
    const tempInCel = unitInKelvin - 273.15;
    const tempFahr = (9 / 5) * tempInCel + 32;
    return [tempInCel.toFixed(1), tempFahr.toFixed(1)];
  };

  return (
    <section className="pg-section1">
      <div className="container">
        <div>
          <div className="d-flex align-items-center">
            <p className="fs-5 mb-0 text-uppercase">{weatherInfo.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <h2>
            <span>{weatherInfo.name},</span> {weatherInfo.sys.country}
          </h2>
        </div>
        <div className="d-flex p-2 ps-0 align-items-center">
          <div>
            <p className="temp">
              {convertTemp(weatherInfo.main.feels_like)[0]}
              <sup>o</sup>C
            </p>
          </div>
          <div className="ps-3">
            <p>
              FEELS LIKE: {convertTemp(weatherInfo.main.feels_like)[1]}
              <sup>
                <span>
                  <sup>o</sup>
                </span>
              </sup>
              <span>F</span>
            </p>
            <p>WIND: {weatherInfo.wind.speed} MPH</p>
            <p>HUMUDITY: {weatherInfo.main.humidity}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
