/* eslint-disable react/prop-types */
import { LuPlus } from "react-icons/lu";
import { CgMathMinus } from "react-icons/cg";
import { useState } from "react";

const FaqMoja = ({ data }) => {
    const [active, setActive ] = useState(false);
  return (
    <div className="faq-moja">
              <div className="faq-header" onClick={() => setActive(!active)}>
                        <h3>{data.question}</h3>
                        { active ? <span><CgMathMinus /></span> :  <span><LuPlus /></span>}
              </div>
              <div className={ active ? "faq-answer active" : "faq-answer"}>
                      <div className="faq-inner">
                                <p>{data.answer}</p>
                      </div>
              </div>
    </div>
  )
}

export default FaqMoja