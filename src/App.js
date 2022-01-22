import Navbar from './components/Navbar/Navbar';
import './App.scss';
import OptionsBar from './components/OptionsBar/OptionsBar';
import Countries from './layouts/Countries/Countries';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import Main from './layouts/Main/Main';

function App() {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <div className={`app--${currentTheme}`}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
