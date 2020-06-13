import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"

class LatestBlogs extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="aXgt latest-blogs">
        <div className="aXgt mini-header">
        Our Blogs<span class="blinking-cursor-1"></span>
        </div>
        <div className="aXgt header-1" data-aos="slide-up">
          Latest in AI
        </div>

        <div className="aXgt columns blog-cards">
          <a href="https://blog.matsci.ai/blog/7" className="aXgt column blog-card blog-1" data-aos="fade-right" target="_blank">
            <div >
            Action Plan for Manufacturing Industry to Boost Operational Efficiency Amidst COVID-19 Chaos
            </div>
          </a>
          <a href="https://blog.matsci.ai/blog/9" className="aXgt column blog-card blog-2" data-aos="fade-up" target="_blank">
            <div >
            Be a Leader in Chemical & Metal Industry with KG+AI Solutions
            </div>
          </a>
          <a href="https://blog.matsci.ai/blog/10" className="aXgt column blog-card blog-3" data-aos="fade-left" target="_blank">
            <div >
            Solving Raw Materials High Cost with Power of Artificial Intelligence and Knowledge Graph
            </div>
          </a>
        </div>
      </div>
  )}
}

export default LatestBlogs
