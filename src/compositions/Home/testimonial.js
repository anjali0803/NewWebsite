import React from "react"
import { Link } from "gatsby"

import $ from "jquery"
import "../../styles/bulma-styles.scss"
import "./index.scss"
import "./testimonial.scss"

class Testimonial extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlide: 1,
      totalSlide: 2,
      timerToken: undefined
    }

    this.nextSlide = this.nextSlide.bind(this)
  }

  componentDidMount() {
    const token = setInterval(() => {
      this.nextSlide();
    }, 10000);

    this.setState({
      timerToken: token
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.timerToken)
  }

  nextSlide = () => {
    $(`.slide-${this.state.currentSlide}`).css('display', 'none');
    if( this.state.currentSlide + 1> this.state.totalSlide ){
      $(`.slide-1`).css('display', 'block');
      this.setState({
        currentSlide: 1
      })
    } else {
      $(`.slide-${this.state.currentSlide + 1}`).css('display', 'block');
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    }
    // setTimeout(() => {
    //   this.nextSlide();
    // }, 10000);
  }

  prevSlide = () => {
    $(`.slide-${this.state.currentSlide}`).css('display', 'none');
    if( this.state.currentSlide - 1 <= 0 ){
      $(`.slide-${this.state.totalSlide}`).css('display', 'block');
      this.setState({
        currentSlide: this.state.totalSlide
      })
    } else {
      $(`.slide-${this.state.currentSlide - 1}`).css('display', 'block');
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
    // setTimeout(() => {
    //   this.nextSlide();
    // }, 10000);
  }

  render() {
    return (
      <div className="aXgt testomonial-section" data-aos="slide-up">
        {/* <div>
          Testimonial
        </div> */}
        <div className="aXgt slide-1 active">
          <div className="mini-header-t">
            What our customer says<span class="blinking-cursor-1"></span>
          </div>
          <div className="testimonial">
            Testimonial
          </div>
          <div className="person-img">
            <img className="testimonial-img-1" alt="" />
          </div>
          <div className="testimonial-text">
          <span className="aXgt quotes-sym">  &ldquo;</span>Really appreciate all your support and collaboration with Welspun US team. You have done an outstanding job in deeply understanding Welspun‘s US pipe manufacturing operations and digitally transforming the business from within.<span className="aXgt quotes-sym">&rdquo; </span>
          </div>
          <div className="person-bio">
            <div className="name">
            Sandeep Singhal
            </div>
            <div className="position">
            Chief Executive Officer
            </div>
            <div className="company">
            Welspun Americas
            </div>
          </div>
        </div>
        <div className="aXgt slide-2">
        <div className="mini-header-t">
            What our customer says<span class="blinking-cursor-1"></span>
          </div>
        <div className="testimonial">
            Testimonial
          </div>
          <div className="person-img">
            <img className="testimonial-img-2" alt="" />
          </div>
          <div className="testimonial-text">
          <span className="aXgt quotes-sym">  &ldquo;</span>Having 30+ years of international business development experience, I have mentored lots of start-ups and find in MatSci AI a unique proposition for the field of materials science and beyond. Their way of combining domain expertise with cutting-edge technologies, is one of their significant improvements to innovation.<span className="aXgt quotes-sym">&rdquo; </span>
          </div>
          <div className="person-bio">
            <div className="name">
            Gustavo Bottan
            </div>
            <div className="position">
            VP (Business Development)
            </div>
            <div className="company">
            Peroxygen Systems Inc
            </div>
          </div>
        </div>
        <div class="prev" onClick={this.prevSlide}>
          &#10094;
        </div>
        <div class="next" onClick={this.nextSlide}>
          &#10095;
        </div>
      </div>
    )
  }
}

export default Testimonial
