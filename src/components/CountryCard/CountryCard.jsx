import './CountryCard.scss';

const CountryCard = ({
  countryName,
  countryFlagImg,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  return (
    <div className="country-card">
      <img src={countryFlagImg} alt="Country flag" />
      <div>
        <h5>{countryName}</h5>
        <div>
          <h6>
            Population: <span>{countryPopulation}</span>
          </h6>
          <h6>
            Region: <span>{countryRegion}</span>
          </h6>
          <h6>
            Capital: <span>{countryCapital}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
