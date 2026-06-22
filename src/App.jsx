import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Robot from "./components/Robot";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import { useState } from "react";
const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const robotMessage = showAbout
    ? "Hello! I am Shreya, How may i help you today! ?"
    : "Click the button to learn more!";

  const smoothScroll = (targetY, duration) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = () => {
    setShowAbout(true);

    setTimeout(() => {
      const about = document.getElementById("about");

      smoothScroll(about.offsetTop, 1000);
    }, 100);
  };

  const handleClickforExperiences = () => {
    setShowExperiences(true);

    setTimeout(() => {
      const experiences = document.getElementById("experiences");

      smoothScroll(experiences.offsetTop, 1000);
    }, 100);
  };

  const handleClickforProjects = () => {
    setShowProjects(true);

    setTimeout(() => {
      const projects = document.getElementById("projects");

      smoothScroll(projects.offsetTop, 1000);
    }, 100);
  };

  return (
    <div className="relative">
      <Hero onButtonClick={handleClick} />
      {showAbout && (
        <>
          <About onButtonClick={handleClickforExperiences} />
          {/* <Footer /> */}
        </>
      )}
      <Robot
        message={robotMessage}
        className="fixed bottom-0 right-0 z-[9999] origin-bottom-right scale-[0.5]"
      />
      {showExperiences && (
        <Experiences  onButtonClick={handleClickforProjects} />
      )}{" "}
      {showProjects  && <Project />}
           <Footer />
    </div>
  );
};

export default App;
