import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  useEffect(() => {
    const getSaveDarkModeData = localStorage.getItem('data-theme') as string;
    document.documentElement.setAttribute('data-theme', getSaveDarkModeData);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
