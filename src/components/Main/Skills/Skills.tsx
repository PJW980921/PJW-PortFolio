import '../Skills/Skills.scss';
import { IoHammerOutline } from 'react-icons/io5';

export default function Skills() {
  return (
    <section>
      <h1 id="Skills" className="skills-title">
        <IoHammerOutline />
        Skills
      </h1>
      <div className="skills-container">
        <div className="front-end_container">
          <div className="front-end_box">
            <h1 className="front-end_title">Publishing</h1>
            <img
              src="image/publish-img.png"
              className="skills-img"
              alt="프론트엔드 기술 스택 이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">FrameWorks</h1>
            <img
              src="image/frameWorks-img.png"
              className="skills-img"
              alt="프론트엔드 기술 스택 이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">Styles</h1>
            <img
              src="image/styles-img.png"
              className="skills-img"
              alt="프론트엔드 기술 스택 이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">Libraries</h1>
            <img
              src="image/libs-img.png"
              className="skills-img"
              alt="프론트엔드 기술 스택 이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">Lints</h1>
            <img
              src="image/lints-img.png"
              className="skills-img"
              alt="프론트엔드  이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">Version Control</h1>
            <img
              src="image/version-control-img.png"
              className="skills-img"
              alt="프론트엔드 버전컨트롤 이미지"
            />
          </div>
          <div className="front-end_box">
            <h1 className="front-end_title">Communication</h1>
            <img
              src="image/communication-img.png"
              className="skills-img"
              alt="프론트엔드 커뮤니케이션 이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
