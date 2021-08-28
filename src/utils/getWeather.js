import axios from "axios";

const getWeatherData = async (searchQuery) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = "https://api.openweathermap.org/data/2.5/weather";
  let cityName;
  let countryName;

  if (searchQuery.includes(",")) {
    searchQuery = searchQuery.split(", ");
    cityName = searchQuery[0];
    cityName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1);
    countryName = searchQuery[1];
    const response = await httpRequest(
      `${url}?q=${cityName},${countryName}&appid=${apiKey}`
    );
    console.log("Response", response);
    return response;
  } else {
    cityName = searchQuery;
    const response = await httpRequest(`${url}?q=${cityName}&appid=${apiKey}`);
    console.log("Response", response);
    return response;;
  }
};

const httpRequest = async (apiClient) => {
  try {
    const { data } = await axios.get(apiClient);
    return data;
  } catch (error) {
    return error;
  }
};

export default getWeatherData;
