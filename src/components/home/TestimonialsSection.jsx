import { useLocation } from "react-router-dom";
import testimonialImg from "../../assets/testimonial2.jpg"
import { testimonials } from "../../data/testimonials"
import { BsChatRightQuote } from "react-icons/bs";
const TestimonialsSection = () => {
  const { pathname } = useLocation();
  
  return (
    <div className={ pathname === "/" ? "testimonials-section" : "testimonials-section adjust"}>
               <div className="inner-row">
                          <div className="testimonials-content">
                                     <div className="testimonials-intro">
                                                <h3>testimonials</h3>
                                                 <h2>Client experiences reflect our commitment to care.</h2>
                                     </div>

                                     <div className="testimonials-row">
                                                 <div className="testimonial-image">
                                                          <img src={testimonialImg} alt="" />
                                                 </div>
                                                 <div className="testimonials-wrapper">
                                                          { testimonials.map(item => 
                                                                 <div className="testimonial-moja" key={item.id}>
                                                                           <span><BsChatRightQuote /></span>
                                                                           <p>{item.content}</p>
                                                                           <h4>~ {item.name}</h4>
                                                                 </div>
                                                          )}
                                                 </div>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default TestimonialsSection