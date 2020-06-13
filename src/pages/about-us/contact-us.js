import React from 'react'
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import "./aboutUs.scss"
import ContactUs from '../../components/contactUs'

class Contact_Us extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    const seoData = {
      title: 'MatSci AI | Contact Us',
      description: 'MatSci AI is revolutionizing and optimizing the world&#39;s Manufacturing by providing the best solutions to connect their Industry. Talk to our AI Experts.',
      lang: 'en',
      metaData:{
        
      }
    }
    return(
      <Layout>
        <SEO {...seoData} />
        <div className="aXgt floating-content-section">
          
          <div className="aXgt primary-header" style={{textAlign: 'center', marginTop: '20vh'}} data-aos="slide-up">
          Contact Us!
          </div>
          <div className="aXgt secondary-header" data-aos="slide-up">
          </div>
        </div>
        <section className="aXgt front">
          {/* <div className="aXgt skewed-front"></div> */}
          <img src="https://matsci.ai/contact-us-hero.jpg" className="videoBG" />
          <div className="video-overlay">

          </div>
        </section>
        <section className="aXgt front-bg">
        </section>
        <ContactUs />
      </Layout>
    );
  }
}

export default Contact_Us