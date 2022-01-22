import './Filter.scss';
import arrowDownIcon from './chevron-down-outline.svg';
import { useState, useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import { Link } from 'react-router-dom';

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
          <Link to="/africa">Africa</Link>
          <Link to="/america">America</Link>
          <Link to="/asia">Asia</Link>
          <Link to="/europe">Europe</Link>
          <Link to="/oceania">Oceania</Link>
        </div>
      )}
    </div>
  );
};

export default Filter;
