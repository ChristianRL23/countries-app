import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import Main from './layouts/Main/Main';
import { CountriesContextProvider } from './context/countriesContext';
import Country from './layouts/Country/Country';

function App() {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <div className={`app--${currentTheme}`}>
      <CountriesContextProvider>
        <Navbar />
        <Country />
        {/* <Main /> */}
      </CountriesContextProvider>
    </div>
  );
}

export default App;
