import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from "jquery"

import './header.scss'

class Header extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    $(window).scroll(function(){
      if($(document).scrollTop() > (window.innerHeight * 0.7)) {
          $('.header').addClass('small');
          $('.menu-tab').css('co1lor', '#0D2149')
          // $('.navbar-link').removeClass("dropdown-nav");
          // $('.floatingMenu').css('top', '75px')
          document.getElementById('header-logo').src = 'https://matsci.ai/full-logo-1.png';
      } else {
          $('.header').removeClass('small');
          $('.menu-tab').css('color', 'white')
          // $('.navbar-link').addClass("dropdown-nav");
          // $('.floatingMenu').css('top', '125px')
          document.getElementById('header-logo').src = 'https://matsci.ai/full-logo-away-1.png';
      }
    });
  }
 
  toggleBurgerMenu = () => {
    $('.navbar-burger').toggleClass('is-active')
    $('#navbarBasicExample').toggleClass('is-active')
  }

  render() {
    return (
        <nav className="navbar is-transparent header" role="navigation" aria-label="main navigation">
          <div className="navbar-brand brand-logo">
            <Link
              to="/"
            >
              <img src="https://matsci.ai/full-logo-away-1.png" id="header-logo" className="aXgt logo" alt="matsci logo" />
            </Link>
    
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.toggleBurgerMenu}>
              <span aria-hidden="true" className="three-dot"></span>
              <span aria-hidden="true" className="three-dot"></span>
              <span aria-hidden="true" className="three-dot"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/" className="aXgt menu-tab">
                  Home
                </Link>
              </div>
              <div className="aXgt navbar-item has-dropdown dropdown-nav is-hoverable">
                <Link className="aXgt menu-tab navbar-link" to="/solutions/materials-costimizer">
                  Solutions
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/solutions/materials-costimizer" className="navbar-item">
                    Material Costimizer
                  </Link>
                  <Link to='/solutions/infominer' className="navbar-item">
                   Informiner
                  </Link>
                </div>
              </div>
              <div className="aXgt navbar-item has-dropdown dropdown-nav is-hoverable">
                <Link className="aXgt menu-tab navbar-link" to="/case-studies/cs-costimizer">
                  Case Studies
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/case-studies/cs-costimizer" className="navbar-item">
                    Raw Materials
                  </Link>
                  <Link to='/case-studies/cs-infominer' className="navbar-item">
                   Unstructured Data
                  </Link>
                </div>
              </div>
              <div className="aXgt navbar-item has-dropdown dropdown-nav is-hoverable">
                <div  className="aXgt menu-tab navbar-link">
                  About Us
                </div>
                <div className="navbar-dropdown">
                  <Link to="/about-us" className="navbar-item">
                    About MatSci AI
                  </Link>
                  <Link to='/about-us/all-our-members' className="navbar-item">
                    MatSci AI Team
                  </Link>
                  <Link to='/about-us/careers' className="navbar-item">
                    Careers @MatSci AI
                  </Link>
                  <Link to='/about-us/contact-us' className="navbar-item">
                    Contact Us
                  </Link>
                  <hr className="navbar-divider" />
                  <a href="https://blog.matsci.ai/" target="_blank" className="navbar-item">
                    MatSci AI Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
