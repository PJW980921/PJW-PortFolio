import '../AboutMe/AboutMe.scss';
import { SiVelog } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
export default function AboutMe() {
  return (
    <>
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
            <h1 className="profile-info_title">About Me</h1>
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
              안녕하세요. 저는 동료들과 원활한 소통을 중요하게 생각하며, 함께
              생각을 나누고 피드백을 받으며 부족한점을 보완했습니다.
              <br />
              이런 과정을 통해 실력을 향상시키고 프로젝트 경험을 쌓으며
              <br />
              성장하고있습니다.이러한 경험을 바탕으로
              <br /> 회사에 많은 기여를 하는 개발자가 되고자 합니다.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
