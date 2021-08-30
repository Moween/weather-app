import axios from "axios";
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if(!expectedError) { //Check for unexpected error
    console.log('Logging', error)
    toast.error('An error occured');
  }
  Promise.reject(error);
});

const getWeatherData = async (searchQuery) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let cityName;
  let countryName;

  if (searchQuery.includes(",")) {
    searchQuery = searchQuery.split(", ");
    cityName = searchQuery[0];
    cityName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1);
    countryName = searchQuery[1];
    const response = await httpRequest(
      `${apiEndPoint}?q=${cityName},${countryName}&appid=${apiKey}`
    );
    return response;
  } else {
    cityName = searchQuery;
    const response = await httpRequest(
      `${apiEndPoint}?q=${cityName}&appid=${apiKey}`
    );
    return response;
  }
};

const httpRequest = async (apiClient) => {
  try {
    const { data } = await axios.get(apiClient);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error('Location not found');
    }
  }
};

export default getWeatherData;
