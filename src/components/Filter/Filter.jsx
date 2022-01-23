import './Filter.scss';
import arrowDownIcon from './chevron-down-outline.svg';
import { useState, useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import CountriesContext from '../../context/countriesContext';

const Filter = () => {
  const [optionsDisplay, setOptionsDisplay] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const countriesFilterCtx = useContext(CountriesContext);

  const toggleOptions = () => {
    setOptionsDisplay((lastState) => !lastState);
  };

  const changeFilter = (e) => {
    let country = e.target.textContent;
    countriesFilterCtx.setCountriesFilter(country);
    setOptionsDisplay(false);
  };

  return (
    <div className="filter">
      <div
        onClick={toggleOptions}
        className={`filter__button--${currentTheme}`}
      >
        <p className={`filter__button__text--${currentTheme}`}>
          {countriesFilterCtx.countriesFilter}
        </p>
        <img
          className={`filter__button__icon--${currentTheme}`}
          alt="Arrow icon"
          src={arrowDownIcon}
        />
      </div>
      {optionsDisplay && (
        <div className={`filter__options--${currentTheme}`}>
          <p onClick={changeFilter}>Filter by Region</p>
          <p onClick={changeFilter}>Africa</p>
          <p onClick={changeFilter}>America</p>
          <p onClick={changeFilter}>Asia</p>
          <p onClick={changeFilter}>Europe</p>
          <p onClick={changeFilter}>Oceania</p>
        </div>
      )}
    </div>
  );
};

export default Filter;
