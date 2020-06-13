import React from "react"
import { Link } from "gatsby"

import "../../styles/bulma-styles.scss"
import "./index.scss"
import "./../Home/index.scss"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SliderPriview from './../../components/sliderPriview'


class InfominerComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    const list = [
      {
        label: 'Upload the unstructured data in form of documents',
        gifURL: 'https://matsci.ai/info-slide1.gif'
      },
      {
        label: 'Extraction Module mines information as an industry expert',
        gifURL: 'https://matsci.ai/info-slide2.gif'
      },
      {
        label: 'Knowledge Graph module converts information into industry knowledge',
        gifURL: 'https://matsci.ai/info-slide3.gif'
      },
      {
        label: 'AI module exploits the knowledge to predict key business insights',
        gifURL: 'https://matsci.ai/info-slide4.gif'
      }
    ]

    const seoData = {
      title: 'MatSci AI | Informiner',
      description: 'Generating industry insights from unstructured documents across the value chain is a job of a minute now.',
      lang: 'en',
      metaData:{
        
      }
    }

    return (
      <Layout>
        <SEO {...seoData} />
        <div className="aXgt floating-content-section">
          <div className="aXgt small-header">
          The one that increases efficiency<span class="blinking-cursor"></span>
          </div>
          <div className="aXgt primary-header">
          Informiner
          </div>
          <div className="aXgt secondary-header">
          Generating industry insights from unstructured documents across the value chain is a job of a minute now.
          </div>
        </div>

        <section className="aXgt front">
          <img className="videoBG" src="https://matsci.ai/infominer.jpg" />
          <div className="video-overlay" style={{ opacity: '0.8'}}></div>
          {/* <div className="aXgt skewed-front"></div> */}
        </section>
        <section className="aXgt front-bg">
          {/* <div className="aXgt skewed-front"> </div> */}
        </section>

        <div className="material-costimizer-section">
          <div className="section-1">
            <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
              <div className="column"> 
                <div className="mini-header" data-aos="slide-up">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Bringing visibility across the value chain
                </div>

                <div className="text-1" data-aos="slide-up">
                Every manufacturing business generates TBs of data. 70% of the data is unstructured and effectively managing this unstructured data brings an end to end visibility to the business.
                </div>
              </div>
              <div className="column" data-aos="slide-up">
                <video autoPlay muted loop>
                  <source type="video/mp4" src="https://matsci.ai/infominer-visibility.mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="section-1">
            <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
            <div className="column" data-aos="slide-up">
              <video autoPlay muted loop>
                <source type="video/mp4" src="https://matsci.ai/informer-insight-2.mp4" />
              </video>
            </div>
              <div className="column">
                <div className="mini-header" data-aos="slide-up">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Capitalizing on Industry knowledge
                </div>

                <div className="text-1" data-aos="slide-up">
                We live in information driven world. Utilizing every bit of information and converting it to easily accessible knowledge impacts the market share. 
                </div>
              </div>
              
            </div>
          </div>

          <div className="section-1">
            <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
              <div className="column">
                <div className="mini-header" data-aos="slide-up">
                It helps<span class="blinking-cursor-1"></span>
                </div>
                <div className="heading-1" data-aos="slide-up">
                Increasing Operational Efficiency


                </div>

                <div className="text-1" data-aos="slide-up">
                From Sales to logistics departments, every business unit of manufacturing industry require exchange of documents. Automated analysis of these documents results in higher operational efficiency.

                </div>
              </div>
              <div className="column" data-aos="slide-up">
                <video autoPlay muted loop>
                  <source type="video/mp4" src="https://matsci.ai/infominer-ops-efficiency.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="aXgt so-what-section material-costimizer-bg">
          <div className="aXgt mini-header" data-aos="slide-up">
          How does it work?<span class="blinking-cursor-1"></span>
          </div>
          <div className="aXgt main-heading" data-aos="slide-up">
          It’s one minute job
          </div>
          <SliderPriview list={list}  data-aos="slide-up"/>
        </div>

        <div className="aXgt case-studies-section">
          <div className="aXgt columns is-gapless">
            <div className="aXgt column is-1 gap"></div>
            <div className="aXgt column is-6 content" data-aos="slide-right">
              <div className="aXgt text-content">
                <div className="aXgt row">
                  <div className="aXgt mini-header"  data-aos="slide-up">Related Case Studies<span class="blinking-cursor-1"></span></div>
                  <div className="aXgt header-1" data-aos="slide-up">
                    It is our customer’s success.
                  </div>
                  <Link to="/case-studies/cs-infominer" className="case-study-card" style={{ backgroundImage: 'url(https://matsci.ai/infominer-case-study-hero.jpg)'}} data-aos="slide-up">
                    <div >
                    Analyzing customer technical requirements using Knowledge Graph enabled AI
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="aXgt column x"></div>
          </div>
        </div>
        
        <div className="lets-talk-ai">
          <div className="aXgt mini-header">
            It’s your decision!<span class="blinking-cursor-1"></span>
            </div>
            <div className="aXgt main-heading" data-aos="slide-up">
            Do you want to increase your operational efficiency? 
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


export default InfominerComponent
