import { FaLinkedin } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaSquareInstagram } from 'react-icons/fa6';
import './Footer.scss';
export default function Footer() {
  return (
    <footer className="footer-container" id="ContactMe">
      <h1>Contact Me</h1>
      <ul className="item-box">
        <li className="footer-item">
          <a
            href="https://www.linkedin.com/in/pjw980921/"
            className="item-link"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://github.com/PJW980921"
            className="item-link"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </li>
        <li className="footer-item">
          <a
            href="mailto:jackgg12322@gmail.com"
            className="item-link"
            target="_blank"
            aria-label="Gmail"
          >
            <SiGmail />
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://www.instagram.com/pjw98__/"
            className="item-link"
            target="_blank"
            aria-label="instagram"
          >
            <FaSquareInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
