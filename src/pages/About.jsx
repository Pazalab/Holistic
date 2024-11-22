import AboutHero from "../components/about/AboutHero"
import AboutStatement from "../components/about/AboutStatement"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"

const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutStatement />
    </>
  )
}

export default About