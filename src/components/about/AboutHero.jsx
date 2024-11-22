import about1 from "../../assets/about3.jpg"
import about2 from "../../assets/about4.jpg"

const AboutHero = () => {
  return (
    <div className="hero-part">
               <div className="inner-row">
                         <div className="hero-part-content">
                                    <div className="top-part">
                                                <div className="intro-texts">
                                                          <h3>Who We Are</h3>
                                                          <h1>We Transform lives with Personalized Weight Management Solutions.</h1>
                                                </div>
                                                <div className="intro-images">
                                                          <img src={about1} alt="" />
                                                          <img src={about2} alt="" />
                                                </div>
                                    </div>
                                    <div className="bottom-part">
                                              <div className="bottom-part-inner">
                                                       <p>For years, the Holistic Weight Management Centre has been at the forefront of providing comprehensive weight management solutions in Nairobi, Kenya. Our dedicated team of experts has helped countless individuals achieve their health goals through a personalized approach that addresses the mind, body, and spirit.</p>
                                                        <p>Today, we continue to pioneer innovative treatments and therapies. Our state-of-the-art facility offers a wide range of services, including surgical and non-surgical weight loss procedures, personalized nutrition counseling, and mental health support. Our commitment to excellence ensures that you receive the highest quality care and guidance throughout your journey.</p>
                                                        <p>As we look to the future, we remain dedicated to staying at the forefront of medical advancements and wellness trends. Our vision is to empower individuals to achieve their optimal health and well-being, inspiring lasting change and a brighter future for all.</p>
                                              </div>
                                    </div>

                                    <div className="numbers-row">
                                             <div className="number-moja">
                                                       <h2>15</h2>
                                                       <h4>Years of Experience</h4>
                                             </div>
                                             <div className="number-moja">
                                                        <h2>500<span>+</span></h2>
                                                        <h4>Surgeries Performed</h4>
                                             </div>
                                             <div className="number-moja">
                                                        <h2>10,000<span>+</span></h2>
                                                        <h4>Clients Served</h4>
                                             </div>
                                             <div className="number-moja">
                                                        <h2>98%</h2>
                                                        <h4>Client Satisfaction</h4>
                                             </div>
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default AboutHero