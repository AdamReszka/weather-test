import React from 'react';
import styled from '@emotion/styled';
import IconBarometer from './../assets/barometer.png';
import IconWater from './../assets/water.png';
import IconWindsock from './../assets/windsock.png';

const Container = styled('div')`
  display: flex;
  flex: 2;
  border: 1px solid #569ebd;

  @media (min-width: 961px) {
    margin-right: 1rem;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const DataBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const DataHeader = styled('p')`
  margin: .5rem;
  text-align: left;
`;

const DataList = styled('ul')`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTemp = styled('li')`
  font-size: 8rem;
`;

const FeelsLikeTemp = styled('li')`
  padding: 0;
  padding-bottom: 3rem;
`;

const MinMaxTemp = styled('li')`
  display: flex;
  justify-content: space-around;
  font-size: 2.4rem;
  width: 100%;
`;

const DataDetails = styled('li')`
  font-size: 2.4rem;
  padding: 1.6rem 1rem 1.6rem 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 680px) {
    padding: 1.4rem .4rem;
    justify-content: center;
  }
`;

const DataImg = styled('img')`
  display: block;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
`;

const CurrentWeather = props => {
  const { currentWeather, isLoading } = props;
  let weather;

  if (!isLoading) {
    weather = currentWeather;
  }

  return (
    <Container>
      <DataBox>
        <DataHeader>Pogoda teraz:</DataHeader>
        {!isLoading ? (
            <DataList>
              <MainTemp>{weather.main.temp.toFixed(0)}°C</MainTemp>
              <FeelsLikeTemp>
                odczuwalna {weather.main.feels_like.toFixed(0)}°C
              </FeelsLikeTemp>
              <MinMaxTemp>
                <span>min. {weather.main.temp_min.toFixed(0)}°C</span>
                <span>max. {weather.main.temp_max.toFixed(0)}°C</span>
              </MinMaxTemp>
            </DataList>
        ) : "Loading..."}
      </DataBox>
      <DataBox>
        {!isLoading ? (
            <DataList>
              <DataDetails>
                <DataImg src={IconBarometer} alt="weather detail icon"/>
                {weather.main.pressure} hPa
              </DataDetails>
              <DataDetails>
                <DataImg src={IconWater} alt="weather detail icon"/>
                {weather.main.humidity}%
              </DataDetails>
              <DataDetails>
                <DataImg src={IconWindsock} alt="weather detail icon"/>
                {weather.wind.speed} km/h
              </DataDetails>
            </DataList>
        ) : "Loading..."}
      </DataBox>
    </Container>
  );
}

export default CurrentWeather;