import React from 'react';
import styled from '@emotion/styled';

const Label = styled('label')`
  margin-right: 2rem;
  font-size: 1.2rem;
`;

const SelectContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const SelectWrapper = styled('div')`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: .7rem;
    height: .7rem;
    border-left: 3px solid #34ace0;
    border-top: 3px solid #34ace0;
    top: 1.2rem;
    right: 1rem;
    transform: rotate(-135deg) translate(0, -50%);
  }
`;

const Select = styled('select')`
  background-color: #fff;
  border: 2px solid #34ace0;
  padding: 1rem 4rem 1rem 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 5px;
  color: #000;
  color: rgba(0,0,0,0);
  text-shadow: 0 0 0 #000;
  cursor: pointer;
`;

const CitySelect = props => {
  const { cities } = props;

  const onChangeHandler = e => {
    props.selectNewCity(e.target.value);
  }

  return (
    <SelectContainer>
      <Label>
        Wybierz miasto:
      </Label>
      <SelectWrapper>
        <Select
          onChange={onChangeHandler}
        >
          {cities.map(city =>
            city && (
              <option
                value={city.name}
                key={city.id}
              >
                {city.displayedName}
              </option>
            )
          )}
        </Select>
      </SelectWrapper>
    </SelectContainer>
  );
}

export default CitySelect;
