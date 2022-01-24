import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import ThemeContext from '../../context/themeContext';
import './Country.scss';
import ArrowIcon from './arrow-back.svg';
import CountriesContext from '../../context/countriesContext';

const Country = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const [country, setCountry] = useState([]);
  const countryCtx = useContext(CountriesContext);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch('https://restcountries.com/v2/name/mexico');
      const data = await response.json();
      setCountry(data);
    };

    fetchCountriesData();
  }, []);

  const backButtonAction = () => {
    countryCtx.setCountrySelected('');
  };

  return (
    country.length > 0 && (
      <section className={`country--${currentTheme}`}>
        <div className="country__back-button">
          <Button
            clickFn={backButtonAction}
            icon={ArrowIcon}
            textContent="Back"
          />
        </div>
        <div className="country__details">
          <img
            className="country__details__flag"
            src={country[0].flags.svg}
            alt="Country flag"
          />
          <div className="country__details__info">
            <h2 className={`country__details__info__name--${currentTheme}`}>
              {country[0].name}
            </h2>
            <div className="country__details__info__data">
              <div className="details--left">
                <h6 className={`detail__name--${currentTheme}`}>
                  Native Name:{' '}
                  <span className="detail__value">{country[0].nativeName}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Population:{' '}
                  <span className="detail__value">{country[0].population}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Region:{' '}
                  <span className="detail__value">{country[0].region}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Sub Region:{' '}
                  <span className="detail__value">{country[0].subregion}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Capital:{' '}
                  <span className="detail__value">{country[0].capital}</span>
                </h6>
              </div>
              <div className="details--right">
                <h6 className={`detail__name--${currentTheme}`}>
                  Top Level Domain:{' '}
                  <span className="detail__value">{country[0].region}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Demonym:{' '}
                  <span className="detail__value">{country[0].demonym}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Currencies:{' '}
                  <span className="detail__value">
                    {country[0].currencies[0].name}
                  </span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Languages:{' '}
                  <span className="detail__value">
                    {country[0].languages[0].name}
                  </span>
                </h6>
              </div>
            </div>
            <div className="country__details__info__neighbors">
              <h6 className={`detail__name--${currentTheme}`}>
                Border Countries:
              </h6>
              <Button textContent="Mexico" />
              <Button textContent="Mexico" />
              <Button textContent="Mexico" />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Country;
