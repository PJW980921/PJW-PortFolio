import './DropdownMenu.scss';
export default function DropdownMenu() {
  return (
    <nav className="dropdown-container">
      <ul className="dropdown-box">
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
    </nav>
  );
}
