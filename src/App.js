import React from 'react';
import './App.css';
import WeatherAppContainer from './components/WeatherAppContainer';
import HeaderBar from './components/HeaderBar';
import styled from '@emotion/styled';

const AppSection = styled('section')`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="App">
      <HeaderBar
        title="Serwis pogodowy"
      />
      <AppSection>
        <WeatherAppContainer />
      </AppSection>
    </div>
  );
}

export default App;
