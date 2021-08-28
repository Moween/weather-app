import React, { Component } from "react";
import getWeatherData from "../utils/getWeather";
import Form from "./Form";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = ({ target: input }) => {
    const { value } = input;
    this.setState({ search: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let city = this.state.search;
    console.log('city', city);
    const weatherData = await getWeatherData(city);
    console.log("Weather Data", weatherData);
  };

  render() {
    const { search } = this.state;
    return (
      <main className="container">
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
