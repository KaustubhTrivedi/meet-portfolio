import Hero from "@/components/home/Hero";
import "../App.css";
import WhoAmI from "@/components/home/WhoAmI";
import Explore from "@/components/home/Explore";
import Tools from "@/components/home/Tools";
import Skills from "@/components/home/Skills";
import Footer from "@/components/home/Footer";

function App() {
  return (
    <>
      <div className="text-white font-poppins text-center space-y-12">
        <Hero />
        <WhoAmI />
        <Explore />
        <Tools />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
