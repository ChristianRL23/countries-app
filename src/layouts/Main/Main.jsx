import { useContext } from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ThemeContext from '../../context/themeContext';
import './Main.scss';

const Main = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <main className={`main--${currentTheme}`}>
      <OptionsBar />
    </main>
  );
};

export default Main;
