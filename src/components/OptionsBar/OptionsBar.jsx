import { useContext, useEffect, useState } from 'react';
import CountriesContext from '../../context/countriesContext';
import ThemeContext from '../../context/themeContext';
import Filter from '../Filter/Filter';
import './OptionsBar.scss';
import searchIcon from './search-outline.svg';

const OptionsBar = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const [searchInput, setSearchInput] = useState('');
  const countriesCtx = useContext(CountriesContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  const searchBarTypingHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchCountry = async (e) => {
    e.preventDefault();
    setError(null);
    if (searchInput === '') {
      setError(`Can't leave search field empty`);
    } else {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchInput}`
        );
        const data = await response.json();
        if (data.status === 404) {
          throw new Error('Country not found!');
        }
        countriesCtx.setCountrySelected(data[0].name);
        setSearchInput('');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <form onSubmit={searchCountry} className="options-bar">
      <div className="options-bar__search__container">
        <div className={`options-bar__search--${currentTheme}`}>
          <img
            src={searchIcon}
            className={`search__icon--${currentTheme}`}
            alt="Search icon"
          />
          <input
            onChange={searchBarTypingHandler}
            value={searchInput}
            className={`search__input--${currentTheme}`}
            placeholder="Search for a country..."
          />
        </div>
        {error && <p>{error}</p>}
      </div>
      <Filter />
    </form>
  );
};

export default OptionsBar;
