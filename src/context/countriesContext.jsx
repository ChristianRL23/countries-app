import React, { useState } from 'react';

const CountriesContext = React.createContext({
  countriesFilter: '',
  setCountriesFilter: () => {},
  countrySelected: '',
  setCountrySelected: () => {},
});

export const CountriesContextProvider = ({ children }) => {
  const [countriesFilter, setCountriesFilter] = useState('All');
  const [countrySelected, setCountrySelected] = useState('');

  return (
    <CountriesContext.Provider
      value={{
        countriesFilter,
        setCountriesFilter,
        countrySelected,
        setCountrySelected,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
