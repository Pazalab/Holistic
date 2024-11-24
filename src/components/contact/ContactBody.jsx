import ContactForm from "./ContactForm"
import { BsEnvelope } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const ContactBody = () => {
  return (
    <div className="contact-body">
              <div className="inner-row">
                         <div className="contact-body-content">
                                     <div className="contact-body-texts">
                                                <h3>Get in Touch</h3>
                                                <h2>Ask us any questions about our services</h2>
                                                <p>Ready to take the first step toward a healthier, happier you? Our team is here to guide and support you every step of the way. Contact us today to schedule your consultation or ask any questions. Let’s start your journey to lasting wellness together!</p>

                                                <div className="contact-details">
                                                            <div className="detail-box">
                                                                      <span><BsEnvelope /></span>
                                                                      <div className="detail-inner">
                                                                                <h4>Send us mail</h4>
                                                                                <p>support@holisticweightmgmt.com</p>
                                                                      </div>
                                                            </div>
                                                            <div className="detail-box">
                                                                      <span><LuPhoneCall /></span>
                                                                      <div className="detail-inner">
                                                                                <h4>Give us a call</h4>
                                                                                <p>+254 7123 45678</p>
                                                                      </div>
                                                            </div>
                                                            <div className="detail-box">
                                                                      <span><IoLocationOutline /></span>
                                                                      <div className="detail-inner">
                                                                                <h4>Visit our offices</h4>
                                                                                <p>support@holisticweightmgmt.com</p>
                                                                      </div>
                                                            </div>
                                                </div>
                                     </div>
                                     <ContactForm />
                         </div>
              </div>
    </div>
  )
}

export default ContactBody