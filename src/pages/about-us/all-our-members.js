import React from 'react';

import Layout from "../../components/layout"
import Image from "../../components/image"
import ContactUs from './../../components/contactUs'
import SEO from "../../components/seo"
import "./aboutUs.scss";

class AllMatSciMember extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }

    this.allMatSciMembers= [
      {
        name: 'SOMESH MOHAPATRA',
        position: 'Co-founder & Operations Lead',
        college: 'PhD, MIT, USA, Ex-UIDAI',
        social: [

        ],
        email: 'someshm@matsci.ai',
        imageSrc: 'somesh.jpg'
      },
      {
        name: 'SHIVAM GUPTA',
        position: 'Co-founder & Business Lead',
        college: 'IIT Roorkee, Ex. Citi Group',
        social: [

        ],
        email: 'sgupta@matsci.ai',
        imageSrc: 'shivam.jpg'
      },
      {
        name: 'AKSHAT ANAND',
        position: 'Co-founder & Technology Lead',
        college: 'IIT Kanpur, Ex. Citi Group',
        social: [

        ],
        email: 'akanand@matsci.ai',
        imageSrc: 'akshat.jpg'
      },
      {
        name: 'Hari Bandi',
        position: 'Research Lead',
        college: 'PhD, MIT, USA, Ex-Google',
        social: [

        ],
        email: '',
        imageSrc: 'hari.jpg'
      },
      {
        name: 'SUDHIR KUMAR',
        position: 'Design and Development Lead, UI/UX Designer and Developer',
        college: 'IIT Kanpur, Ex. HSBC(HTI)',
        social: [

        ],
        email: 'kumarsudhir089@gmail.com',
        imageSrc: 'sudhir.png'
      },
      {
        name: 'Jeanne Ross',
        position: 'Principal Consultant',
        college: 'Director, MIT CISR',
        social: [

        ],
        email: '',
        imageSrc: 'jeane.png'
      },
      {
        name: 'PROF. SOUMITRA SATAPATHI',
        position: 'Principal Consultant',
        college: 'Assistant Professor IIT Roorkee',
        social: [

        ],
        email: '',
        imageSrc: 'soumitra.jpg'
      },
      {
        name: 'Subhash Sahu',
        position: 'Backend Development Lead',
        college: 'Ex. Ingram Micro',
        social: [

        ],
        email: '',
        imageSrc: 'subhash.jpg'
      },
      {
        name: 'DR. RAHUL BHATTACHARYYA',
        position: 'Research Scientist',
        college: 'PhD IIT Kanpur, India',
        social: [

        ],
        email: '',
        imageSrc: 'rahul.jpg'
      },
      {
        name: 'Anjali Shukla',
        position: 'Human Resource Manager',
        college: 'Ex. Tech Mahindra',
        social: [

        ],
        email: 'anjalisukla97@gmail.com',
        imageSrc: 'anjali.jpg'
      },
      {
        name: 'Mohd Asim Hashmi',
        position: 'Business Analyst',
        college: 'Ex. CED Commerce',
        social: [

        ],
        email: 'asimhashmi1090@gmail.com',
        imageSrc: 'asim.jpg'
      },
      {
        name: 'DR. SUMEET PAWAR',
        position: 'Research Scientist',
        college: 'Clinical Fellow, Yale University',
        social: [

        ],
        email: '',
        imageSrc: 'sumeet.jpeg'
      },
      {
        name: 'Aniket Kumar',
        position: 'Market Research Analyst',
        college: 'Ex. Ingram Micro',
        social: [

        ],
        email: 'aniket.kumar321@gmail.com',
        imageSrc: 'aniket.png'
      },
      {
        name: 'NURAY GUNDUZ',
        position: 'Research Scientist',
        college: 'Research Fellow,  MIT, USA',
        social: [

        ],
        email: '',
        imageSrc: 'nuray.jpg'
      },
      {
        name: 'NIDHI MANIAR',
        position: 'Research Scientist',
        college: 'Masters, Pharmacology Northeastern University',
        social: [

        ],
        email: '',
        imageSrc: 'nidhi.png'
      },
      {
        name: 'RUSHIKESH RATHOD',
        position: 'Research Analyst',
        college: 'IIT Bombay',
        social: [

        ],
        email: '',
        imageSrc: 'rushikesh.png'
      },
      {
        name: 'HEMANT BUGGA',
        position: 'Research Analyst',
        college: 'Blekinge Institute of Technology, Sweden',
        social: [

        ],
        email: '',
        imageSrc: 'hemanth.jpg'
      }
    ]
  }

  componentDidMount(){

  }

  render(){

    const seoData = {
      title: 'MatSci AI | Meet MatSci Team',
      description: 'MatSci AI is more than an AI solution company. We combine full Domain-Knowledge with AI software development to cater Manufacturing Industry.',
      lang: 'en',
      metaData:{
        
      }
    }
    return(
      <Layout>
        <SEO {...seoData} />
        <div className="aXgt floating-content-section">
          
          <div className="aXgt primary-header" style={{textAlign: 'center', marginTop: '20vh'}}>
          Meet MatSci Team
          </div>
          
        </div>

        <section className="aXgt front">
          <img className="videoBG" src="https://matsci.ai/all-team.jpg" />
          <div className="video-overlay" style={{ opacity: '0.8'}}></div>
          {/* <div className="aXgt skewed-front"></div> */}
        </section>
        <section className="aXgt front-bg">
          {/* <div className="aXgt skewed-front"> </div> */}
        </section>

        <div className="all-member-list">
            
          <div className="all-team">
            {
              this.allMatSciMembers.map( member => (
                <div className="member-card" data-aos="slide-up">
                  <div className="member-image">
                    <img  src={`https://matsci.ai/${member.imageSrc}`} alt={`${member.name} image`} />
                  </div>
                  <div className="member-details">
                    <div className="name1">{member.name} </div>
                    <div className="position">{member.position} </div>
                    <div className="college">{member.college} </div>
                    <div className="social">{
                      member.social.map(x => (
                        <a className="social-icon" href="">

                        </a>
                      ))
                    } </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <ContactUs />
      </Layout>
    );
  }
}

export default AllMatSciMember