import { useContext } from 'react';
import Button from '../../components/Button/Button';
import ThemeContext from '../../context/themeContext';
import './Country.scss';
import ArrowIcon from './arrow-back.svg';

const Country = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <section className={`country--${currentTheme}`}>
      <div className="country__back-button">
        <Button icon={ArrowIcon} textContent="Back" />
      </div>
      <div className="country__details">
        <div className="country__details__flag"></div>
        <div className="country__details__info">
          <h2 className="country__details__info__name">Country Name</h2>
          <div className="country__details__info__data">
            <h6 className="country__details__info__data__detail">
              Native Name: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Population: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Region: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Sub Region: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Capital: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Top Level Domain: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Currencies: <span className="detail__value">Value</span>
            </h6>
            <h6 className="country__details__info__data__detail">
              Languages: <span className="detail__value">Value</span>
            </h6>
          </div>
          <div className="country__details__info__neighbors">
            <h6 className="country__details__info__data__detail">Languages:</h6>
            <Button />
            <Button />
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
