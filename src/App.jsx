import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HangingLogo from "./components/HangingLogo";
import More from "./components/More";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#222] text-[#EDEDED] relative overflow-hidden">
      <HangingLogo />
      <Navbar />
      <Home />
      <Projects />
      <More />
      <Footer />
    </div>
  );
};

export default App;
