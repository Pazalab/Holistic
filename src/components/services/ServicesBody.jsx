import { useState } from "react"
import { services } from "../../data/services"
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ServicesBody = () => {
    const [active, setActive] = useState("All")
  return (
    <div className="services-body">
                <div className="inner-row">
                           <div className="services-body-content">
                                    <div className="services-body-tabs">
                                              <ul>
                                                       <li onClick={() => setActive("All")} className={active === "All" ? "active" : ''}>All</li>
                                                       <li onClick={() => setActive("Non Surgical Options")} className={active === "Non Surgical Options" ? "active" : ''}>Non Surgical Options</li>
                                                       <li onClick={() => setActive("Surgical Options")} className={active === "Surgical Options" ? "active" : ''}>Surgical Options</li>
                                              </ul>
                                    </div>

                                    <div className="services-body-row">
                                             { active === "All" ?
                                                   <div className="tab-container">
                                                         { services.map(kitu =>
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
                                                   active === "Non Surgical Options" ?
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
  )
}

export default ServicesBody