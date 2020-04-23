import React from 'react';
import styled from '@emotion/styled';
import IconBarometer from './../assets/barometer.png';
import IconWater from './../assets/water.png';
import IconWindsock from './../assets/windsock.png';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  border: 1px solid #569ebd;
  
  @media (max-width: 960px) {
    border-top: none;
  }
`;

const DataHeader = styled('p')`
  margin: .5rem;
  text-align: left;
`;

const DataList = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

const MinMaxTemp = styled('li')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2.4rem;
  width: 100%;
  padding-bottom: 2rem;
`;

const DataDetails = styled('ol')`
  list-style: none;

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 680px) {
    padding: 0;
    flex-direction: column;
  }
`;

const DataDetailsItem = styled('li')`
  font-size: 1.8rem;
  padding: .8rem 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 680px) {
    padding: .8rem 0;
    justify-content: center;
  }
`;

const DataImg = styled('img')`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 2rem;
`;

const CityForecast = props => {
  const { cityForecast, isLoading } = props;
  let weather;

  if (!isLoading) {
    weather = cityForecast.list[1];
  }

  return (
    <Container>
      <DataHeader>Prognoza na kolejne 3h:</DataHeader>
      {!isLoading ? (
        <DataList>
          <MinMaxTemp>
            <span>
              min. {weather.main.temp_min.toFixed(0)}°C
            </span>
            <span>
              max. {weather.main.temp_max.toFixed(0)}°C
            </span>
          </MinMaxTemp>
          <DataDetails>
            <DataDetailsItem>
              <DataImg src={IconBarometer} alt="weather detail icon"/>
              {weather.main.pressure} hPa
            </DataDetailsItem>
            <DataDetailsItem>
              <DataImg src={IconWater} alt="weather detail icon"/>
              {weather.main.humidity}%
            </DataDetailsItem>
            <DataDetailsItem>
              <DataImg src={IconWindsock} alt="weather detail icon"/>
              {weather.wind.speed} km/h
            </DataDetailsItem>
          </DataDetails>
        </DataList>
      ) : 'Loading...'}
    </Container>
  );
}

export default CityForecast;