import React, { Component } from 'react';
import CitySelect from './CitySelect';
import CurrentWeather from './CurrentWeather';
import CityForecast from './CityForecast';
import AppControls from './AppControls';
import axios from 'axios';
import styled from '@emotion/styled';

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = '081019f241da21ff3af3ab40a02fda08';

const Container = styled('div')`
  max-width: 96rem;
  width: 100%;
  margin: 0 1rem 2rem;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  font-size: 1.6rem;
`;

const ContainerBlue = styled(Container)`
  background-color: #34ace0;
  color: #fff;
  
`;

const ContainerDarkBlue = styled(Container)`
  background-color: #227093;
  color: #fff;
`;

const WeatherData = styled('div')`
  width: 100%;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled('p')`
  font-size: 2rem;
  margin: 1rem;
`;

class WeatherAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          "id": 6695624,
          "name": "Warszawa",
          "displayedName": "Warszawa"
        },
        {
          "id": 5128581,
          "name": "New York City",
          "displayedName": "Nowy Jork"
        },
        {
          "id": 1850147,
          "name": "Tokyo",
          "displayedName": "Tokio"
        },
        {
          "id": 2968815,
          "name": "Paris",
          "displayedName": "Paryż"
        },
        {
          "id": 2643743,
          "name": "London",
          "displayedName": "Londyn"
        }
      ],
      currentCity: "Warszawa",
      cityWeather: {},
      cityForecast: {},
      isLoading: true
    }
  }

  componentDidMount() {
    this.refreshComponentData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentCity !== prevState.currentCity) {
      this.refreshComponentData();
    }
  }

  selectCityHandler = (cityName) => {
    this.setState({
      currentCity: cityName
    });
    this.refreshComponentData();
  }

  displaySelectedCity = () => {
    const selectedCity = this.state.cities.find(city => city.name === this.state.currentCity);
    return selectedCity.displayedName;
  }

  refreshComponentData = () => {
    this.setState({
      isLoading: true
    });
    axios.all([
      axios.get(`${baseUrl}/weather?q=${this.state.currentCity}&units=metric&appid=${apiKey}`),
      axios.get(`${baseUrl}/forecast?q=${this.state.currentCity}&units=metric&appid=${apiKey}`)
    ])
    .then(responseArray => {
      this.setState({
        cityWeather: responseArray[0].data,
        cityForecast: responseArray[1].data,
        isLoading: false
      });
    })
    .catch((err) => {
      console.log('Coś poszło nie tak', err)
    });
  }

  render() {
    return (
      <React.Fragment>
        <ContainerBlue>
          <Title>{this.displaySelectedCity()}</Title>
        </ContainerBlue>
        <AppControls>
          <CitySelect
            cities={this.state.cities}
            selectNewCity={this.selectCityHandler}
          />
        </AppControls>
        <ContainerDarkBlue>
          <WeatherData>
            <CurrentWeather 
              selectedCity={this.state.currentCity}
              currentWeather={this.state.cityWeather}
              isLoading={this.state.isLoading}
            />
            <CityForecast
              cityForecast={this.state.cityForecast}
              isLoading={this.state.isLoading}
            />
          </WeatherData>
        </ContainerDarkBlue>
      </React.Fragment>
    );
  }
}

export default WeatherAppContainer;
