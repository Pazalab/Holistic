import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import CallToAction from "./CallToAction"
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={ pathname === "/contact" ? "adjust" : ""}>
             <div className="inner-row">
                       { pathname === "/contact" ? "" : <CallToAction /> }
                       
                      <div className="footer-content">
                                  <div className="footer-column texts">
                                              <div className="footer-logo">
                                                        <img src={logo} alt="" />
                                              </div>
                                              <p>We empower lasting transformation through personalized weight management plans, expert guidance, and innovative treatments.</p>
                                              <p className="location">Hemingway Drive, 350 N Broadway, Kileleshwa Nairobi.</p>
                                              <p>+254 7123 45678</p>
                                              <p>support@hwmc.com</p>
                                  </div>
                                  <div className="footer-column grid">
                                              <div className="wrap-column">
                                                        <h3>Quick Links</h3>
                                                         <ul>
                                                                  <li><Link to={"/"}>Home</Link></li>
                                                                  <li><Link to={"/about"}>About</Link></li>
                                                                  <li><Link to={"/services"}>Services</Link></li>
                                                                  <li><Link to={"/"}>Insights</Link></li>
                                                                  <li><Link to={"/contact"}>Contact</Link></li>
                                                         </ul>
                                              </div>
                                              <div className="wrap-column">
                                                          <h3>Connect with Us </h3>
                                                          <ul className="social-links">
                                                                   <li><Link><span><FaFacebookF /></span></Link></li>
                                                                   <li><Link><span><FaInstagram/></span></Link></li>
                                                                   <li><Link><span><FaXTwitter /></span></Link></li>
                                                                   <li><Link><span><FaLinkedinIn /></span></Link></li>
                                                          </ul>
                                              </div>
                                  </div>

                      </div>
                      <div className="copyright">
                                <p>&copy; {new Date().getFullYear()} Holistic Weight Management Center.</p>
                                <div className="row">
                                         <p>Terms of Service</p>
                                         <p>Privacy Policy</p>
                                </div>
                      </div>
             </div>
    </footer>
  )
}

export default Footer