import React from "react";
import "./HeroText.css";

const HoverLetter = ({ char, colors }) => {
  const defaultColor = "#EDEDED";

  const randomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const handleMouseEnter = (e) => {
    const newColor = randomColor();
    e.target.style.color = newColor;
    e.target.classList.add("shake-horizontal");

    setTimeout(() => {
      e.target.style.color = defaultColor;
      e.target.classList.remove("shake-horizontal");
    }, 2500); // smoother
  };

  return (
    <span
      className="inline-block cursor-pointer text-[#EDEDED]"
      onMouseEnter={handleMouseEnter}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
};

const HeroText = () => {
  const lines = [
    "Welcome to my digital space.",
    "I design and develop high-performance web applications that combine clean design,",
    "speed, and seamless cross-device experience."
  ];

  const colors = [
    "#007CED",
    "#22C55E",
    "#EC4899",
    "#38BDF8",
    "#FACC15",
    "#8B5CF6",  
  ];

  return (
    <h1 className="text-5xl md:text-lg  leading-tight">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap">
          {line.split("").map((char, index) => (
            <HoverLetter
              key={`${lineIndex}-${index}`}
              char={char}
              colors={colors}
            />
          ))}
        </div>
      ))}
    </h1>
  );
};

export default HeroText;
