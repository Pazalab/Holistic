import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import { Link } from "react-router-dom"
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const BlogSection = () => {
  return (
    <div className="blog-section">
             <div className="inner-row">
                       <div className="blog-section-content">
                                  <div className="blog-intro">
                                           <h3>Insights</h3>
                                           <h2>Recent Articles</h2>
                                  </div>
                                  <div className="blog-section-row">
                                            <div className="blog-moja">
                                                      <div className="blog-image">
                                                                <img src={blog1} alt="" />
                                                      </div>
                                                      <h3>Master Your Weight: Proven Strategies for Sustainable Health and Wellness</h3>
                                                      <p>Practical tips for effective, long-term weight management through balanced nutrition, exercise, and mental health.</p>
                                            </div>
                                            <div className="blog-moja">
                                                      <div className="blog-image">
                                                                <img src={blog2} alt="" />
                                                      </div>
                                                      <h3>The Transformative Power of Holistic Weight Management: Your Guide to Lasting Change</h3>
                                                      <p>A look at holistic approaches combining medical, nutritional, and emotional support for lasting results.</p>
                                            </div>
                                            <div className="blog-moja">
                                                      <div className="blog-image">
                                                                <img src={blog3} alt="" />
                                                      </div>
                                                      <h3>From Struggle to Success: How to Take Control of Your Weight and Your Life</h3>
                                                      <p>Inspiring success stories and actionable steps to help readers achieve control and transformation.</p>
                                            </div>
                                  </div>

                                  <Link to={"/"}className="btn-link"><span className="btn-overlay"></span>Read More Articles <span><HiOutlineArrowLongRight /></span></Link>
                       </div>
             </div>
    </div>
  )
}

export default BlogSection