import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // Check for unexpected error
    console.log('Logging', error);
    toast.error('An error occured');
  }
  // For expected error
  return Promise.reject(error);
});

const getWeatherData = async (searchQuery) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiEndPoint = 'https://api.openweathermap.org/data/2.5/weather';
  let cityName;
  let countryCode;

  searchQuery = searchQuery.split(', ');
  [cityName, countryCode] = [...searchQuery];
  const response = await httpRequest(
    `${apiEndPoint}?q=${cityName},${countryCode || ''}&appid=${apiKey}`
  );
  return response;
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
