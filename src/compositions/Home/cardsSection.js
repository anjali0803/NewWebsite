import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"
import "./cardsSection.scss"

class CardSection extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render() {
    return (
    <div className="aXgt cards-section">
      <div className="aXgt row main-section-heading">
        Some Heading
      </div>
      <div className="aXgt row">
        <div className="aXgt columns">
          <div className="aXgt custom-card">
            <div className="aXgt floating-text">
              <div className="aXgt row description-text"> Card description should be hidden initailly. Will come to focus when you hover over card </div>
              <div className="aXgt row text-heading"> Card Heading </div>
            </div>
          </div>
          <div className="aXgt custom-card">

          </div>
        </div>
      </div>
      <div className="aXgt row">
        <div className="aXgt columns">
          <div className="aXgt custom-card">

          </div>
          <div className="aXgt custom-card">

          </div>
        </div>
      </div>
    </div>
  )}
}

export default CardSection
