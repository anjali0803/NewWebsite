import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"

class Story extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    // for(let i = 1; i < 7; i++){
    //   $(`.story-graphics-${i}`).hover( () => {
    //     $(`.story-text-${i}`).css("display", "block");
    //   })
    // }
  }

  render() {
    return (
    <div className="aXgt story-section">
      <div className="aXgt container is-fluid">
        <div className="aXgt story-card">
          <div class="columns is-desktop">
            <div class="column story-graphics-1">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
            <div class="column story-text-1">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column story-text-2">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
            <div class="column story-graphics-2">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column story-graphics-3">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
            <div class="column story-text-3">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column story-text-4">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
            <div class="column story-graphics-4">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column story-graphics-5">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
            <div class="column story-text-5">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column story-text-6">
              <h2>Automation</h2>
            The steel industry is one of the most competitive manufacturing industries and it needs to compete at the global level.
  <br />
  To keep pace with the global steel market, one has to innovate, making current processes more effective and efficient.
            </div>
            <div class="column story-graphics-6">
              <img src="automation.png" className="aXgt story-img" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default Story
