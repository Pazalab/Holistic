import { useState } from "react";
import { services } from "../../data/services"
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ServicesSection = () => {
    const [ active, setActive ] = useState("Non Surgical Options");
    const raw_tabs = services.map(item => item.category);
    const tabs = [...new Set(raw_tabs)]
  return (
    <div className="services-section">
               <div className="inner-row">
                        <div className="services-section-content">
                                   <div className="services-intro">
                                               <h3>What We Do</h3>
                                               <h2><span>Transformative</span> Solutions for Lifelong Wellness.</h2>
                                               <p>Unlock a healthier, happier you with our transformative wellness solutions. We offer personalized care designed for lasting results. Backed by cutting-edge science and a dedicated team, we&apos;re here to guide you every step of the way, helping you achieve your goals and embrace lifelong vitality.</p>
                                   </div>

                                   <div className="services-content-row">
                                              <div className="services-tabs">
                                                         <ul>
                                                                  { tabs.map(item => <li onClick={() => setActive(item)} className={ active === item ? 'active': ''} key={item}>{item}</li>)}
                                                         </ul>

                                                         <div className="service-call-to-action">
                                                                    <h3>Ready to embark on your weight management journey?</h3>

                                                                    <p><span></span> Call us on: +254 7123 45678</p>
                                                                    <p className="cntr">or</p>
                                                                    <Link to={"/"}>Get in Touch</Link>
                                                         </div>
                                              </div>
                                              <div className="services-tab-content">
                                                         { active === "Non Surgical Options" ?
                                                               <div className="tab-container">
                                                                         { services.filter(item => item.category === "Non Surgical Options").map(kitu =>
                                                                                <div className="service-moja" key={kitu.id}>
                                                                                           <img src={kitu.image} alt="" />
                                                                                           <div className="service-texts">
                                                                                                     <div className="texts-column">
                                                                                                              <h4>{kitu.title}</h4>
                                                                                                              <p>{kitu.short_desc}</p>
                                                                                                     </div>
                                                                                                     <Link to={"/"}>Read More<span><GoArrowRight /></span></Link>
                                                                                           </div>
                                                                                </div>
                                                                         )}
                                                               </div>
                                                           :
                                                                <div className="tab-container">
                                                                         { services.filter(item => item.category === "Surgical Options").map(kitu =>
                                                                                <div className="service-moja" key={kitu.id}>
                                                                                           <img src={kitu.image} alt="" />
                                                                                           <div className="service-texts">
                                                                                                     <div className="texts-column">
                                                                                                              <h4>{kitu.title}</h4>
                                                                                                              <p>{kitu.short_desc}</p>
                                                                                                     </div>
                                                                                                     <Link to={"/"}>Read More<span><GoArrowRight /></span></Link>
                                                                                           </div>
                                                                                </div>
                                                                         )}
                                                                </div>
                                                           }
                                              </div>
                                   </div>
                        </div>
               </div>
    </div>
  )
}

export default ServicesSection