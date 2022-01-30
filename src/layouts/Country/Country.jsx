import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import ThemeContext from '../../context/themeContext';
import './Country.scss';
import ArrowIcon from './arrow-back.svg';
import CountriesContext from '../../context/countriesContext';

const Country = ({ allCountries }) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const countryCtx = useContext(CountriesContext);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const countrySelected = allCountries.find(
      (country) => country.name === countryCtx.countrySelected
    );
    setCountry(countrySelected);
  }, []);

  const backButtonAction = () => {
    countryCtx.setCountrySelected('');
  };

  return (
    country !== '' && (
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
            src={country.flags.svg}
            alt="Country flag"
          />
          <div className="country__details__info">
            <h2 className={`country__details__info__name--${currentTheme}`}>
              {country.name}
            </h2>
            <div className="country__details__info__data">
              <div className="details--left">
                <h6 className={`detail__name--${currentTheme}`}>
                  Native Name:{' '}
                  <span className="detail__value">{country.nativeName}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Population:{' '}
                  <span className="detail__value">{country.population}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Region:{' '}
                  <span className="detail__value">{country.region}</span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Sub Region:{' '}
                  <span className="detail__value">{country.subregion}</span>
                </h6>
                {country.capital && (
                  <h6 className={`detail__name--${currentTheme}`}>
                    Capital:{' '}
                    <span className="detail__value">{country.capital}</span>
                  </h6>
                )}
              </div>
              <div className="details--right">
                <h6 className={`detail__name--${currentTheme}`}>
                  Top Level Domain:{' '}
                  <span className="detail__value">
                    {country.topLevelDomain[0]}
                  </span>
                </h6>
                <h6 className={`detail__name--${currentTheme}`}>
                  Demonym:{' '}
                  <span className="detail__value">{country.demonym}</span>
                </h6>
                {country.currencies && (
                  <h6 className={`detail__name--${currentTheme}`}>
                    Currencies:{' '}
                    {country.currencies &&
                      country.currencies.map((currency) => (
                        <span className="detail__value">{currency.name} </span>
                      ))}
                  </h6>
                )}
                <h6 className={`detail__name--${currentTheme}`}>
                  Languages:{' '}
                  {country.languages.map((language) => {
                    return (
                      <span className="detail__value">{language.name} </span>
                    );
                  })}
                </h6>
              </div>
            </div>
            {country.borders && (
              <div className="country__details__info__neighbors">
                <h6 className={`detail__name--${currentTheme}`}>
                  Border Countries:
                </h6>
                {country.borders.map((border) => (
                  <Button textContent={border} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default Country;
