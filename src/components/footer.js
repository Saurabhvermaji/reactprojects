import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    alert("link clicked");

    scrollToTop();
  };

  return (
    <>
      <footer>
        <div className="allexamcontainer">
          <span className="ourapp-container">
            <p>OUR APPS</p>
            <p>BYJU'S Exam Prep: The Exam Preparation App</p>
            <img
              src="https://grdp.co/cdn-cgi/image/width=150,height=52,quality=65,f=auto/https://gs-post-images.grdp.co/2019/6/bitmap-2x-img1560775769960-75.png-rs-high-webp.png"
              alt=""
            ></img>
          </span>

          <span className="examlinks-container">
            <div className="footerexam-container">
              <h4>POPULAR EXAMS</h4>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UPSC 2023</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UPSC Syllabus</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UPSC Question Paper</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>GATE Exam</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>GATE 2024</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>IES</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>CAT Exam</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>CLAT</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UGC NET 2023</Link>
            </div>

            <div className="footerexam-container">
              <h4>SSC AND BANK</h4>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC Exams</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC CGL</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC CGL Syllabus</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC CHSL</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC GD</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SSC MTS</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>RRB NTPC</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>RRB Group D</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>Bank Exams</Link>
            </div>

            <div className="footerexam-container">
              <h4>OTHER EXAMS</h4>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>CTET 2023</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UPTET</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>REET</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>HTET</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>SUPER TET</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>KVS Recruitment</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>NVS Recruitment</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>DSSSB Recruitment</Link>
              <Link to="#" className="footer-link" onClick={handleLoginClick}>UPPSC</Link>
            </div>
          </span>

          <span className="address-container">
            <img
              src="https://grdp.co/cdn-cgi/image/width=145,height=40,quality=80,f=auto/https://gs-post-images.grdp.co/2021/9/group-img1630501108025-27.png-rs-high-webp.png"
              alt=""
            ></img>
            <p>GradeStack Learning Pvt. Ltd.</p>
            <p>Windsor IT Park, Tower - A, 2nd Floor,</p>
            <p>Sector 125, Noida,</p>
            <p>Uttar Pradesh 201303</p>
            <p>bepstudentsupport@byjus.com</p>
          </span>
        </div>

        <hr />

        <div id="last-nav">
          <span className="copyright">
            <Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link>
            <Link to="/about" className="footer-link" onClick={scrollToTop}>
              About Us
            </Link>
            <Link to="/contact" className="footer-link" onClick={scrollToTop}>
              Contact Us
            </Link>
            <Link to="/faq" className="footer-link" onClick={scrollToTop}>
              FAQs
            </Link>
            <Link to="/TermsConditions" className="footer-link" onClick={scrollToTop}>
              Terms and Conditions
            </Link>
            <Link to="/PrivacyPolicy" className="footer-link" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="footer-link" onClick={scrollToTop}>
              Sitemap
            </Link>
            <Link to="#" className="footer-link" onClick={handleLoginClick}>
              Careers
            </Link>
            <Link to="#" className="footer-link" onClick={handleLoginClick}>
              BYJU'S Exam Prep © 2023
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
