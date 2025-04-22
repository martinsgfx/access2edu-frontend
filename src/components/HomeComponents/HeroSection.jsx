import React from "react";
import "../../styles/global.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Decorative Stars */}
      <img src="/src/assets/Component 3.png" alt="star" className="star star-top-left" />
      <img src="/src/assets/Component 3.png" alt="star" className="star star-top-meddle" />
      <img src="/src/assets/Component 3.png" alt="star" className="star star-top-up" />
      <img src="/src/assets/Component 3.png" alt="star" className="star star-top-center" />
      <img src="/src/assets/Component 8.png" alt="star" className="star star-top-right" />
      <img src="/src/assets/Component 7.png " alt="star" className="star star-bottom-right" />

      <div className="hero-content">
        <h1>
          Quality Education Made{" "}
          <span className="typing-text">Accessible</span> for Every Child
        </h1>
        <p>
          Slash School Fees by 60%—Get a Recognized Certificate from the Best School in Town!
        </p>
        <div className="hero-buttons">
          <button className="button">Students</button>
          <button className="button secondary">Parents</button>
          <button className="button secondary">Teachers</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/Hero-image.png" alt="Hero" className="students-img" />

        {/* Affiliate Card - Image */}
        <div className="affiliate-card">
          <img src="/src/assets/volunteers.png" alt="Our Affiliate Schools" className="affiliate-image" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
