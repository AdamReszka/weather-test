import React from 'react';
import styled from '@emotion/styled';

const ControlsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: .2rem 0;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 96rem;
`;

const AppControls = props => {
  return (
    <ControlsContainer>
      {props.children}
    </ControlsContainer>
  )
}

export default AppControls;