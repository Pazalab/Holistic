import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import FaqsSection from "../components/services/FaqsSection"
import ServiceHero from "../components/services/ServiceHero"
import ServicesBody from "../components/services/ServicesBody"
import "../css/services.css"

const Service = () => {
  return (
    <>
           <Navbar />
           <ServiceHero />
           <ServicesBody />
           <FaqsSection />
           <Footer />
    </>
  )
}

export default Service