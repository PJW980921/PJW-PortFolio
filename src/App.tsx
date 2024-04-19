import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [themeToggleData, setThemeToggleData] = useState('light');
  useEffect(() => {
    const getSaveDarkModeData = localStorage.getItem('data-theme') as string;
    document.documentElement.setAttribute('data-theme', themeToggleData);
    if (getSaveDarkModeData === 'dark') {
      setThemeToggleData('dark');
    }
  }, [themeToggleData]);

  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
