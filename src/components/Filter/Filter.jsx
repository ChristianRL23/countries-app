import './Filter.scss';
import arrowDownIcon from './chevron-down-outline.svg';
import { useState } from 'react';

const Filter = () => {
  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const toggleOptions = () => {
    setOptionsDisplay((lastState) => !lastState);
  };

  return (
    <div className="filter">
      <div onClick={toggleOptions} className="filter__button">
        <p className="filter__button__text">Filter by Region</p>
        <img
          className="filter__button__icon"
          alt="Arrow icon"
          src={arrowDownIcon}
        />
      </div>
      {optionsDisplay && (
        <div className="filter__options">
          <p>Africa</p>
          <p>America</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>Oceania</p>
        </div>
      )}
    </div>
  );
};

export default Filter;
