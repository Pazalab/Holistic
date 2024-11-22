import { Link } from "react-router-dom"
import action from "../../assets/action.jpg"
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CallToAction = () => {
  return (
    <div className="call-to-action-section">
              <div className="inner-row">
                          <div className="call-to-action-content">
                                       <div className="call-to-action-texts">
                                                  <h3>Not Sure Where to Start?</h3>
                                                  <p>Take the first step with us! Our expert team is here to guide you with personalized solutions, compassionate support, and proven strategies tailored to your unique needs. Let’s make your weight journey simple, effective, and truly life-changing.</p>

                                                  <Link to={"/"} className="btn-link"><span className="btn-overlay"></span>Reach out to Us <span><HiOutlineArrowLongRight /></span></Link>
                                       </div>
                                       <div className="action-image">
                                              <img src={action} alt="" />
                                       </div>
                          </div>
              </div>
    </div>
  )
}

export default CallToAction