import React from "react"
import { Link } from "gatsby"
import $ from "jquery"

import "../../styles/bulma-styles.scss"
import "./index.scss"
import "./../Home/index.scss"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SliderPriview from './../../components/sliderPriview'

class MaterialCustomizerComponent extends React.Component{
  constructor(props){
    super(props)
  } 

  componentDidMount(){
    
  }

  render(){
    const list = [
      {
        label: 'Upload all raw materials and product recipe data for one time',
        gifURL: 'https://matsci.ai/ms-slide1.gif'
      },
      {
        label: 'Knowledge Graph module explore the hidden relationships among raw materials properties',
        gifURL: 'https://matsci.ai/ms-slide2.gif'
      },
      {
        label: 'AI module exploits the relationships and utilizes data to predict product properties',
        gifURL: 'https://matsci.ai/ms-slide3.gif'
      },
      {
        label: 'Set your customer requirements and get the cheapest product recipe with a single click',
        gifURL: 'https://matsci.ai/ms-slide4.gif'
      }
    ];

    const seoData = {
      title: 'MatSci AI | Materials Costimizer',
      description: 'Finding the cheapest route to manufacture high quality products your customers demand is as easy as clicking a button.',
      lang: 'en',
      metaData:{
        
      }
    }
    
    return (
      <Layout>
        <SEO {...seoData} />
        <div className="aXgt floating-content-section">
          <div className="aXgt small-header">
          The one that reduces cost<span class="blinking-cursor"></span>
          </div>
          <div className="aXgt primary-header">
          Materials Costimizer
          </div>
          <div className="aXgt secondary-header">
          Finding the cheapest route to manufacture high quality products your customers demand is as easy as clicking a button.
          </div>
        </div>

        <section className="aXgt front">
          {/* <div className="aXgt skewed-front"></div> */}

          <img className="videoBG" src="https://matsci.ai/material-costimizer.jpg" />
          <div className="video-overlay"></div>
        </section>
        <section className="aXgt front-bg">
          {/* <div className="aXgt skewed-front"> </div> */}
        </section>

        <div className="material-costimizer-section">
          <div className="section-1">
            <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
              <div className="column">
                <div className="mini-header">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Finding the best raw materials mix
                </div>

                <div className="text-1" data-aos="slide-up">
                Whether you are a steel, welding, chemical or polymers manufacturer, finding the best raw materials mix is the key to reduce the manufacturing cost substantially.
                </div>
              </div>
              <div className="column" data-aos="slide-up">
                <img style={{ margin: '0 auto'}} src="https://matsci.ai/finding-raw-material.jpg" />
              </div>
            </div>
          </div>

          <div className="section-1">
            <div className="columns" style={{ alignItems: 'center', justifyContent: 'center'}}>
            <div className="column" data-aos="slide-up">
            <img style={{ margin: '0 auto'}} src="https://matsci.ai/customer-requirement.png" />
            </div>
              <div className="column">
                <div className="mini-header">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Meeting stringent customer quality requirements
                </div>

                <div className="text-1" data-aos="slide-up">
                Every customer comes with up its own quality requirements .Finding the optimal recipe within a timeframe decides your business growth.
                </div>
              </div>
              
            </div>
          </div>

          <div className="section-1">
            <div className="columns" style={{ alignItems: 'center', justifyContent: 'center'}}>
              <div className="column">
                <div className="mini-header">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Improving the profitability

                </div>

                <div className="text-1" data-aos="slide-up">
                The prices of raw materials keep changing from time to time. Real-time optimization of raw materials mix reduces the risk and provides consistent profitability.

                </div>
              </div>
              <div className="column" data-aos="slide-up">
              <img style={{ margin: '0 auto'}} src="https://matsci.ai/profitibilty.jpg" />

              </div>
            </div>
          </div>
        </div>

        <div className="aXgt so-what-section material-costimizer-bg">
          <div className="aXgt mini-header">
          How does it work?<span class="blinking-cursor-1"></span>
          </div>
          <div className="aXgt main-heading" data-aos="slide-up">
          Again, It’s easy
          </div>
          <SliderPriview list={list} data-aos="slide-up"/>
        </div>

        <div className="aXgt case-studies-section">
          <div className="aXgt columns is-gapless">
            <div className="aXgt column is-1 gap"></div>
            <div className="aXgt column is-6 content" data-aos="slide-right">
              <div className="aXgt text-content">
                <div className="aXgt row">
                  <div className="aXgt mini-header" >Related Case Studies<span class="blinking-cursor-1"></span></div>
                  <div className="aXgt header-1" data-aos="slide-up">
                    It is our customer’s success.
                  </div>
                  <Link className="case-study-card" style={{ backgroundImage: 'url(https://matsci.ai/cs-costimizer-hero.jpg)'}} to="case-studies/cs-costimizer">
                    <div >
                    Optimizing Raw Materials Cost using Knowledge Graph enabled AI
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="aXgt column x"></div>
          </div>
        </div>
        
        <div className="lets-talk-ai">
          <div className="aXgt mini-header" data-aos="slide-up">
            It’s your decision!<span class="blinking-cursor"></span>
            </div>
            <div className="aXgt main-heading" data-aos="slide-up">
            Do you want to reduce your manufacturing cost? 
            </div>
            <div className="description-text" data-aos="slide-up">
            Get in touch with us and let our solution help you!
            </div>
            <Link className="talk-ai-button" to="/about-us/contact-us" data-aos="slide-up">
              <div >
              Let’s talk MatSci AI!
            </div>
            </Link>
        </div>
      </Layout>
    );
  }
}


export default MaterialCustomizerComponent
