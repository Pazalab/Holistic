import { Link, NavLink } from "react-router-dom"
import { PiPhoneCall } from "react-icons/pi";
import logo from "../../../assets/logo.png"
const Header = () => {
  return (
    <header>
              <div className="inner-row">
                        <div className="header-content">
                                    <div className="left-nav"> 
                                                <ul>
                                                         <li><NavLink to={"/"}>Home</NavLink></li>
                                                         <li><NavLink to={"/about"}>About Us</NavLink></li>
                                                         <li><NavLink to={"/services"}>Services</NavLink></li>
                                                         <li><NavLink to={"/contact"}>Contact</NavLink></li>
                                                </ul>
                                    </div>
                                    <Link to={"/"} className="logo">
                                             <img src={logo} alt="" />
                                     </Link>
                                     <div className="right-nav">
                                                <p>
                                                        <span><PiPhoneCall /></span>
                                                        +254 7123 45678
                                                </p>
                                                <Link to={"/"}>Book Consultation</Link>
                                     </div>
                        </div>
              </div>
    </header>
  )
}

export default Header