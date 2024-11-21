import { Link } from "react-router-dom"
import { features } from "../../data/features"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"

const AboutSection = () => {
  return (
    <div className="about-section">
              <div className="inner-row">
                         <div className="features-content">
                                      <div className="features-intro">
                                                 <h2>Why you Should trust us? <br /> Get to Know Us</h2>
                                      </div>
                                      <div className="features-row">
                                                { features.map(item => 
                                                        <div className="feature-moja" key={item.id}>
                                                                   <img src={item.icon} alt="" />
                                                                   <h4>{item.title}</h4>
                                                                   <p>{item.description}</p>
                                                        </div>
                                                )}
                                      </div>
                         </div>

                         <div className="about-content">
                                   <div className="about-texts-column">
                                               <h3>About Us</h3>
                                               <h2>Your Journey to <span>Optimal Health</span> Starts Here</h2>
                                               <p>HWMC (Holistic Weight Management Center) is  a premier weight management center in Kenya, dedicated to transforming lives through a holistic approach to health and wellness. Specializing in Bariatric services, personalized nutrition plans, and general wellness programs, we empower our clients to achieve sustainable, long-term health. Whether you&apos;re seeking surgical solutions or tailored lifestyle changes, our comprehensive offerings are designed to meet your unique needs, ensuring every individual receives the care and attention they deserve.</p>

                                               <p>With a foundation in science and a commitment to compassionate care, our expert team stands by your side at every stage of the weight management journey. From initial consultations to post-treatment support, we help you regain confidence, vitality, and balance.</p>

                                               <Link to={"/"} className="btn-link"><span className="btn-overlay"></span>Read More <span><HiOutlineArrowLongRight /></span></Link>
                                   </div>
                                   <div className="about-texts-images">
                                             <img src={about1} alt="" />
                                             <img src={about2} alt="" />
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default AboutSection