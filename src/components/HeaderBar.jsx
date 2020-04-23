import React from 'react';
import styled from '@emotion/styled';

const Header = styled('nav')`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #227093;
  padding 0 2rem;
  margin-bottom: 4rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled('p')`
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
`;

const HeaderBar = props => {
  const { title } = props

  return (
    <Header>
      <Title>
        {title}
      </Title>
    </Header>
  )
}

export default HeaderBar;