import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import Main from './layouts/Main/Main';
import CountriesContext from './context/countriesContext';
import Country from './layouts/Country/Country';
import useFetch from './hooks/useFetch';

function App() {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const countryCtx = useContext(CountriesContext);
  const [countries, countriesToDisplay] = useFetch();

  return (
    <div className={`app--${currentTheme}`}>
      <Navbar />
      {countryCtx.countrySelected === '' ? (
        <Main countries={countries} countriesToDisplay={countriesToDisplay} />
      ) : (
        <Country allCountries={countries} />
      )}
    </div>
  );
}

export default App;
