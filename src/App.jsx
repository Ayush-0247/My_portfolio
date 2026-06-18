import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useState } from "react";
const App = () => {
  const [showAbout, setShowAbout] = useState(false);

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

      smoothScroll(
        about.offsetTop,
        1000,
      );
    }, 100);
  };
  return (
    <div>
      <Header />
      <Hero onButtonClick={handleClick} />
      {showAbout && <About />}
    </div>
  );
};

export default App;
