# Weather App

## Table of contents
Overview
The challenge
Screenshot
Links
Built with
What I learned
Continued development
Useful resources
Author
Acknowledgments


## Overview
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The application is weather-app that allows users to know the weather forecast

![weather-app-preview](/src/images/weatherapp-screenshot.png)


## The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Search the weather forcast for a particular city.
- See error message incase of an invalid search and also a particular city that doesn't exist.

## Links
- Solution URL: [Github repository](https://www.github.com/moween/weather-app)
- Live Site URL: [weather-app](https://orbie-weather-app.herokuapp.com/)

Built with
Semantic HTML5 markup
CSS custom properties
Mobile-first workflow
ReactJs
Bootstrap CDN - For styles

## What I learned
I learn't a lot while working on this project. But these are the major highlights of this project.

#### How to intercept errors with axios
```axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // For unexpected error
  if (!expectedError) {
    // Check for unexpected error
    console.log('Logging', error);
    toast.error('An error occured');
  }
  // For expected error
  return Promise.reject(error);
})```;

### Useful resources
[Bootstrap](https://www.getbootstrap.com) - This helped me a lot when I restructured the navlinks in desktop view. I really liked this pattern and will use it going forward.

[Mosh Hamedani React Course](codewithmosh.com/react)  - This is an amazing course it helped me understand react and also make http request with axios.

Author
Twitter - @iamMoween

### Acknowledgments
Kenneth Aladi


