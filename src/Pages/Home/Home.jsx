import HeaderHome from "../../components/HomeComponents/HeaderHome.jsx";
import HeroSection from "../../components/HomeComponents/HeroSection.jsx";
import StatsSection from "../../components/HomeComponents/StatsSection.jsx";
import StreamsSection from "../../components/HomeComponents/StreamsSection.jsx";
import SuccessStories from "../../components/HomeComponents/SuccessStories.jsx";
import FAQSection from "../../components/HomeComponents/FAQSection.jsx";
import Footer from "../../components/HomeComponents/Footer.jsx";
import "../../styles/global.css";

function Home() {
  return (
    <>
      <HeaderHome />
      <HeroSection />
      <StatsSection />
      <StreamsSection />
      <SuccessStories />
      <FAQSection />
      <Footer />
    </>
  );
}

export default Home;
