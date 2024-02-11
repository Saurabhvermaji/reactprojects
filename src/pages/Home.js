// Home.js
import React, { useEffect } from "react";
import "../styles/Home.css";
import openCity from "../script/TabComponent";
import TestimonialsSlider from "../script/OfferTab";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    alert("link clicked");
  };

  return (
    <>
      <div className="main-container">
        {/* First Container */}
        <div className="first-container">
          <p className="first-container-text1">BYJU'S Exam Prep</p>
          <p className="first-container-text2">
            The Most Comprehensive Preparation App for All Exams
          </p>
          <p className="first-container-text3">Trusted by 3 Crore+ Students</p>
          <img
            src="https://grdp.co/cdn-cgi/image/quality=100,width=720,f=auto/https://gs-post-images.grdp.co/2023/3/home_creative_web-img1680081740234-10.png-rs-high-webp.png"
            alt="BYJU'S Exam Prep"
          />
        </div>

        {/* Second Container */}
        <div className="second-container">
          <h1 className="second-container-text1">
            Get Started with BYJU'S Exam Prep
          </h1>
          <p className="second-container-text2">
            Boost your exam preparation with us
          </p>
          <input type="text" placeholder="Enter your mobile number" />
          <p>We’ll send an OTP for verification</p>
          <button onClick={handleLoginClick}>Continue</button>
          <p>
            <Link to="#" onClick={handleLoginClick}>
              Login with email
            </Link>
          </p>
        </div>
      </div>

      <div className="Choose-container">
        <div className="Choose-heading-container">
          <p className="Choose-heading">Why Choose BYJU'S Exam Prep?</p>
        </div>

        <div className="why-Choose-container">
          <span className="reason-container">
            <img
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-6-2x-img1629283053211-98.png-rs-high-webp.png"
              alt=""
            ></img>
            <p className="reason-container-heading">Online Classroom Program</p>
            <p className="reason-container-text">by Top Faculty</p>
          </span>

          <span className="reason-container">
            <img
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-6-2x-img1629283053211-98.png-rs-high-webp.png"
              alt=""
            ></img>
            <p className="reason-container-heading">
              {" "}
              Comprehensive Study Material
            </p>
            <p className="reason-container-text">for All Exams</p>
          </span>

          <span className="reason-container">
            <img
              src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-6-2x-img1629283053211-98.png-rs-high-webp.png"
              alt=""
            ></img>
            <p className="reason-container-heading">
              {" "}
              Latest Pattern Test Series
            </p>
            <p className="reason-container-text">with Detailed Analysis</p>
          </span>
        </div>
      </div>

      <div className="preparation-container">
        <div className="preparation-heading-container">
          <p>Start your preparation</p>
        </div>

        <div className="preparation-banner-container">
          <div className="banner-container">
            <span className="preparation-banner">
              <div className="preparation-banner-text-container">
                <h1>Online Classroom Program</h1>
                <p> Live & Recorded courses by Top Faculty</p>
              </div>

              <div className="preparation-banner-text-container">
                <Link
                  className="explore-link"
                  to="#"
                  onClick={handleLoginClick}
                >
                  Explore Courses &#62;
                </Link>
              </div>
            </span>

            <span className="preparation-banner">
              <div className="preparation-banner-text-container">
                <h1>Test Series</h1>
                <p>
                  {" "}
                  Practice unlimited mock tests and get your All India Rank
                </p>
              </div>

              <div className="preparation-banner-text-container">
                <Link
                  className="explore-link"
                  to="#"
                  onClick={handleLoginClick}
                >
                  Explore Courses &#62;
                </Link>
              </div>
            </span>
            <span className="preparation-banner">
              <div className="preparation-banner-text-container">
                <h1>Free Videos</h1>
                <p>High Quality Content for Complete Conceptual Clarity</p>
              </div>

              <div className="preparation-banner-text-container">
                <Link
                  className="explore-link"
                  to="#"
                  onClick={handleLoginClick}
                >
                  Explore Courses &#62;
                </Link>
              </div>
            </span>
          </div>

          <div className="banner-container">
            <span className="preparation-banner">
              <div className="preparation-banner-text-container">
                <h1>Previous Year Papers</h1>
                <p> Practice past years' question papers and get exam ready</p>
              </div>

              <div className="preparation-banner-text-container">
                <Link
                  className="explore-link"
                  to="#"
                  onClick={handleLoginClick}
                >
                  Explore Courses &#62;
                </Link>
              </div>
            </span>
            <span className="preparation-banner">
              <div className="preparation-banner-text-container">
                <h1>Free Quizzes</h1>
                <p>Attempt topic wise quizzes for improving your score</p>
              </div>

              <div className="preparation-banner-text-container">
                <Link
                  className="explore-link"
                  to="#"
                  onClick={handleLoginClick}
                >
                  Explore Courses &#62;
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="Exam-container">
        <h2 className="Exam-heading">Select your Exam</h2>
        {/* Tab links */}
        <div className="tab">
          <button
            className="tablinks"
            onClick={(e) => openCity(e, "Upcoming")}
            id="defaultOpen"
          >
            {" "}
            Upcoming
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "Banking")}>
            {" "}
            Banking{" "}
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "SSC")}>
            {" "}
            SSC
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "Teaching")}>
            {" "}
            Teaching
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "AE")}>
            {" "}
            AE & JE
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "IPM")}>
            {" "}
            IPM, CUET & BBA
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "NRA")}>
            {" "}
            NRA CET
          </button>

          <button className="tablinks" onClick={(e) => openCity(e, "UPSC")}>
            {" "}
            UPSC
          </button>
        </div>

        {/* Tab content */}
        <div id="Upcoming" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1470818818206-18.png"
              alt=""
            ></img>
            <p>IBPS Clerk</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1470818818206-18.png"
              alt=""
            ></img>
            <p>JAIIB Exam</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1470818818206-18.png"
              alt=""
            ></img>
            <p>IBPS PO</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1470818818206-18.png"
              alt=""
            ></img>
            <p>SBI PO</p>
          </div>
        </div>

        <div id="Banking" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2018/6/all-banking-exam-img1529910452948-13.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>Bank Exams</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2018/12/custom-preset-copy-img1543836258785-55.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>ESIC UDC</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2020/6/sbi_logo-img1592387227056-32-rs.png"
              alt=""
            ></img>
            <p>SBI Clerk</p>
          </div>
        </div>

        <div id="SSC" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2018/6/ssc-img1529910608753-38.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>SSC Exams</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2016/8/img1470917301523-57-rs.png"
              alt=""
            ></img>
            <p>SSC CGL</p>
          </div>
        </div>

        <div id="Teaching" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1474538848229-84.png"
              alt=""
            ></img>
            <p>NVS</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1464850251602-80.png"
              alt=""
            ></img>
            <p>UP TET</p>
          </div>
        </div>

        <div id="AE" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2016/8/img1470917614709-57-rs.png"
              alt=""
            ></img>
            <p>RRB JE</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/2021/8/img1630064016983-87.png"
              alt=""
            ></img>
            <p>DDA CE</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2021/6/getco-logo-img1623392798552-66.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>GET CO</p>
          </div>
        </div>

        <div id="IPM" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2020/11/set-exam-img1604404764817-95.jpg-rs-high-webp.jpg"
              alt=""
            ></img>
            <p>SET</p>
          </div>

          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2021/12/nracet-icon-img1638772250164-79.webp-rs-high-webp.webp"
              alt=""
            ></img>
            <p>CUET</p>
          </div>
        </div>

        <div id="NRA" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2021/12/nracet-icon-img1638772250164-79.webp-rs-high-webp.webp"
              alt=""
            ></img>
            <p>NRA</p>
          </div>
        </div>

        <div id="UPSC" className="tabcontent">
          <div className="Upcoming">
            <img
              src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-post-images.grdp.co/2018/6/upsc-img1529910949203-72.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>UPSC</p>
          </div>
        </div>
      </div>

      <div className="other-links-container">
        <h3>OTHER LINKS</h3>
        <hr></hr>
        <div className="links-container">
          <div className="links-box1">
            <Link
              to="#"
              className="links"
              onClick={handleLoginClick}
            >
              SSC JE Syllabus
            </Link>
            <Link
              to="#"
              target="_self"
              className="links"
              onClick={handleLoginClick}
            >
              SSC JE Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              {" "}
              SSC JE CE Syllabus
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              AAI ATC Question Papers
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              CLAT Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              CDS Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              MH CET Law Cut Off
            </Link>
          </div>
          <div className="links-box2">
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              SBI Clerk Syllabus
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              ESE IES Cutoff
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              SBI PO Syllabus
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              SSC CHSL Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              KVS Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              NDA Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              BPSC Cut Off
            </Link>
          </div>
          <div className="links-box3">
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              SBI PO Question Papers
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              GATE Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              JAIIB Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              SSC MTS Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              KVS Cut Off
            </Link>
            <Link
              to="#"
              onClick={handleLoginClick}
              className="links"
            >
              UP Police Cut Off
            </Link>
          </div>
        </div>
      </div>

      <div className="Numbers-container">
        <h1 id="Speak">Our Numbers Speak For Us</h1>
        <span className="Students-container">
          <h1 id="cr">3Cr+</h1>
          <h1 id="Registered">
            Registered
            <br />
            Students
          </h1>
        </span>

        <div className="attempt-container">
          <div className="attempt">
            <p className="attemptp1">3.44 Cr+</p>
            <p className="attemptp1">Video Classes attended</p>
          </div>

          <div className="attempt">
            <p className="attemptp2">2.97 Cr+</p>
            <p className="attemptp2">Mock Tests attempted</p>
          </div>

          <div className="attempt">
            <p className="attemptp3">2.97 Cr+</p>
            <p className="attemptp3">Mock Tests attempted</p>
          </div>
        </div>
      </div>

      <div className="App-container">
        <div className="applogo-container">
          <img
            src="https://grdp.co/cdn-cgi/image/quality=100,width=300,f=auto/https://gs-post-images.grdp.co/2021/9/background-5-img1630938710680-44.png-rs-high-webp.png"
            alt=""
            className="applogo"
          ></img>

          <span className="appinfo">
            <p>The Most Comprehensive Exam Preparation Platform</p>
            <h3>Get the BYJU'S Exam Prep App Today</h3>
            <h4>
              {" "}
              We will send you a link, open it on your phone to download the app
            </h4>
            <input type="text" placeholder="Enter your phone number" />
            <div className="playstor-container">
              <button>Get Link</button>
              <img
                src="https://grdp.co/cdn-cgi/image/quality=100,f=auto/https://gs-post-images.grdp.co/2018/10/google-play-img1540637964015-77.png-rs-high-webp.png"
                alt=""
                id="playstor"
              ></img>
            </div>
          </span>
        </div>
        <div className="paragraph-container">
          <p>
            The most comprehensive exam preparation app for Government and
            Competitive exams, BYJU'S Exam Prep (formerly Gradeup) has helped
            over 3 crore students prepare for competitive exams including
            Banking, SSC, Railway, NDA, CDS, NRA CET, Teaching, UPSC, State
            Exams, CLAT, CAT, GATE, AE/JE, BBA, Hotel Management and more.
            BYJU'S Exam Prep App helps in the complete preparation for
            competitive exams. Here, you get to prepare with live and recorded
            video classes, live online courses, and high-quality study material.
            Our huge bank of previous year question papers, test series, and
            quizzes help students prepare effectively for the upcoming exams.
            Our study materials prepared by expert faculty and subject matter
            experts help students stay updated with daily GK updates, current
            affairs, general awareness topics, and more. At BYJU'S Exam Prep,
            you can also find all relevant information like exam notifications
            and updates as well.
          </p>

          <p>
            Our Online Classroom Program follows a daily study plan with a
            detailed timetable that helps you stay focused and prepare in an
            organized manner. Alongside, we focus on providing high-quality
            study material. Our Test Series is based on the latest exam pattern
            for thorough exam preparation. At BYJU'S Exam Prep, we ensure that
            you get guidance from our well-experienced faculty who've mentored
            thousands of students for competitive exams. By downloading BYJU'S
            Exam Prep App or Login in the website, you can purchase Online
            Classroom Program and Test Series and avail yourself full access to
            Live Courses with Daily study plans, performance analysis, report
            cards, mock tests to track improvements, and more. So why wait?
            Download the BYJU'S Exam Prep App today and start your preparation
            the right way 23.
          </p>
        </div>
      </div>

      <div>
        <TestimonialsSlider />
      </div>
    </>
  );
};

export default Home;
