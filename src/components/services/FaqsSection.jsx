import { Link } from "react-router-dom"
import { faqs } from "../../data/faqs"
import FaqMoja from "./FaqMoja"

const FaqsSection = () => {
  return (
    <div className="faqs-section">
             <div className="inner-row">
                        <div className="faqs-section-content">
                                    <div className="faqs-intro">
                                               <h2>You&apos;ve got questions?,<br />We&apos;ve got answers!</h2>
                                               <p>Everything you need to know about us and what we do. Still have more questions? <Link to={"/contact"}>Please chat with our team.</Link></p>
                                    </div>
                                    <div className="faqs-body-row">
                                             { faqs.map(item => 
                                                    <FaqMoja  key={item.id} data={item} />
                                             )}
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default FaqsSection