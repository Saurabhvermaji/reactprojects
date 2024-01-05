import React, { useEffect, useRef } from "react";
import "../styles/Home.css"

const TestimonialsSlider = () => {
  const tabRef = useRef(null);

  useEffect(() => {
    const tab = tabRef.current;
    const prevButton = tab.querySelector(".prev");
    const nextButton = tab.querySelector(".next");

    function scrollTabs(offset) {
      var startTime;
      var startScroll = tab.scrollLeft;

      function animateScroll(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var progress = timestamp - startTime;
        var easeInOutQuad = (progress) =>
          progress < 0.5
            ? 2 * progress ** 2
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        tab.scrollLeft = startScroll + offset * easeInOutQuad(progress / 500);

        if (progress < 500) {
          requestAnimationFrame(animateScroll);
        } else {
          updateButtonVisibility();
        }
      }

      requestAnimationFrame(animateScroll);
    }

    function updateButtonVisibility() {
      prevButton.style.display = tab.scrollLeft > 0 ? "block" : "none";
      nextButton.style.display =
        tab.scrollLeft < tab.scrollWidth - tab.clientWidth ? "block" : "none";
    }

    updateButtonVisibility();

    prevButton.addEventListener("click", () => scrollTabs(-900));
    nextButton.addEventListener("click", () => scrollTabs(900));

    return () => {
      // Cleanup event listeners when component unmounts
      prevButton.removeEventListener("click", () => scrollTabs(-900));
      nextButton.removeEventListener("click", () => scrollTabs(900));
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="offer-tab-container">
      <h1>Students Speak</h1>
      <div className="offer-tab" ref={tabRef}>
        <div class="offer-tab-content">
          <span>
            <div class="offer-img-container">
              <img
                src="https://gs-users-images.grdp.co/userImages/usrimg1513336864615-49.jpeg"
                alt="abc"
              />
              <h4>Dipankar Basak</h4>
            </div>

            <p class="offercontent-p2">
              BYJU'S Exam Prep (Formerly Gradeup) Test Series are best
            </p>
            <p class="offercontent-p3">
              I have been using BYJU'S Exam Prep (Formerly Gradeup) since 2018.
              It's a very good platform for job aspirants. To be honest, in cgl
              tier 2 many similar quant questions came from gradeup's speed
              test. It was very helpful.
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://gs-post-images.grdp.co/2022/3/bb63b37d8a461762f02e29ea0de58cc9c9ae58391b07b0bb142b9c608742f5ad-high.jpg"
                alt="abc"
              />
              <h4>Abhinav Jain</h4>
            </div>

            <p class="offercontent-p2">
              Best practice material at gradeup
            </p>

            <p class="offercontent-p3">
              Prep (Formerly Gradeup) app because of the best practice material available here. For Quantitative section I solved the entire book of CAT Sarvesh to nourish my basics. I found GS section the most challenging one because of its vast syllabus, I relied on Lucent Book for GK and for current affairs it was again BYJU'S Exam Prep (Formerly Gradeup).
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://gs-users-images.grdp.co/userImages/usrimg1472550856588-51.jpeg"
                alt="abc"
              />
              <h4>shubhang</h4>
            </div>

            <p class="offercontent-p2">
              mock test and their analysis cracked my exam
            </p>

            <p class="offercontent-p3">
              I am very thankful to BYJU'S Exam Prep (Formerly Gradeup) ka kafi roll rha h..... mai daily quiz solve krta hu jo bhut important hai revision k lye..... weekly mock test deta hu...... you tube k sessions leta hu...... jisse meri speed k sath accuracy bhi aachi ho gyi h..... mai science background se hu toh meri maths aur reasoning kafi aachi rhi hai...... gk k lye mne BYJU'S Exam Prep (Formerly Gradeup) ki quiz nd adda ki quiz daily solve kri h..... eng k lye mai yt nd previous paper solve krta hu...... mne BYJU'S Exam Prep (Formerly Gradeup) ki test series purchase kri hai....bhut aachi test series hai...... exam level k question....
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://graph.facebook.com/2704405736503152/picture?type=large"
                alt="abc"
              />
              <h4>Samrudh Srinath</h4>
            </div>

            <p class="offercontent-p2">
              daily gk bytes were helpful
            </p>

            <p class="offercontent-p3">
              I started prepare current affairs from BYJU'S Exam Prep (Formerly Gradeup)s daily current affairs blogs. Also I got a free mocks, sometimes because they gave me free trial and all.
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://graph.facebook.com/2704405736503152/picture?type=large"
                alt="abc"
              />
              <h4>Keshav Chauhan</h4>
            </div>

            <p class="offercontent-p2">
              BYJU'S Exam Prep (Formerly Gradeup) faculty at its best
            </p>

            <p class="offercontent-p3">
              BYJU'S Exam Prep (Formerly Gradeup) helped me a lot to begin with the preparation.I came to know about it by An Internet Ad.The faculty was great and tried to solve all the doubts put by the studentsand also gave valuable advices at times.I would like to give special thanks to Mr.Shantanu Jha sir for motivating us and also giving a different perspective to current affairs and gk.
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://lh3.googleusercontent.com/-YnYdnkxWPVA/AAAAAAAAAAI/AAAAAAAAJ80/l15Sk8JpaWE/s96-c/photo.jpg"
                alt="abc"
              />
              <h4>Mridula Bhat</h4>
            </div>

            <p class="offercontent-p2">
              quiz & mock test help to ace the exam
            </p>

            <p class="offercontent-p3">
              I used BYJU'S Exam Prep (Formerly Gradeup) right from the beginning of my prep. I wouldn't have achieved a good score if it wasn't for GradeUp. The daily quizzes, mock tests, notes were very helpful. Also, have to appreciate how relevant and similiar the questions in the mocks were compared to the actual test. The web interface of BYJU'S Exam Prep (Formerly Gradeup) is lovely with its green theme. Made the whole experience of taking quizzes enjoyable
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://gs-post-images.grdp.co/2020/5/aa012148a80ae7a589c6fa59aaf826303d7cb2bb102cdb84f8c57a98d46b4b87-low-webp.webp"
                alt="abc"
              />
              <h4>Karan Sharma</h4>
            </div>

            <p class="offercontent-p2">
              live classes are best
            </p>

            <p class="offercontent-p3">
              Live classes of BYJU'S Exam Prep (Formerly Gradeup) was the most helpful part of a BYJU'S Exam Prep (Formerly Gradeup) course. I really used to enjoy legal reasoning classes by Surajit sir. All the teachers are very helpful and solve our doubts promptly.YouTube sessions were very helpful as I got to practice a lot of questions with explanation.
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GgIwAPfmDLDHm0tuu0AEJMx5xfWZyws3V5eRKu6aGo=s96-c"
                alt="abc"
              />
              <h4>Emilyn Jose</h4>
            </div>

            <p class="offercontent-p2">
              gradeup live class & quick notes ace my preparation
            </p>

            <p class="offercontent-p3">
              I downloaded BYJU'S Exam Prep (Formerly Gradeup) App and checked the demo classes. Believe me, all the classes were excellent and I could understand each n everything in detail. They provide the lecture notes after the class. But I suggest u to take notes during the class which I found useful. Attend all the classes regularly and revise thoroughly.
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://graph.facebook.com/1720957841314220/picture?type=large"
                alt="abc"
              />
              <h4>Sushovan Acharjee</h4>
            </div>

            <p class="offercontent-p2">
              gradeup live class & quick notes ace my preparation
            </p>

            <p class="offercontent-p3">
              Toshiba mam has vast knowledge in her subject and i liked to attend her classes a lot. She has great conceptual clarity and indeed very inspiring. Also if i had doubts i could post it in BYJU'S Exam Prep (Formerly Gradeup) easily to find the results. Also the previous years and section wise Questions helped me a lot
            </p>
          </span>

          <span>
            <div class="offer-img-container">
              <img
                src="https://gs-post-images.grdp.co/2021/6/813eab4db780e0262cc554d1d1f39ac97769111f02346ae93e1e8d059070675a-high.jpg"
                alt="abc"
              />
              <h4>Sushovan Acharjee</h4>
            </div>

            <p class="offercontent-p2">
              gradeup study plan helped me alot
            </p>

            <p class="offercontent-p3">
              The mock tests of Labour Welfare keep my enthused throughout the time before exam. And I could even check my poor areas, which i used to noted down for proper revision again. Jaisa k BYJU'S Exam Prep (Formerly Gradeup) faculty batate thy usko full delegation k sth follow krti thi nd quick revision k liye flash cards notes bnati thi.
            </p>
          </span>
        </div>

        <div class="tab-buttons">
          <div class="prev" onclick="scrollTabs(-900)"> {" "} &#60;</div>
          <div class="next" onclick="scrollTabs(900)"> &#62;</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
