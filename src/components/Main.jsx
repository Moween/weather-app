import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import getWeatherData from "../utils/getWeather";
import Form from "./Form";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      weatherData: [],
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
    console.log("Weather Data", weatherData);
  };

  render() {
    const { search, weatherData } = this.state;
    return (
      <main className="container">
        <ToastContainer />
        <div>
          <Form
            value={search}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </div>
      </main>
    );
  }
}

export default Main;
