import { services } from "../../data/services"
import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"
const ContactForm = () => {
  const { handleSubmit, register, formState: { errors }, reset} = useForm();
   const API_PATH = import.meta.env.VITE_SERVER_URL;
   const [ btnMsg, setBtnMsg ] = useState("Send Message");
   const [ serverMsg, setServerMsg ] = useState("");

  const submitForm = (data) => {
    setBtnMsg("Sending...");
    axios.post(API_PATH, {
           form_data: data
    }).then(res => {
             setServerMsg(res.data.message);
             reset();
    }).finally(() => {
            setBtnMsg("Sent");
            setTimeout(() => {
                   setBtnMsg("Send Message");
                   setServerMsg("")
            }, 4500)
    })
  }
  return (
    <div className="contact-form">
             <form onSubmit={handleSubmit(submitForm)}>
                     <div className="form-row">
                              <label htmlFor="name">Name<span>*</span></label>
                              <input type="text" {...register("name", { required: "Name input is required"})} className="form-control" placeholder="Full name" />
                              <span className="error">{errors.name && errors.name.message}</span>
                     </div>
                     <div className="form-row">
                              <label htmlFor="email">Email<span>*</span></label>
                              <input type="email" className="form-control" {...register("email", { required: "Email input is required"})} placeholder="Email address" />
                              <span className="error">{errors.email && errors.email.message}</span>
                     </div>
                     <div className="form-row">
                              <label htmlFor="phone">Phone<span>*</span></label>
                              <input type="number" className="form-control" {...register("phone", { required: "Phone input is required"})} placeholder="Phone number" pattern="+[0,9]" />
                              <span className="error">{errors.phone && errors.phone.message}</span>
                     </div>
                     <div className="form-row">
                              <label htmlFor="topic">Subject</label>
                              <select className="form-control" {...register("subject")}>
                                         <option value="General Inquiry">General Inquiry</option>
                                         { services.map(item => <option value={item.title} key={item.id}>{item.title}</option>)}
                              </select>
                     </div>
                     <div className="form-row">
                                <input type="text" className="honeypot" {...register("honey")} />
                     </div>
                     <div className="form-row">
                            <label htmlFor="message">Message <span>*</span></label>
                            <textarea className="text-control" {...register("msg", { required: "Message input is required"})} placeholder="Write your message here..."></textarea>
                            <span className="error">{errors.msg && errors.msg.message}</span>
                     </div>

                     <button className="btn-submit" type="submit">{btnMsg}</button>
             </form>

             <p className="server-msg">{serverMsg}</p>
    </div>
  )
}

export default ContactForm