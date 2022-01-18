import './Filter.scss';
import arrowDownIcon from './chevron-down-outline.svg';
import { useState, useContext } from 'react';
import ThemeContext from '../../context/themeContext';

const Filter = () => {
  const [optionsDisplay, setOptionsDisplay] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  const toggleOptions = () => {
    setOptionsDisplay((lastState) => !lastState);
  };

  return (
    <div className="filter">
      <div
        onClick={toggleOptions}
        className={`filter__button--${currentTheme}`}
      >
        <p className={`filter__button__text--${currentTheme}`}>
          Filter by Region
        </p>
        <img
          className={`filter__button__icon--${currentTheme}`}
          alt="Arrow icon"
          src={arrowDownIcon}
        />
      </div>
      {optionsDisplay && (
        <div className={`filter__options--${currentTheme}`}>
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
