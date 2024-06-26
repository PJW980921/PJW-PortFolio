import './DarkModeToggle.scss';
import { Switch } from 'antd';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { SwitchChangeEventHandler } from 'antd/es/switch';
import { useState } from 'react';

const DarkModeBtn = () => {
  const darkModeState =
    localStorage.getItem('data-theme') === 'dark' ? true : false;
  const [darkMode, setDarkMode] = useState<boolean>(darkModeState);
  const handleDarkModeChange: SwitchChangeEventHandler = (checked) => {
    if (checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
      setDarkMode(true);
    } else if (!checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
      setDarkMode(false);
    }
  };

  return (
    <Switch
      id="button"
      title="DarkModeButton"
      onChange={handleDarkModeChange}
      checkedChildren={<BsSunFill className=".icon" />}
      unCheckedChildren={<BsMoonStarsFill className=".icon" />}
      checked={darkMode}
    />
  );
};

export default DarkModeBtn;
