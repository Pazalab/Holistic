import { Link } from "react-router-dom"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero2.jpg"
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                        <div className="hero-section-content">
                                    <div className="hero-texts">
                                               <h1>Gain <span>Control</span> of <br></br>your Weight and <span>Transform</span> your Life.</h1>
                                               <div className="hero-texts-deep">
                                                          <p>We&apos;re dedicated to helping you achieve your health goals. Our comprehensive range of services, from surgical and non-surgical weight loss procedures to personalized nutrition counseling, empowers you to embark on a transformative journey towards a healthier, happier you.</p>
                                                          <Link to={"/"}> <span className="btn-overlay"></span>Explore <span><HiOutlineArrowLongRight /></span></Link>
                                               </div>
                                    </div>

                                    <div className="hero-images">
                                               <div className="hero-image-large">
                                                      <img src={hero1} alt="" />
                                               </div>
                                               <div className="hero-image-small">
                                                         <img src={hero2} alt="" />
                                               </div>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection