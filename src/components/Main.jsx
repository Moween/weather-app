import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import getWeatherData from "../utils/getWeather";
import Form from "./Form";
import Section from "./Section";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      weatherData: "",
    };
  }

  handleChange = ({ target: input }) => {
    const { value } = input;
    this.setState({ search: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let city = this.state.search;
    const weatherData = await getWeatherData(city);
    this.setState({ weatherData });
  };
  
  handleClick = (e) => {
    let search = this.state.search;
    search = '';
    this.setState({ search });
  }

  render() {
    const { search, weatherData } = this.state;
    return (
      <main className="container">
        <ToastContainer />
        <div className="limited">
          <Form
            value={search}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
          {weatherData ? (
            <Section weatherInfo={weatherData} />
          ) : (
            <div className="quotes">
              <p className="mt-0 fs-5">
                <q>
                  There is no such thing as a bad weather, just inappropriate
                  clothing.
                </q>
                <br />
                Ranulph Fiennes
              </p>
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default Main;
