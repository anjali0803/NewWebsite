import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"

class Solutions extends React.Component {
  constructor(){
    super()
    this.state = {
      translateButtonText: 'TECHNICAL'
    }
  }

  componentDidMount(){
    $('div.solutions-section > div.catchy-line > div > div.column.is-5.l-1').toggleClass('blur-div');
  }

  render() {

    const blurDiv = () => {
      if(this.state.translateButtonText === 'TECHNICAL'){
        this.setState({
          translateButtonText: 'NORMAL'
        })
      }else{
        this.setState({
          translateButtonText: 'TECHNICAL'
        })
      }
      $('div.solutions-section > div.catchy-line > div > div.column.is-5.l-1').toggleClass('blur-div');
      $('div.solutions-section > div.catchy-line > div > div.column.is-5.r-1').toggleClass('blur-div');
    }

    return (
      <div className="solutions-section">
        <div className="current-solutions">
          <div className="columns" style={{ alignItems: 'center'}}>
            <div className="column">
              <div className="mini-header">
              The missing part in other solutions<span class="blinking-cursor"></span>
              </div>
              <div className="heading-1" data-aos="slide-up">
              AI is not the end but the start.
              </div>

              <div className="text-1" data-aos="slide-up">
                Finding the cheapest product recipe or making sense of the TBs of unstructured data is not only about AI, domain knowledge is the key to the AI success. 
              </div>
            </div>
            <div className="column solution-img">
              <img className="current-solutions-img" src="https://matsci.ai/missing-piece-1.png" />
            </div>
          </div>
        </div>

        <div className="catchy-line">
          <div className="columns translate-section">
          <div className="column is-5 r-1" data-aos="slide-left">
            We store industry experts knowledge in the form of graph and apply AI on it.
            </div>
            
            <div className="column is-2 translate-button" onClick={blurDiv} data-aos="fade-in">
             {this.state.translateButtonText}
            </div>
            <div className="column is-5 l-1" data-aos="slide-right">
            We model the Intelligence of Domain Experts into Knowledge Graph enabled AI solutions
            </div>
          </div>
        </div>

        <div className="solution-work">
          <div className="columns" style={{ alignItems: 'center', justifyContent: 'center'}}>
            <div className="column">
            <img className="current-solutions-img" src="https://matsci.ai/honey-comb-path-1.gif" />
            </div>
            <div className="column">
              <div className="mini-header" >
              How does our solution work<span class="blinking-cursor"></span>
              </div>
              <div className="heading-1" data-aos="slide-up">
                It’s time to move from the stage of <span className="quotes-sym">  &ldquo;</span>So What?<span className="quotes-sym">&rdquo; </span> to <span className="quotes-sym">  &ldquo;</span>Now What?<span className="quotes-sym">&rdquo; </span><br />
              </div>

              <div className="text-1" data-aos="slide-up">
              Our KG module captures the Industry domain knowledge and explore new relationships.<br />
              <br />
    While AI module, exploits the domain knowledge captured by KG to predict the cheapest product recipe or converting unstructured data into business insights.

              </div>
            </div>
          </div>
        </div>

        <div className="columns product-list">
          <div className="column is-3 product-list-text">
            <div className="mini-header">
              Meet Our Solutions<span class="blinking-cursor"></span>
            </div>
            <div className="main-header" data-aos="slide-up" data-aos="slide-up">
              All You Need
            </div>
            <div className="main-description" data-aos="slide-up">
              Our team of scientists and engineers from MIT and IITs have designed, developed and finely tailored these solutions to get the job done.
            </div>
          </div>
          <div className="column is-9 product-card-list">
            <div className="columns card-list">
              <Link className="column product-card pcard-1" data-aos="slide-left" to="/solutions/materials-costimizer">
                <div >
                  <div className="row">
                    <div className="product-name">
                      Materials Costimizer
                    </div>
                    <div className="product-description">
                    Finding the cheapest route to manufacture high quality products your customers demand is as easy as clicking a button.
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="column product-card pcard-2" data-aos="slide-left" to="/solutions/infominer">
                <div >
                  <div className="row">
                    <div className="product-name">
                    Infominer
                    </div>
                    <div className="product-description">
                    Generating industry insights from unstructured documents across the value chain is a job of a minute now.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
  )}
}

export default Solutions
