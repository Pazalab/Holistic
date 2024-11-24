import { services } from "../../data/services"

const ContactForm = () => {
  return (
    <div className="contact-form">
             <form>
                     <div className="form-row">
                              <label htmlFor="name">Name<span>*</span></label>
                              <input type="text" className="form-control" placeholder="Full name" />
                     </div>
                     <div className="form-row">
                              <label htmlFor="email">Email<span>*</span></label>
                              <input type="email" className="form-control" placeholder="Email address" />
                     </div>
                     <div className="form-row">
                              <label htmlFor="phone">Phone<span>*</span></label>
                              <input type="number" className="form-control" placeholder="Phone number" pattern="+[0,9]" />
                     </div>
                     <div className="form-row">
                              <label htmlFor="topic">Subject</label>
                              <select className="form-control">
                                         <option value="General Inquiry">General Inquiry</option>
                                         { services.map(item => <option value={item.title} key={item.id}>{item.title}</option>)}
                              </select>
                     </div>
                     <div className="form-row">
                            <label htmlFor="message">Message <span>*</span></label>
                            <textarea className="text-control" placeholder="Write your message here..."></textarea>
                     </div>

                     <button className="btn-submit" type="submit">Send Message</button>
             </form>
    </div>
  )
}

export default ContactForm