import Typewriter from "typewriter-effect";

function TypingText() {
  return (
    <span className="text-[#007CED] inline-block font-semibold">
      <Typewriter
        options={{
          strings: [
            "dev",
            "Full Stack Developer",
            "MERN Stack Developer",
            "Frontend Developer",
            "Backend Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 40,
          cursor: "|",
        }}
      />
    </span>
  );
}

export default TypingText;
 