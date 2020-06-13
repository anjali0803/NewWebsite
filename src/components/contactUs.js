import React from 'react';

class ContactUs extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    return (
      <>
        <div className="footer-contact-us">
          <div className="columns">
            <div className="column">
              <div className="mini-header" data-aos="slide-up">
                Contact Us<span class="blinking-cursor"></span>
              </div>
              <div className="heading-1" data-aos="slide-up">
                Let's talk MatSci AI
              </div>
              <div className="text-1" data-aos="slide-up">
              We are available 24*7 to discuss how Knowledge Graph enabled AI solutions can help your manufacturing business. Please let us know if you or your team is interested to reduce manufacturing cost or increase operational efficiency across the value chain. 
You can also directly reach us to <span className="email">info@matsci.ai</span>

              </div>
            </div>
            <div className="column" data-aos="slide-up">
            <div class="field">
              <label class="label-1">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Your Name" />
              </div>
            </div>

            <div class="field">
              <label class="label-1">Organization</label>
              <div class="control">
                <input class="input" type="text" placeholder="Your Organization" />
              </div>
            </div>

            <div class="field">
              <label class="label-1">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Your Email" />
              </div>
              {/* <p class="help is-danger">This email is invalid</p> */}
            </div>


            <div class="field">
              <label class="label-1">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Your Messege"></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button-1">SEND</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactUs