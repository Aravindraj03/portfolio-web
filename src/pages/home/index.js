import { React, useEffect } from 'react';
import {
  FaUser
} from "react-icons/fa";
// import profilePicture from "../../assets/picture17.png";
import profilePicture from "../../assets/profile-image.jpeg";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {/* home section starts */}
      <section className="home">
        <div className='fullImageBox'>
          <div className="image cursorPointer">
            <img src={profilePicture} alt="profilePicture" />

            <div className='imgContent'>
              <img src={profilePicture} alt="profilePicture" />
              <h2> Aravind Raj<br /><span> Web Developer </span> </h2>
              <Link to="/contact"> Contact me </Link>
            </div>
          </div>

        </div>

        <div className="content">
          <h3> Hi, I Am Aravind Raj </h3>
          <span>
            I am{' '}
            <Typewriter
              words={['Web Developer', 'React Js Developer', 'MERN Stack Developer']}
              loop={0}
              cursor
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>


          <p> I have 1.2 years of experience, I have hands-on expertise in real-time projects, specializing in functionality development and API integration within admin panel projects. I have also advanced my full-stack skills through self-learning and practical application.</p>
          <div className="aboutMeBtn">
            <Link to="/about" className='textNone'>
              <div className="btn"> About Me <span> <FaUser className="userBtnIcon" /> </span> </div>
            </Link>
          </div>
        </div>
      </section>
      {/* home section ends */}
    </>
  )
}

export default Home 