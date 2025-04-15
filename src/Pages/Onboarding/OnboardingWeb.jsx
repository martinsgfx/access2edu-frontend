import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnboardingWeb() {
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-3/4 bg-[#fcf8ef] rounded-xl shadow-lg p-6 pl-10 pr-10">
        {/* Image */}
        <div className="w-2xl h-full rounded-lg  overflow-hidden ">
          <img
            src={currentSlideData.image}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="text-center px-4 pb-4">
          <h2 className="text-4xl font-bold text-[#3D3D3D] mb-6">
            {currentSlideData.title}
          </h2>
          <p className="text-2xl text-black mb-2">
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
        <div className="flex justify-between w-full p-4">
          <button
            onClick={prevSlide}
            className="bg-[#d5c4e3] text-[#785491] py-2 px-6 rounded-md hover:bg-[#785491] hover:text-white transition-colors"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#785491] text-white py-2 px-12 rounded-md hover:bg-[#614475] transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingWeb;
