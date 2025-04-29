import React from "react";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import classroom from "../../assets/classroom.png";
import quoteIcon from "../../assets/quote.png";
import "../../styles/global.css";

const SuccessStories = () => {
  return (
    <section className="success-stories-container">
      {/* Top Certification Section */}
      <div className="certification-banner">
        <div className="banner-image">
          <img src={student1} alt="Certified Learning" />
        </div>
        <div className="banner-content">
          <h3>Learn Online, Get Certified by Top Schools You Trust.</h3>
          <p>
            With interactive lessons, real-world projects, and expert
            instructors, your child can thrive from the comfort of home.
          </p>
          <button className="btn btn-primary">Explore Courses</button>
        </div>
      </div>

      {/* Student Success Stories */}
      <section className="success-stories">
        <div className="section-title">
          <h2>Student Success Stories</h2>
          <p>What our students say about us - real Stories, real impact</p>
        </div>

        <div className="testimonial-grid">
          {/* Aisha Testimonial */}
          <div className="testimonial-card">
            <div className="student-top">
              <img src={testimonial1} alt="Aisha" className="student-photo" />
              <h4 className="student-name">Aisha</h4>
            </div>
            <img src={quoteIcon} alt="Quote" className="quote-icon" />
            <p className="testimonial-text">
              "Before Access2Edu, I struggled to find quality science lessons.
              Now, I can learn at my own pace, take quizzes, and even join
              discussions. It feels just like a real classroom!"
            </p>
          </div>

          {/* Daniel Testimonial */}
          <div className="testimonial-card">
            <img src={quoteIcon} alt="Quote" className="quote-icon" />
            <p className="testimonial-text">
              “Access2Edu helped me explore digital art without needing
              expensive tools. The courses are easy to follow, and now I’m
              creating designs I never thought possible!”
            </p>
            <div className="student-bottom">
              <h4 className="student-name">Daniel</h4>
              <img src={testimonial2} alt="Daniel" className="student-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <div className="students-section">
        <div className="students-content">
          <h3>Students</h3>
          <p>
            Students across Africa are learning to be the future leaders and
            problem solvers the continent needs.
          </p>
          <div className="btn-group">
            <button className="btn btn-outline">Sign In</button>
            <button className="btn btn-primary">Start Learning</button>
          </div>
        </div>
        <div className="students-image">
          <img src={student2} alt="Student" />
        </div>
      </div>

      {/* Teachers Section */}
      <div className="teachers-section">
        <div className="teachers-image">
          <img src={classroom} alt="Classroom" />
        </div>
        <div className="teachers-content">
          <h3>Our Teachers</h3>
          <p>
            Experienced, passionate, and trained in African & global pedagogy.
            They are more than instructors – they are mentors.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
