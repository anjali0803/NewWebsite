import React from 'react';
import $ from 'jquery'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss";
import "./../../compositions/Home/index.scss"
import { Link } from 'gatsby';

class CS_Costimizer extends React.Component{
  constructor(props){
    super(props)

    this.createSketchLines = this.createSketchLines.bind(this);
  }

  componentDidMount(){
    // this.createSketchLines();
    // window.addEventListener("resize", this.createSketchLines.bind(this), true);
  }

  componentWillUnmount(){
    // window.removeEventListener("resize", this.createSketchLines.bind(this), true);
  }

  createSketchLines(){
    let marginX = window.innerWidth > 1110 ? 40 : 10;
    let marginY = window.innerWidth > 1110 ? 50 + 125 : 100  + 125;


    let line1 = $('#line1');
    let line2 = $('#line2');
    let div1 = $('#c-card-1');
    let div2 = $('#c-card-2');
    
    if( div1.offset() === undefined)
      return

    let x1 = div1.offset().left + (div1.width()/2);
    let y1 = div1.offset().top -  (div1.height()/2) + marginY;
    let x2 = div2.offset().left + (div2.width()/2) - marginX;
    let y2 = div2.offset().top - (div2.height()/2) + marginY;
    
    line1.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y1);
    
    line2.attr('x1',x2).attr('y1',y1).attr('x2',x2).attr('y2',y2);

    let line3 = $('#line3');
    let line4 = $('#line4');
    let div3 = $('#c-card-3');
    
    let x3 = div3.offset().left + (div3.width()/2) - marginX;
    let y3 = div3.offset().top - (div3.height()/2) + marginY;
    
    line3.attr('x1',x2).attr('y1',y2).attr('x2',x3).attr('y2',y2);
    
    line4.attr('x1',x3).attr('y1',y2).attr('x2',x3).attr('y2',y3);
  }

  render(){
    const seoData = {
      title: 'MatSci AI | Optimizing Raw Materials Cost using Knowledge Graph enabled AI',
      description: 'Manufacturing Industry Raw Materials Cost Optimization with Knowledge Graph Enabled Artificial Intelligence Solution.',
      lang: 'en',
      metaData:{
        
      }
    }
    return(
      <>
        <Layout>
          <SEO {...seoData} />
          <div className="cs-floating-content-section">
            <div className="cs-small-header">
            The Challenge<span class="blinking-cursor"></span>
            </div>
            <div className="cs-primary-header">
            Optimizing Raw Materials Cost using Knowledge Graph enabled AI
            </div>
            <div className="cs-secondary-header">
            Raw materials cost is the largest variable manufacturing cost and consumes most of the revenue.
            </div>
          </div>
          <section className="front">
            {/* <div className="skewed-front"></div> */}
            <img className="videoBG" src="https://matsci.ai/cs-costimizer-hero.jpg" />
            <div className="video-overlay"></div>
          </section>
          <section className="front-bg">
            {/* <div className="skewed-front"> </div> */}
          </section>
          <div className="case-studies-page">
            
            <div className="left-slide">
              <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
                <div className="column">
                  <div className="mini-header" data-aos="slide-up">
                  They needed<span class="blinking-cursor-1"></span>
                  </div>
                  <div className="main-heading" data-aos="slide-up">
                  Low Cost Recipe 
                  </div>
                  <div className="description-text" data-aos="slide-up">
                  In coating industry, coating films are made of various types of raw materials like Polyethylene, Polypropylene, Resin and many more. Every customer comes with his own quality requirements depending on the end application of the film. This requires coating manufacturer to find the best combination of raw materials mix from nearly infinite combinations. Also, meeting the individual customer demand at least cost possible and within a fixed timeframe is key to be successful in coating business.
                  </div>
                </div>
                <div className="column" data-aos="slide-up">
                  <img style={{ margin: '0 auto'}} src="https://matsci.ai/low-cost-recipe.png" />
                </div>
              </div>
            </div>
            <div className="right-slide">
              <div className="columns"  style={{ justifyContent: 'center', alignItems: 'center'}}>
                <div className="column" data-aos="slide-up">
                <img style={{ margin: '0 auto'}} src="https://matsci.ai/raw_materials_cs_2-3.png" />

                </div>
                <div className="column" >
                  <div className="mini-header" data-aos="slide-up">
                  Top Management wanted<span class="blinking-cursor-1"></span>
                  </div>
                  <div className="main-heading" data-aos="slide-up">
                  Higher profitability
                  </div>
                  <div className="description-text" data-aos="slide-up">
                  Our client, who is leader in the films industry, already has a wide rage of products around 800 types of films products with 4-5 variants in film thickness to meet specific customers demand. But their top management knew they were leaving money on the table in terms of high raw materials cost. Also, they didn’t want to loose a customer who was in hurry to get specialty film which was not present in their product line yet.
                  </div>
                </div>
                
              </div>
            </div>
            <div className="central-slide">
              <div className="mini-header" data-aos="slide-up">
              The MatSci Solution<span class="blinking-cursor-1"></span>
              </div>
              <div className="main-heading" data-aos="slide-up">
              Materials Costimizer
              </div>   
              
              <div className="case-studies-cards" data-aos="slide-up">
                <div className="case-studies-card-1" id="c-card-1">
                Materials Costimizer utilized recipe data of 800 products to automatically build a knowledge graph to find correlation between various types of polymers, epoxy resins, film properties and process parameters.
                </div>
                <div className="case-studies-card-2" id="c-card-2">
                Further, AI modules were trained as per knowledge graph embeddings and all existing products recipe were optimized as per their indirect and direct cost.
                </div>
                <div className="case-studies-card-3" id="c-card-3">
                Materials Costimizer provided low cost alternatives for existing film products and most economical recipe possible for new target product specifications within a second.

                </div>
              </div>
            </div>
            <div className="3-card-slide">
              <div className="latest-blogs">
                <div className="mini-header">
                We delivered<span class="blinking-cursor-1"></span>
                </div>
                <div className="header-1" data-aos="slide-up">
                Direct Impact
                </div>

                <div className="columns blog-cards">
                  <div className="column blog-card cs-card-7" data-aos="fade-right">
                    <img src="https://matsci.ai/costimizer-card-1.png" className="img" />
                    <div className="title">
                    Saves around <b className="bt">$2.9M</b> of raw materials cost per year
                    </div>
                  </div>
                  <div className="column blog-card cs-card-8" data-aos="fade-up">
                  <img src="https://matsci.ai/costimizer-card-2.png" className="img" />

                    <div className="title">

                  Finds cheapest product recipe within <b>5</b> seconds
                    </div>


                  </div>
                  <div className="column blog-card cs-card-9" data-aos="fade-left">
                  <img src="https://matsci.ai/costimizer-card-3.png" className="img" />

                  <div className="title">
                  Increases profitability by <b>20%</b>
                  </div>

                  </div>
              </div>
            </div>
            </div>
            <div className="lets-talk-AI">
            <div className="join-us">
              <div className="mini-header" data-aos="slide-up">
              It’s your decision!<span class="blinking-cursor"></span>
              </div>
              <div className="heading-1" data-aos="slide-up">
              Do you want to increase your operational efficiency?
              </div>
              <div className="text-1" data-aos="slide-up">
              Get in touch with us and let our solution help you!
              </div>
              <Link className="join-us-button" to='/about-us/contact-us' data-aos="slide-up">
                <div >
                  Let's talk MatSci AI!
                </div>
              </Link>
            </div>
            </div>

          </div>
        </Layout>
      </>
    )
  }
}

export default CS_Costimizer