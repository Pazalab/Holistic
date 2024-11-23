import { values } from "../../data/values"

const ValuesSection = () => {
  return (
    <div className="values-section">
               <div className="inner-row">
                        <div className="values-section-content">
                                      <h2>Values that Drive our Journey.</h2>

                                      <div className="values-section-row">
                                               { values.map(item => 
                                                     <div className="value-moja" key={item.id}>
                                                               <img src={item.image} alt="" />
                                                               <div className="value-texts">
                                                                         <h3>{item.title}</h3>
                                                                         <p>{item.description}</p>
                                                               </div>
                                                     </div>
                                               )}
                                      </div>
                        </div>
               </div>
    </div>
  )
}

export default ValuesSection