import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import ContactUs from '../contactUs'
import '../../styles/bulma-styles.scss'
import './footer.scss'
const Footer = ( ) => (
  <>
  <div className="aXgt footer-1" data-aos="fade-up">
      <div className="footer-mid">
        <div className="details">
          <div className="social">
            <Link className="matsci-logo" to="/">
              <img src="https://logo-storage-matsci-ai.s3.amazonaws.com/full-logo-away-1.png" className="logo" alt="matsci-logo" />
            </Link>
            <div className="social-icons">
              <div className="social-icon"><a target="_blank" href="https://www.facebook.com/MatSciAI/"> <FacebookIcon/></a></div>
              <div className="social-icon"><a target="_blank" href="https://twitter.com/ai_matsci"> <TwitterIcon /></a></div>
              <div className="social-icon"><a target="_blank" href="https://www.pinterest.com/053q0gzz6o7vf8bx1o1wnq2n637qso/"> <PinterestIcon /></a></div>
              <div className="social-icon"><a target="_blank" href="https://www.linkedin.com/company/matsci-ai/"> <LinkedInIcon /></a></div>
            </div>
          </div>
          <div className="contact">
            <div className="heading-1"> Contact Info</div>
            <div className="address">
              <div className="icon"><LocationOnIcon /></div> Address:
              <div className="content">
                US Office: 550 Memorial Drive Cambridge MA 02139 <br />
                India Office: 2nd Floor, B71, Sector 46, Noida India
              </div>
            </div>
            <div className="phone-1">
              <div className="icon"><PhoneIcon /></div> Phone:
              <div className="content">
                US Office:<a href="tel:+1617-396-6958"> +1 (617) 396-6958 </a><br />
                India Office:<a href="tel:+91798-515-5103"> +91 79 8515 5103 </a>
              </div>
            </div>
            <div className="email">
              <div className="icon"><EmailIcon/></div> Email:
              <div className="content"><a href="mailto:info@matsci.ai">
              info@matsci.ai</a>
              </div>
            </div>
          </div>
        </div>
        <div className="siteMap">
          <div className="solutions">
            <div className="link" style={{ borderBottom: '2px solid white', fontSize: '20px',fontWeight:'400'}}>
              Solutions
            </div>
            <Link className="link" to="/solutions/infominer">
              Infominer
            </Link>
            <Link className="link" to="/solutions/materials-costimizer/">
              Material Costimizer
            </Link>
          </div>
          <div className="case-studies">
            <div className="link" style={{ borderBottom: '2px solid white', fontSize: '20px',fontWeight:'400'}}>
              Case Studies
            </div>
            <Link className="link" to="/case-studies/cs-costimizer">
              Raw Materials
            </Link>
            <Link className="link" to="/case-studies/cs-infominer">
              Unstructured Data
            </Link>
          </div>
          <div className="about-us">
            <Link className="link" to="/about-us">
              About Us!
            </Link>
            <Link className="link" to="/about-us/all-our-members">
              Meet MatSci AI Team
            </Link>
            <Link className="link" to="/about-us/careers">
              Careers
            </Link>
            <Link className="link" to="/about-us/contact-us">
              Contact Us!
            </Link>
            <a href="https://blog.matsci.ai/" target="_blank" className="link">
            MatSci Blogs
            </a>
          </div>
        </div>
        <div className="footer-btm">
          <Link to="/privacy-policy">Terms of Use and Privacy Policy</Link>
        </div>
      </div>
  </div>
  </>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
