import '../Header/Header.scss';
import DarkModeBtn from './DarkModeBtn';
export default function Header() {
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
      <nav>
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
          <DarkModeBtn />
        </ul>
      </nav>
    </header>
  );
}
