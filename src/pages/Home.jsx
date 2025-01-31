import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
//import BlogSection from "../components/home/BlogSection"
import HeroSection from "../components/home/HeroSection"
import ProcessSection from "../components/home/ProcessSection"
import ServicesSection from "../components/home/ServicesSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/home.css"

const Home = () => {
  return (
       <>
              <Navbar />
             <HeroSection />
             <AboutSection />
             <ServicesSection />
             <ProcessSection />
             <TestimonialsSection />
             {/* <BlogSection /> */}
             <Footer />
       </>
  )
}

export default Home