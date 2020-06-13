import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"

class So_What extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="so-what-section">
        <div className="mini-header">
        The problems we solve<span class="blinking-cursor-1"></span>
        </div>
        <div className="main-heading" data-aos="slide-up">
          The Stage of <span className="quotes-sym">  &ldquo;</span>So, What?<span className="quotes-sym">&rdquo; </span>
        </div>   
        <div className="description-text" data-aos="slide-up">
        Today, the constant pressure to reduce the manufacturing cost and improve efficiency in manufacturing business is higher than ever before. Exploring every bit of data using latest technology to manufacture at least cost possible with full operational efficiency is must for a successful manufacturer.
        </div>

        <div className="card-background">
          <div className="columns" data-aos="slide-up">
            <div className="column card-1">
              <div className="row mr-auto">
                <div className="card-icon">
                  <img src="https://matsci.ai/cost.png" />
                </div>
                <div className="card-heading">
                Raw materials are Costly
                </div>
                <div className="card-text">
                <span className="bt">60%</span> of total manufacturing cost comes from raw materials
                </div>
              </div>
            </div>
            <div className="column card-1">
              <div className="row mr-auto">
              <div className="card-icon">
                  <img src="https://matsci.ai/volatility.png" />
                </div>
                <div className="card-heading">
                The Cost is Volatile
                </div>
              <div className="card-text">
              Raw materials cost can go up or down by <span className="bt">2.09%</span> in a week and impacts profit margin.
              </div>
              </div>
            </div>
            <div className="column card-1">
              <div className="row mr-auto">
                <div className="card-icon">
                  <img src="https://matsci.ai/time-consuming.png" />
                </div>
                <div className="card-heading">
                R&D is Time Consuming
                </div>
                <div className="card-text">
                Finding an economical recipe to manufacture a product with specific requirements takes atleast <span className="bt">15 days</span>.
                </div>
              </div>
            </div>
          </div>
          <div className="columns" data-aos="slide-up">
            <div className="column is-4 is-offset-1 card-2">
              <div className="row mr-auto">
                <div className="card-icon">
                  <img src="https://matsci.ai/big-data.png" />
                </div>
                <div className="card-heading">
                Data Volume is High
                </div>
                <div className="card-text">
                An average manufacturing industry generates  around <span className="bt">84.2TB </span>data per year and <span className="bt">70%</span> of data is unstructured
                </div>
              </div>
            </div>
            <div className="column is-4 is-offset-2 card-2">
              <div className="row mr-auto">
                <div className="card-icon">
                  <img src="https://matsci.ai/penroseTriangle.png" />
                </div>
                <div className="card-heading">
                Analyzing Documents is Tough
                </div>
                <div className="card-text">
                Industry experts spend around <span className="bt">30%</span> of their working hours to do a simple analysis of unstructured documents.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default So_What
