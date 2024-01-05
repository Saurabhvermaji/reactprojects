import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./styles/App.css"
import Home from "./pages/Home";
import Practice from "./pages/practice";
import About from "./pages/about";
import Premium from "./pages/premium";
import StudyMaterial from "./pages/studymaterial";
import TestSeries from "./pages/testseries";
import Doubts from "./pages/doubts";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import TermsConditions from "./pages/terms&conditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/sitemap";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/TestSeries" element={<TestSeries />} />
        <Route path="/doubts" element={<Doubts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
