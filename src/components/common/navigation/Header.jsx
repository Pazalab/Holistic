import { Link, NavLink } from "react-router-dom"
import { PiPhoneCall } from "react-icons/pi";
import logo from "../../../assets/logo.png"
import { LuMenu } from "react-icons/lu";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);

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
                                                        +254 756 484593
                                                </p>
                                                <Link to={"/contact"}>Book Consultation</Link>

                                                <span className="menu-item" onClick={() => setSidebarStatus(true)}>
                                                            <LuMenu />
                                                </span>
                                     </div>
                        </div>
              </div>
    </header>
  )
}

export default Header