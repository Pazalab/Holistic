import { team } from "../../data/team"

const TeamSection = () => {
  return (
    <div className="team-section">
              <div className="inner-row">
                           <div className="team-section-content">
                                      <div className="team-intro">
                                               <h2>Meet the Team Behind our Clinic.</h2>
                                               <p>Behind every success story at our clinic is a dedicated team of skilled professionals committed to your journey. From compassionate doctors and experienced nutritionists to supportive therapists and wellness specialists, our experts combine innovation, care, and expertise to deliver exceptional results. Get to know the passionate individuals who make your transformation possible.</p>
                                      </div>

                                      <div className="team-row">
                                               { team.map(item =>
                                                       <div className="team-moja" key={item.id}>
                                                                 <img src={item.image} alt="" />
                                                                 <h3>{item.name}</h3>
                                                                 <h5>{item.position}</h5>
                                                       </div>
                                               )}
                                      </div>
                           </div>
              </div>
    </div>
  )
}

export default TeamSection