import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import LatestBlogs from "./../../compositions/Home/latestBlogs"

import "./aboutUs.scss"

const AboutMatsci = () => (
  <Layout>
    <SEO {...seoData} />
    <div className="floating-content-section">
      <div className="small-header">
      We are<span class="blinking-cursor"></span>
      </div>
      <div className="primary-header">
      A diversified team with one vision
      </div>
      <div className="secondary-header">
      Making Manufacturing Smarter
      </div>
    </div>
    <section className="front">
      <img className="videoBG" src="https://matsci.ai/about-us.jpg" />
      <div className="video-overlay"></div>
    </section>
    <section className="front-bg">
      {/* <div className="skewed-front"> </div> */}
    </section>
    <div className="about-us-page">
      <div className="current-solutions">
        <div className="columns" style={{ justifyContent: 'space-between', alignItems: 'centre'}}>
          <div className="column" style={{ maxWidth: '500px'}} data-aos="slide-up">
            <div className="mini-header" data-aos="slide-up">
            The MatSci Team<span class="blinking-cursor-1"></span>
            </div>
            <div className="heading-1" data-aos="slide-up">
            Working All Together
            </div>

            <div className="text-1" data-aos="slide-right">
            We are a team of MIT and IITs alumni having working experience at top global firms, Google, CitiGroup, HSBC and more. 
<br /><br/>
Experienced Computer Scientists, Materials Scientists, Data Scientists, Designers and Business professionals share the same table at MatSci AI to develop  Knowledge Graph enabled AI solutions for next-generation manufacturing business.

            </div>
          </div>
          <div className="column" style={{ maxWidth: '800px'}} data-aos="slide-left">
          <img style={{ margin: '0 auto'}} src="https://matsci.ai/aboutus2.png" />

          </div>
        </div>
      </div>

      <div className="co-founders">
        <div className="mini-header" data-aos="slide-up">

        </div>

        <div className="main-header" data-aos="slide-up">
          Meet Our Leaders
        </div>

        <div className="all-member-list">
            
          <div className="all-team" >
            <div className="member-card" data-aos="slide-left">
              <div className="member-image">
                <img  src={`https://matsci.ai/somesh.jpg`} alt={`someshimage`} />
              </div>
              <div className="member-details">
                <div className="name1">Somesh Mohapatra</div>
                <div className="position">Co-founder & Operations Lead</div>
                <div className="college">PhD, MIT,USA</div>
              </div>
            </div>
            <div className="member-card" data-aos="slide-up">
              <div className="member-image">
                <img  src={`https://matsci.ai/shivam.jpg`} alt={`shivamimage`} />
              </div>
              <div className="member-details">
                <div className="name1">Shivam Gupta </div>
                <div className="position">Co-founder & Business Lead </div>
                <div className="college">IIT Roorkee, Ex. Citi Group</div>
              </div>
            </div>
            <div className="member-card" data-aos="slide-right">
              <div className="member-image">
                <img  src={`https://matsci.ai/akshat.jpg`} alt={`akshat image`} />
              </div>
              <div className="member-details">
                <div className="name1">Akshat Anand</div>
                <div className="position">Co-founder & Technology Lead</div>
                <div className="college">IIT Kanpur, Ex. Citi Group</div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about-us/all-our-members" data-aos="slide-up">
          <div className="meet-team">
            Meet Our Team
          </div>
        </Link>
      </div>

      <div className="current-solutions">
        <div className="columns" data-aos="slide-up">
          <div className="column center-column">
            <div className="mini-header" data-aos="slide-up">
            The MatSci Values<span class="blinking-cursor-1"></span>
            </div>
            <div className="heading-1" data-aos="slide-up">
            Innovation for Efficiency
            </div>

            <div className="text-1" data-aos="slide-up">
            We believe in driving new thought process that makes manufacturing efficient and smarter.
            </div>
          </div>
        </div>
      </div>
     

    </div>
    <div className="join-us">
        <div className="mini-header" data-aos="slide-up">
          Liked it?<span class="blinking-cursor"></span>
        </div>
        <div className="heading-1" data-aos="slide-up">
        Join Us
        </div>
        <div className="text-1" data-aos="slide-up">
        Alone we can achieve results,<br></br>
        Together we can achieve success
        </div>
        <Link to="/about-us/careers" data-aos="slide-up">
          <div className="join-us-button">
            Let's Work Together!
          </div>
        </Link>
      </div>
      <LatestBlogs />
  </Layout>
)

export default AboutMatsci

const seoData = {
  title: 'MatSci AI | A diversified team with one vision',
  description: 'Our team of AI development seasoned experts has developed some innovative Raw Material Cost Optimization Tools. Know more on products/services and their features',
  lang: 'en',
  metaData:{
    
  }
}