import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {

  const handleLoginClick = (e) => {
    e.preventDefault();
    alert("link clicked");
  };

  return (
    <div>
      <nav className="header-container">
        {/* 1st Container */}
        <div className="container">
          <span className="logo-container">
            <img
              src="https://gradeup-question-images.grdp.co/liveData/f/2022/7/bep_logo_light_72.svg"
              alt=""
              className="logo"
            />
          </span>

          <div className="dropdown">
            <Link to="/">Home &#11167;</Link>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLoginClick}>
                Free Videos
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <Link to="/practice"> Practice &#11167;</Link>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLoginClick}>
                Quizzes
              </Link>
              <Link to="#" onClick={handleLoginClick}>
                Previous Papers
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <Link to="/studymaterial">Study Material &#11167;</Link>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLoginClick}>
                Bank
              </Link>
              <Link to="#" onClick={handleLoginClick}>
                SSC Exams
              </Link>
              <Link to="#" onClick={handleLoginClick}>
                Teaching Exams
              </Link>
            </div>
          </div>
          <Link to="/testseries" className="normallinks">
            {" "}
            Test Series{" "}
          </Link>
          <Link to="/doubts" className="normallinks">
            {" "}
            Doubts
          </Link>
          <Link to="/premium" className="normallinks"> {" "} Premium{" "}</Link>
        </div>

        <div className="container">
          <i className="fas fa-search" class="fa fa-search"></i>

          <div className="dropdown">
            <Link
              to="#"
              onClick={handleLoginClick}
              className="searchcource-button"
            >
              PO, Clerk, So, Insurance &#11167;
            </Link>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLoginClick}>
                SSC & Railway
              </Link>
              <Link to="#" onClick={handleLoginClick}>
                IAS
              </Link>
              <Link to="#" onClick={handleLoginClick}>
                CAT & MBA
              </Link>
            </div>
          </div>

          <Link to="#" onClick={handleLoginClick} className="register-button">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
