import React, { useState } from "react";
import "../../styles/global.css";
import profileImg from "../../assets/Ellipse 4.png"; // ✅ Replace with your own profile image

const StreamsSection = () => {
  const [openSubjectIndex, setOpenSubjectIndex] = useState(null);
  const [showAllStreams, setShowAllStreams] = useState(false);

  const toggleSubjects = (index) => {
    setOpenSubjectIndex((prev) => (prev === index ? null : index));
  };

  const subjects = [
    "Physics",
    "English Language",
    "Civic Education",
    "Mathematics",
    "Chemistry",
    "Biology",
    "Geography",
    "Book Keeping",
  ];

  const streams = [
    {
      title: "Science",
      image: "/assets/science.png",
      description:
        "Unlock the power of science - Experiment, innovate, and change the world.",
      head: "Mr. John Chinedu",
    },
    {
      title: "Art",
      image: "/assets/science.png",
      description:
        "Unlock the power of creativity - Express, design, and innovate.",
      head: "Mr. John Chinedu",
    },
    {
      title: "Commercial",
      image: "/assets/science.png",
      description: "Master the world of business - Strategize, plan, and grow.",
      head: "Mr. John Chinedu",
    },
    {
      title: "Vocational study",
      image: "/assets/science.png",
      description:
        "Unlock the power of skill - Learn, practice, and build for life.",
      head: "Mr. John Chinedu",
    },
  ];

  return (
    <section className="streams-section">
      <div className="streams-header">
        <h2>
          Explore our Academic Streams For <span className="highlight">Senior</span> Students
        </h2>
        <p>
          Whether your child is starting from scratch or looking to upskill, we
          offer the perfect program tailored to their needs.
        </p>

        {!showAllStreams && (
          <button className="browse-all" onClick={() => setShowAllStreams(true)}>
            Browse All →
          </button>
        )}
      </div>

      <div className="streams">
        {(showAllStreams ? streams : streams.slice(0, 3)).map((stream, index) => (
          <div key={index} className="stream-card">
            <div className="stream-image">
              <img src={stream.image} alt={stream.title} />
            </div>
            <h3>{stream.title}</h3>
            <p>{stream.description}</p>

            <div className="profile-section">
              <img src={profileImg} alt={stream.head} className="profile-pic" />
              <div className="profile-text">
                <small className="head-title">Head of {stream.title}</small>
                <strong className="head-name">{stream.head}</strong>
              </div>
            </div>

            <div className="card-buttons">
              <button
                className="subject-button"
                onClick={() => toggleSubjects(index)}
              >
                Subject <span>{openSubjectIndex === index ? "▲" : "→"}</span>
              </button>
              <button className="get-started">Get Started</button>
            </div>

            <span className="students-count">200+ Students</span>
          </div>
        ))}
      </div>

      {openSubjectIndex !== null && (
        <div className="subjects-list">
          {subjects.map((subject, i) => (
            <div key={i} className="subject-item">
              <input
                type="radio"
                id={`subject-${openSubjectIndex}-${i}`}
                name={`subject-${openSubjectIndex}`}
              />
              <label htmlFor={`subject-${openSubjectIndex}-${i}`}>
                {subject}
              </label>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default StreamsSection;
