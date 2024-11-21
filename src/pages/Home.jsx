import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import HeroSection from "../components/home/HeroSection"
import ServicesSection from "../components/home/ServicesSection"
import "../css/home.css"

const Home = () => {
  return (
       <>
              <Navbar />
             <HeroSection />
             <AboutSection />
             <ServicesSection />
       </>
  )
}

export default Home