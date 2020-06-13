import React from "react"
import { Link } from "gatsby"

import "../../styles/bulma-styles.scss"
import "./index.scss"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import Introduction from "./introduction"
import LatestBlogs from "./latestBlogs"
import Testimonial from "./testimonial"
import CaseStudies from "./caseStudies"
import Solutions from "./solutions"
import So_What from "./so_what"
import ContactUs from './../../components/contactUs'

const Home = () => (
  <Layout>
    <SEO {...seoData} />
    <div className="aXgt floating-content-section">
      <div className="aXgt small-header">
      One & Simple Goal<span class="blinking-cursor"></span>
      </div>
      <div className="aXgt primary-header">
      Reduce Cost, Increase Efficiency
      </div>
      <div className="aXgt secondary-header">
      Knowledge Graph enabled AI solutions for manufacturing Industries to optimize raw materials cost and to analyze unstructured data.
      </div>
    </div>
    <section className="aXgt front">
      {/* <div className="aXgt skewed-front"></div> */}
      <video className="videoBG" autoPlay muted loop>
        <source type="video/mp4" src="https://matsci.ai/landing-main-video_1.mp4" />
      </video>
      <div className="video-overlay">

      </div>
    </section>
    <section className="aXgt front-bg">
    </section>
    {/* <div className="aXgt floating-graphics"></div> */}
    {/* <Introduction /> */}
    <So_What />
    <Solutions />
    <CaseStudies />
    <Testimonial />
    <LatestBlogs />
    <ContactUs />
  </Layout>
)

export default Home

const seoData = {
  title: 'MatSci AI | Reduce Cost, Increase Efficiency',
  description: 'Knowledge Graph enabled AI solutions for manufacturing Industries to optimize raw materials cost and to analyze unstructured data.',
  lang: 'en',
  metaData:{
    
  }
}