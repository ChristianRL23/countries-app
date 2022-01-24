import { useContext } from 'react';
import './CountryCard.scss';
import ThemeContext from '../../context/themeContext';
import CountriesContext from '../../context/countriesContext';

const CountryCard = ({
  countryName,
  countryFlagImg,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const countriesCtx = useContext(CountriesContext);

  const selectCountry = () => {
    countriesCtx.setCountrySelected(countryName);
  };

  return (
    <div onClick={selectCountry} className={`country-card--${currentTheme}`}>
      <img
        className="country-card__flag"
        src={countryFlagImg}
        alt="Country flag"
      />
      <div className="country-card__info">
        <h5 className={`country-card__name--${currentTheme}`}>{countryName}</h5>
        <div className="country-card__data">
          <h6 className={`country-card__population--${currentTheme}`}>
            Population:{' '}
            <span className={`country-card__population-value--${currentTheme}`}>
              {countryPopulation}
            </span>
          </h6>
          <h6 className={`country-card__region--${currentTheme}`}>
            Region:{' '}
            <span className={`country-card__region-value--${currentTheme}`}>
              {countryRegion}
            </span>
          </h6>
          <h6 className={`country-card__capital--${currentTheme}`}>
            Capital:{' '}
            <span className={`country-card__capital-value--${currentTheme}`}>
              {countryCapital}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
