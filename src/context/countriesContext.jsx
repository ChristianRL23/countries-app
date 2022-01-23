import React, { useState } from 'react';

const CountriesContext = React.createContext({
  countriesFilter: '',
  setCountriesFilter: () => {},
});

export const CountriesContextProvider = ({ children }) => {
  const [countriesFilter, setCountriesFilter] = useState('All');

  return (
    <CountriesContext.Provider value={{ countriesFilter, setCountriesFilter }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
