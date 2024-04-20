import { useState } from 'react';
import '../Header/Header.scss';
import DarkModeBtn from './DarkModeBtn';
import { IoMenu } from 'react-icons/io5';
import DropdownMenu from './DropdownMenu';
export default function Header() {
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownMenu = () => {
    setDropdownState(!dropdownState);
  };
  return (
    <header className="header-container">
      <div className="logo-box">
        <img
          src="image/portFolio-logo.png"
          width={30}
          height={30}
          alt="로고 이미지"
          className="logo-img"
        />
        <a href="/" className="nav-item">
          PJW`s Portfolio
        </a>
      </div>
      <nav className="nav-container">
        <div>
          <IoMenu className="menu-toggle_btn" onClick={handleDropdownMenu} />
          {dropdownState && <DropdownMenu />}
        </div>
        <ul className="nav-box">
          <li>
            <a href="#AboutMe" className="nav-item">
              About Me
            </a>
          </li>
          <li>
            <a href="#Skills" className="nav-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="nav-item">
              Projects
            </a>
          </li>
        </ul>
        <DarkModeBtn />
      </nav>
    </header>
  );
}
