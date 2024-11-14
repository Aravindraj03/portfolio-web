import { React, useEffect } from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import reactIcon from "../../assets/react.png";
import sassIcon from "../../assets/sass.png";
import javascriptIcon from "../../assets/javascript.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import resume from "../../assets/resume.pdf";

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span> me </span>{" "}
        </h1>
        <div className="row">
          <div className="info-container">
            <h1> personal info </h1>
            <div className="box-container">
              <div className="box">
                <h3> <span> Name : </span>  Aravind Raj </h3>
                <h3> <span> Age : </span> 22 </h3>
                <h3> <span> Email : </span> aravindmary03@gmail.com </h3>
                <h3>
                  {" "}
                  <span> Address : </span>
                  10A West Naduvankarai Anna Nagar, Chennai - 600040{" "}
                </h3>
              </div>
              <div className="box">
                <h3> <span> Freelance : </span> Available </h3>
                <h3> <span> Skill : </span> Mern Stack Developer </h3>
                <h3> <span> Experience : </span> 1.2 Years </h3>
                <h3> <span> Language : </span> Tamil, English </h3>
              </div>
            </div>
            <div className="aboutMeBtn">
              <a href={resume} download="AravindResume" target='_blank' className="btnAbout" rel="noreferrer" >
                {" "}
                Download CV{" "}
                <span>
                  {" "}
                  <FaDownload className="downloadBtnIcon" />{" "}
                </span>{" "}
              </a>
            </div>
          </div>
          <div className="count-container">
            <div className="box">
              <h3> 1.2 </h3>
              <p> Years Of Experience </p>
            </div>

            <div className="box">
              <h3> 6 </h3>
              <p> Months Of Full Stack Developer course </p>
            </div>

            <div className="box">
              <h3> 20+ </h3>
              <p> Projects Completed </p>
            </div>


          </div>
        </div>
      </section>

      <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon" />
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon" />
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon" />
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon" />
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon" />
            <h3> React </h3>
          </div>
          <div className="box">
            <img src={sassIcon} alt="htmlIcon" />
            <h3> sass </h3>
          </div>

        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container">
          <div className="box">
            <i> <FaGraduationCap /> </i>
            <span> Mar 2017 - Apr 2019 </span>
            <h3> Higher Secondary 12TH </h3>
            <p> I scored 65% on the higher secondary board exam. And I am very much interested in electronics and computers, so I have
              taken the  B.Tech/IT degree at College. </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap /> </i>
            <span> Mar 2019 - Apr 2023 </span>
            <h3> B.Tech/IT </h3>
            <p> I completed my B.Tech/IT degree with 8.10 CGPA in Mailam Engineering College, Anna University, Mailam, Villupuram,
              Tamil Nadu, India.</p>
          </div>

          <div className="box">
            <i> <FaLaptopCode /> </i>
            <span> jun 2023 - feb 2024 </span>
            <h3> Full Stack Developer </h3>
            <p> I successfully completed a comprehensive Full Stack Developer course, gaining hands-on experience with both front-end and back-end technologies. This course enhanced my expertise in building dynamic web applications using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and databases like MySQL. </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode /> </i>
            <span>Apr 2024 - Oct 2024 </span>
            <h3> Fayn Global Company (Web Developer) </h3>
            <p> I worked on real-time projects. Projects like User Diet Panel and is controlled by Admin Panel. Than, I worked
              on all my projects in the GitLab environment. I have done functionality and API integration in Admin Panel Projects. In real-time projects,
              I worked in some npm packages like React-Router, Bootstrap, React-Icons, Sass and React-Player, etc... </p>
          </div>

        </div>

      </section>
    </>
  )
}

export default About