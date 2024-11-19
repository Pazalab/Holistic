import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./navcontext"
import gsap from "gsap";
import { Link, NavLink} from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png"
import { PiPhoneCall } from "react-icons/pi";

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
             if(sidebarStatus){
                    sidebarRef.current.classList.add("active");

                    let tl = gsap.timeline();

                    tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                           y: 0,
                           clipPath: 'circle(100% at center)',
                           duration: 0.75
                    })
                    tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                           x: 0,
                           duration: 0.75
                    })
             }else{
                    let tl = gsap.timeline();

                    tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                            x: "-105%",
                            duration: 0.75
                    })
                    tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                          y: "-200px",
                          clipPath: "circle(200px at top left)",
                          duration: 0.75
                    })

                    setTimeout(() => {
                           sidebarRef.current.classList.remove("active")
                    },2000)
             }
  }, [sidebarStatus])
  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                         <div className="sidebar-head">
                                    <Link to={"/"}>
                                             <img src={logo} alt="" />
                                    </Link>
                                    <span onClick={() => setSidebarStatus(false)}><IoCloseOutline /></span>
                         </div>
                         <ul>
                                 <li><NavLink to={"/"}>Home</NavLink></li>
                                 <li><NavLink to={"/about"}>About Us</NavLink></li>
                                 <li><NavLink to={"/services"}>Services</NavLink></li>
                                 <li><NavLink to={"/contact"}>Contact</NavLink></li>
                         </ul>

                         <div className="sidebar-extra">
                                  <p><span><PiPhoneCall /></span> +254 7123 45678</p>
                                  <Link to={"/"}>Book Consultation</Link>
                         </div>
              </div>
    </div>
  )
}

export default Sidebar