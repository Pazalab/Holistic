import { useParams } from "react-router-dom"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { services } from "../data/services";

const SingleService = () => {
    const { name } = useParams();
    const service = services.find(item => item.url_param === name);
  return (
    <>
            <Navbar />
            <div className="single-service-body">
                       <div className="inner-row">
                                   <div className="single-service-body-content">
                                               <div className="service-image">
                                                        <img src={service.image} alt="" />
                                               </div>
                                               <div className="service-texts">
                                                          <h2>{service.title}</h2>

                                                          {service.excerpt.map(item => <p key={item}>{item}</p>)}
                                               </div>
                                   </div>
                       </div>
            </div>
            <Footer />
    </>
  )
}

export default SingleService