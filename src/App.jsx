import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HangingLogo from "./components/HangingLogo";

const App = () => {
  return (
    <div className="min-h-screen bg-[#222222] text-[#EDEDED] relative overflow-hidden">

      <HangingLogo />

      <Navbar />
      <Home />
      <Projects />

      <footer className="border-t border-[#333333] py-6 text-center text-sm text-[#A1A1AA] mt-40">
        © 2026 Kapil. Built with ❤️ using React & Tailwind.
      </footer>

    </div>
  );
};

export default App;
