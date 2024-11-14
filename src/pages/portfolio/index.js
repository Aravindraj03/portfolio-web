import {React, useEffect} from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRedo,
  FaCalendar,
  FaLink,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import workOne from "../../assets/img-1.jpg";
import workTwo from "../../assets/img-2.jpg";
import workThree from "../../assets/img-3.jpg";
import workFour from "../../assets/img-4.jpg";
import workFive from "../../assets/img-5.jpg";
import workSix from "../../assets/img-6.jpg";

function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
    <section className="portfolio">
        <h1 className="heading"> <span> my </span> work </h1>
        <div className="box-container">

        <div className="box">
            <img src={workSix} alt="sixthWork"/>
            <div className="content">
              <h3> My Professional Portfolio </h3>
              <p>A personal website showcasing my projects, skills, and experience, designed to highlight my work and capabilities as a developer.</p>
              <a href="https://aravindraj03.github.io/Aravind-Portfolio/" target='_black'> Click Here! </a>
            </div>
          </div>

          <div className="box">
            <img src={workOne} alt="firstWork"/>
            <div className="content">
              <h3> Fayn Global's e-commerce website </h3>
              <p> Fayn Global's e-commerce website is a business and service platform, similar to Justdial, connecting users with local services and businesses.. </p>
              <a href="https://www.faynglobal.co.in/" target='_black'> Click Here! </a>
            </div>
          </div>

          <div className="box">
            <img src={workTwo} alt="secondWork"/>
            <div className="content">
              <h3> E-commerce Dress Website </h3>
              <p> A stylish and responsive e-commerce dress platform built with HTML, CSS, and JavaScript for an engaging online shopping experience. </p>
              <a href="https://aravindraj03.github.io/E-Commerce-Website/" target='_black'> Click Here! </a>
            </div>
          </div>

          <div className="box">
            <img src={workThree} alt="thirdWork"/>
            <div className="content">
              <h3> Travel Explorer Website </h3>
              <p>An immersive platform for discovering travel destinations, offering trip planning, booking options, and travel guides.</p>
              <a href="https://aravindraj03.github.io/Travel-Website/" target='_black'> Click Here! </a>
            </div>
          </div>

          <div className="box">
            <img src={workFour} alt="fourthWork"/>
            <div className="content">
              <h3> Nike Footwear Showcase </h3>
              <p> A dynamic website dedicated to showcasing Nike’s latest footwear collection, featuring sleek designs and interactive elements for an engaging user experience. </p>
              <a href="https://aravindraj03.github.io/Nike-Footwear-Project/" target='_black'> Click Here! </a>
            </div>
          </div>

          <div className="box">
            <img src={workFive} alt="fifthWork"/>
            <div className="content">
              <h3>Delicious Bites Restaurant Website</h3>
              <p>A simple yet inviting website designed to showcase menu offerings, specials, and essential information for a delightful dining experience.</p>
              <a href="https://aravindraj03.github.io/Food-Order-Website/" target='_black'> Click Here! </a>
            </div>
          </div>

        </div>
        <div className="loadingBtn">
        <a href="#" className="btnLoading"> Load More <span> <FaRedo className="downloadBtnIcon"/> </span> </a>
        </div>
      </section>
    </>
  )
}

export default Portfolio