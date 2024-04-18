import '../AboutMe/AboutMe.scss';
import { SiVelog } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-me_container">
      <div className="profile-container">
        <div className="profile-box">
          <h1 className="profile-title">Developer</h1>
          <div className="profile-img_box">
            <img
              src="image/portFolio-logo.png"
              width={300}
              height={300}
              alt="프로필 이미지"
              className="profile-img"
            />
          </div>
          <div className="icons-box">
            <a
              href="mailto:jackgg12322@gmail.com"
              className="icon-item"
              id="gmail"
              target="_blank"
            >
              <SiGmail />
            </a>
            <a
              href="https://velog.io/@jackgg12322/posts"
              className="icon-item"
              id="velog"
              target="_blank"
            >
              <SiVelog />
            </a>
            <a
              href="https://github.com/PJW980921"
              className="icon-item"
              id="github"
              target="_blank"
            >
              <FaSquareGithub />
            </a>
          </div>
        </div>
        <div className="profile-info_container">
          <h1 className="profile-info_title">
            <FcAbout />
            About Me
          </h1>
          <ul className="profile-info_box">
            <li className="info-item">
              <div className="info-item_title">
                <FaRegUser />
                <span>이름</span>
              </div>
              <span className="info-item_text">박지원</span>
            </li>
            <li className="info-item">
              <div className="info-item_title">
                <FaRegCalendarAlt />
                <span>생년월일</span>
              </div>
              <div>
                <span className="info-item_text">98.09.21</span>
              </div>
            </li>
            <li className="info-item">
              <div className="info-item_title">
                <IoLocationOutline />
                <span>주소</span>
              </div>
              <span className="info-item_text">경기도 화성시</span>
            </li>
          </ul>
          <div className="profile-text">
            안녕하세요.
            <br />
            어린 시절 호기심에 오픈소스로 유틸리티 프로그램을
            <br /> 개발하여 친구들에게 공유하고 사용하는데 재미를 느껴
            <br />
            개발자를 꿈꾸게 되었습니다.
            <br />
            현재는 프론트엔드 개발자가 되고자 꾸준히 학습한 내용들을 정리하여{' '}
            <br />
            <a
              className="profile-text_link"
              href="https://velog.io/@jackgg12322/posts"
              target="_blank"
            >
              개인 블로그
            </a>
            에 작성중입니다.
            <br />
            항상 배우는 자세로 임하고 제 역량을 발휘하여 회사에 많은 기여를 하는{' '}
            <br />
            개발자가 되겠습니다. 감사합니다.
          </div>
        </div>
      </div>
    </section>
  );
}
