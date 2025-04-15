import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OnboardingMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Make Payment For Entrance Exam",
      description:
        "Start your journey by securing your spot. pay the required entrance exam fee to proceed your application.",
      image: "/onboardingImageOne.png",
    },
    {
      title: "Read The Article",
      description:
        "Read and understand  the article before you start the exam, As Question 1-15 would be from the article.",
      image: "/onboardingImageTwo.png",
    },
    {
      title: "Write Exams And Get Results",
      description:
        "Take exam your And see your result immediately, your performance would determine your eligibility for admission. ",
      image: "/onboardingImageThree.png",
    },
    {
      title: "Reach The Cutoff Mark and Get Admitted",
      description:
        "Take your And see your result immediately, your performance would determine your eligibility for admission. ",
      image: "/onboardingImageFour.png",
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      navigate("/assessment");
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      navigate("/select-classes");
    } else {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="grid justify-items-center">
      {/* Headbar */}
      <div className="headbar w-full shadow-[1px_0px_12px_rgba(0,0,0,0.17)]">
        <img
          src="src\assets\access_II_edu-removebg-preview 2.svg"
          alt="Access2Edu Logo"
          className="pr-4"
        />
        <h1 className="text-[#563A68] text-base">Access2Edu</h1>
      </div>

      {/* Skip Button */}
      <div className="grid justify-self-end p-2">
        <span
          className="text-sm text-gray-600 cursor-pointer justify-self-end pb-4 pt-4 flex pl-4 pr-4 gap-2"
          onClick={() => navigate("/assessment")}
        >
          Skip <ArrowForwardIcon />
        </span>{" "}
      </div>

      {/* Image */}
      <div className="w-sm h-full flex justify-items-center rounded-lg  overflow-hidden ">
        <img
          src={currentSlideData.image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-sm flex justify-center "
        />
      </div>

      {/* Text content */}
      <div className="text-center px-6 pb-4">
        <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">
          {currentSlideData.title}
        </h2>
        <p className="text-xl text-black mb-2">
          {currentSlideData.description}
        </p>
      </div>

      {/* Custom dots indicator */}
      <div className="flex justify-center items-center space-x-3 mb-6 p-2">
        {Array(totalSlides)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="cursor-pointer"
            >
              {index === currentSlide ? (
                <div className="w-16 h-3 bg-[#785491] rounded-full transition-all duration-300"></div>
              ) : (
                <div className="w-3 h-3 bg-[#d5c4e3] rounded-full hover:bg-[#d5c4e3] transition-all duration-300"></div>
              )}
            </div>
          ))}
      </div>

      {/* Navigation buttons */}
      <div className="grid w-full p-4 gap-4">
        <button
          onClick={prevSlide}
          className="bg-[#d5c4e3] text-[#785491] p-4 rounded-md  transition-colors"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#785491] text-white p-4 rounded-md transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OnboardingMobile;
