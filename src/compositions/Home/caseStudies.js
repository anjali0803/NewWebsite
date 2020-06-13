import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"

class CaseStudies extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="aXgt case-studies-section">
        <div className="aXgt columns is-gapless">
          <div className="aXgt column is-1 gap"></div>
          <div className="aXgt column is-6 content" data-aos="slide-right">
            <div className="aXgt text-content">
              <div className="aXgt row">
                <div className="aXgt mini-header" >Case Studies<span class="blinking-cursor-1"></span></div>
                <div className="aXgt header-1" data-aos="slide-up">
                  It is our customer’s success.
                </div>
                <div className="aXgt description-1" data-aos="slide-up">
                We work with a range of materials and chemicals industry leaders, including steel, pipe, coating, welding, paints and many more.<br />
<br></br>
We live in a world that changes every day. We believe combining knowledge of industry experts with right AI solution is essential to consistently increase profitability and grow business.

                </div>
                <Link to="/case-studies/cs-infominer">
                  <div className="aXgt read-more" data-aos="slide-right">
                    Read our case studies!
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="aXgt column x"></div>
        </div>
      </div>
  )}
}

export default CaseStudies
