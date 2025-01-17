import AboutHero from "../components/about/AboutHero"
import AboutStatement from "../components/about/AboutStatement"
//import TeamSection from "../components/about/TeamSection"
import ValuesSection from "../components/about/ValuesSection"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/about.css"

const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutStatement />
            <ValuesSection />
            {/* <TeamSection /> */}
            <TestimonialsSection />
            <Footer />
    </>
  )
}

export default About