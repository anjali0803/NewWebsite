import React from 'react';
import $ from 'jquery'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss";
import { Link } from 'gatsby';

class CS_Infominer extends React.Component{
  constructor(props){
    super(props)

    this.createSketchLines = this.createSketchLines.bind(this);
  }

  componentDidMount(){
    // this.createSketchLines()
    // window.addEventListener("resize", this.createSketchLines.bind(this));
  }

  createSketchLines(){
    let marginX = window.innerWidth > 1110 ? 40 : 10;
    let marginY = window.innerWidth > 1110 ? 50 + 125: 100 + 125;

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

    let line5 = $('#line5');
    let line6 = $('#line6');
    let div4 = $('#c-card-4');
    
    let x4 = div4.offset().left + (div4.width()/2) - marginX;
    let y4 = div4.offset().top - (div4.height()/2) + marginY;
    
    line5.attr('x1',x3).attr('y1',y3).attr('x2',x4).attr('y2',y3);
    
    line6.attr('x1',x4).attr('y1',y3).attr('x2',x4).attr('y2',y4);
  }
  render(){
    const seoData = {
      title: 'MatSci AI | Analyzing customer technical requirements using Knowledge Graph enabled AI',
      description: 'Responding to customer technical inquiries on time is a key challenge in pipeline industry and it impacts the chances of winning the project.',
      lang: 'en',
      metaData:{
        
      }
    }
    return(
      <>
        <Layout>
          <SEO {...seoData} />
          <div className="aXgt cs-floating-content-section">
            <div className="aXgt cs-small-header">
            The Challenge<span class="blinking-cursor"></span>
            </div>
            <div className="aXgt cs-primary-header">
            Automated Analysis of Client Inquiries at Welspun
            </div>
            <div className="aXgt cs-secondary-header">
            Responding to customer technical inquiries on time is a key challenge in pipeline industry and it impacts the chances of winning the project.
            </div>
          </div>
          <section className="aXgt front">
            <img className="videoBG" src="https://matsci.ai/infominer-case-study-hero.jpg" />
            <div className="video-overlay"></div>
          </section>
          <section className="aXgt front-bg">
            {/* <div className="aXgt skewed-front"> </div> */}
          </section>
          <div className="case-studies-page">
            
            <div className="left-slide">
              <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
                <div className="column" data-aos="slide-up">
                  <div className="mini-header" data-aos="slide-up">
                  They needed<span class="blinking-cursor-1"></span>
                  </div>
                  <div className="main-heading" data-aos="slide-up">
                  High Efficiency
                  </div>
                  <div className="description-text" data-aos="slide-up">
                  Every Oil and Gas client comes with his own technical requirements, 4-5 documents with around 150 pages in total. Welspun understood that it needed to analyze these documents as early as possible and respond promptly to its customers. Also, handling higher number of inquires within same time will help to serve a bigger market. 
                  </div>
                </div>
                <div className="column" data-aos="slide-up">
                <img style={{ margin: '0 auto'}} src="https://matsci.ai/infominer-cs-2.png" />

                </div>
              </div>
            </div>
            <div className="right-slide">
              <div className="columns" style={{ justifyContent: 'center', alignItems: 'center'}}>
                <div className="column"  data-aos="slide-up">
                <img style={{ margin: '0 auto'}} src="https://matsci.ai/infominer-3.jpg" />

                </div>
                <div className="column" data-aos="slide-up">
                  <div className="mini-header" data-aos="slide-up">
                  Top Management wanted<span class="blinking-cursor-1"></span>
                  </div>
                  <div className="main-heading" data-aos="slide-up">
                  Get the job done within a day
                  </div>
                  <div className="description-text" data-aos="slide-up">
                  Welspun, being a leader in pipeline industry, already has highly experienced professionals and domain experts. But it needed an additional layer to get this job done within a day.
                  </div>
                </div>
                
              </div>
            </div>
            <div className="central-slide">
              <div className="aXgt mini-header" data-aos="slide-up">
              The MatSci Solution<span class="blinking-cursor-1"></span>
              </div>
              <div className="aXgt main-heading" data-aos="slide-up">
              Infominer
              </div>
              <svg>
                <line id="line1"/>
                <line id="line2"/>
                <line id="line3"/>
                <line id="line4"/>
                <line id="line5"/>
                <line id="line6"/>
              </svg>
              <div className="case-studies-cards" data-aos="slide-up">
                <div className="case-studies-card-1"  id="c-card-1">
              The MatSci AI’s solution automatically extracts necessary information from all 4-5 customer technical documents.

                </div>
                <div className="case-studies-card-2"  id="c-card-2">
              Extraction module was trained using domain specific knowledge stored in knowledge graph module.

                </div>
                <div className="case-studies-card-3"  id="c-card-3">
              Further, it validates the information as per industry standard specifications and historical data. 

                </div>
                <div className="case-studies-card-4"  id="c-card-4">

              Eventually, AI decision engines prepare and provide the response documents for the clients.
                </div>

              </div>
            </div>
            <div className="3-card-slide">
              <div className="aXgt latest-blogs">
                <div className="aXgt mini-header">
                We delivered<span class="blinking-cursor-1"></span>
                </div>
                <div className="aXgt header-1" data-aos="slide-up">
                Direct Impact
                </div>

                <div className="aXgt columns blog-cards">
                  <div className="aXgt column blog-card cs-card-4" data-aos="fade-right">
                  <img src="https://matsci.ai/infominor-card-1.png" className="img" />

                    <div className="title">
                      Respond to clients within <b>5 minutes</b>  instead of <b>7 days</b>
                    </div>
                  </div>

                  <div className="aXgt column blog-card cs-card-5" data-aos="fade-up">
                  <img src="https://matsci.ai/infominor-card-2.png" className="img" />

                    <div className="title">
                      Saves around <b>$1.5M</b> per year
                    </div>
                  </div>
                  <div className="aXgt column blog-card cs-card-6" data-aos="fade-left">
                  <img src="https://matsci.ai/infominor-card-3-1.png" className="img" />

                    <div className="title">
                  Process multiple inquiries in <b>Parallel</b> 

                    </div>
                  </div>
              </div>
            </div>
            </div>
            <div className="lets-talk-AI">
            <div className="join-us">
              <div className="mini-header" data-aos="slide-up">
              It’s your decision!<span class="blinking-cursor-1"></span>
              </div>
              <div className="heading-1" data-aos="slide-up">
              Do you want to increase your operational efficiency?
              </div>
              <div className="text-1" data-aos="slide-up">
              Get in touch with us and let our solution help you!
              </div>
              <Link to="/about-us/contact-us" data-aos="slide-up">
                <div className="join-us-button">
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

export default CS_Infominer