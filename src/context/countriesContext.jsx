import React, { useState } from 'react';

const CountriesContext = React.createContext({
  countriesFilter: '',
  setCountriesFilter: () => {},
});

export const CountriesContextProvider = ({ children }) => {
  const [countriesFilter, setCountriesFilter] = useState('Filter by Region');

  return (
    <CountriesContext.Provider value={{ countriesFilter, setCountriesFilter }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
