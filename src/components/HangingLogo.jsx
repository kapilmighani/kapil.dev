import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HangingLogo = () => {
  const [stage, setStage] = useState("swing");

  const fallDuration = 2.3;

  useEffect(() => {
    if (stage === "fall") {
      const hideTimer = setTimeout(() => {
        setStage("hidden");
      }, fallDuration * 1000 + 200);

      return () => clearTimeout(hideTimer);
    }

    if (stage === "hidden") {
      const respawnTimer = setTimeout(() => {
        setStage("swing");
      }, 5500);

      return () => clearTimeout(respawnTimer);
    }
  }, [stage]);

  if (stage === "hidden") return null;

  return (
    <div className="fixed top-0 left-[40px] z-[9999] flex flex-col items-center">

      {/* Rope */}
      {stage === "swing" && (
        <div
          onMouseEnter={() => setStage("fall")}
          className="w-[1.5px] h-[38px] bg-gray-400 cursor-crosshair"
        />
      )}

      {/* Text */}
      <motion.div
        key={stage}
        initial={{ rotate: 0 }}
        animate={
          stage === "swing"
            ? { rotate: [-20, 20, -20] }
            : { y: "100vh", rotate: 360 }
        }
        transition={
          stage === "swing"
            ? {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }
            : {
                duration: fallDuration,
                ease: "easeIn",
              }
        }
        style={{
          fontSize: "20px",
          transformOrigin: "top center",
        }}
        className="font-bold tracking-wide"
      >
        <span className="text-white">Kapil</span>
        <span className="text-[#007CED]">.dev</span>
      </motion.div>
    </div>
  );
};

export default HangingLogo;
