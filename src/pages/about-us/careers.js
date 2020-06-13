import React from 'react'
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import "./aboutUs.scss"
import $ from 'jquery'

class Careers extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      selectedJob: null
    }
    this.jobsOptions = [
      {
        title: 'RESEARCH ANALYST',
        roles: [
          'Research Analyst will work as part-time employees of MatSci AI. Under this role, you will be working on the following with Principal Consultants and Research Scientists:',
          'Field-specific research projects',
          'Data Analysis, Data Science and ML-based projects',
          'Computer Simulations',
          'Mathematical Modelling'
        ],
        qualifications: [
          'BTech or currently enrolled in BTech',
          'Have research orientated mindset',
          'Must be eager to learn new technologies',
          'Strong problem solving skills'
        ],
        preRequisits: [

        ],
        additionalBenfits:[
          'Global Industry Experiences: MatSci AI provides you an opportunity to work on industry projects from different parts of the world. Industry experiences from early stage of career bolsters your overall profile and helps you to achieve your personal life goals faster.',
          'Grow Your Academic Network: MatSci AI comprises of scientists, directors professors from top universities of the world, as a part of it, you get to work with these best academic minds, substantially increasing your academic reach and visibility.',
          'Conference Sponsorship: You can be the face of whole MatSci AI community and present our white papers and research projects at international and national conferences. We will sponsor the whole trip along with conference fee.',
          'Career Assistance: Given that MatSci AI is a global research community, we also provide career assistance, if you need, through our peer to peer support.'
        ],
        openPositions: 1,
        location: 'Work from home',
        applyLink: ''
      },
      {
        title: 'MATERIAL SCIENCE ANALYST - INTERN',
        roles: [
          'Material Science Analyst as an intern will have the following responsibilities:',
          'Work with a team of materials science PhDs from MIT and IITs to extract data related to the steel industry operations.',
          'Help to manipulate, analyze, and transform complex data from varying sources.'
        ],
        qualifications: [
         'Solid understanding of Metallurgy and Materials Science.',
         'Able to decipher various keywords and terminologies related to steel processing, welding and coating materials, etc.'
        ],
        bonusPoints: [
          'Experience of data analytics and Excel.',
          'Eager to apply the latest technology to materials science domain.',
          'Excellent problem solving, critical thinking, and organizational skills.',
          'Eager to work in a fast paced environment with people constantly looking for groundbreaking solutions using cutting edge technology.'
        ],
        preRequisits: [

        ],
        location: 'Work from home',
        additionalBenfits:[
        ],
        openPositions: 1,
        applyLink: 'https://forms.gle/xRA7dDB13YQrBkaa8'
      },
      {
        title: 'DB ENGINEER - INTERN',
        roles: [
          'DB Engineer as an intern will have the following responsibilities:',
          'Work with a team of highly technical and talented database engineers responsible for the development and maintenance of database for enterprise solutions.',
          'Help drive optimization, and develop a framework to improve data quality and consistency.',
          'Manipulate, analyze, and transform complex data from varying sources.',
          'Improve and optimize database design, administration, and management with coding and automation.',
          'Create documentation for your code.'
        ],
        qualifications: [
          'Solid understanding of different databases and the ability to decide which one to use depending on the priorities.',
          'Good understanding of data handling, modeling, and data access techniques.',
          'Experience of technology like MySql and MongoDB is a must.'
        ],
        bonusPoints: [
          'Experience of big-data, scripting, data analytics, and web scraping.',
          'Experience of working on cloud technologies especially AWS.',
          'Excellent problem solving, critical thinking, and organizational skills.',
          'Eager to work in a fast paced environment with people constantly looking for groundbreaking solutions using cutting edge technology.',
          'Experience of material science/mechanical engineering terminology.'
        ],
        preRequisits: [

        ],
        additionalBenfits:[
          'Global Industry Experiences: MatSci AI provides you an opportunity to work on industry projects from different parts of the world. Industry experiences from early stage of career bolsters your overall profile and helps you to achieve your personal life goals faster.',
          'Grow Your Academic Network: MatSci AI comprises of scientists, directors professors from top universities of the world, as a part of it, you get to work with these best academic minds, substantially increasing your academic reach and visibility.',
          'Conference Sponsorship: You can be the face of whole MatSci AI community and present our white papers and research projects at international and national conferences. We will sponsor the whole trip along with conference fee.',
          'Career Assistance: Given that MatSci AI is a global research community, we also provide career assistance, if you need, through our peer to peer support.'
        ],
        location: 'Work from home',
        openPositions: 1,
        applyLink: 'https://forms.gle/xRA7dDB13YQrBkaa8'
      },
      {
        title: 'DATA SCIENTIST - INTERN',
        roles: [
          'Data Scientist as an intern will have the following responsibilities:',
          'Work with a team of highly technical and talented software engineers responsible for the development and maintenance of complex and robust enterprise software solutions.',
          'Work with a team of highly technical and talented data scientists responsible to build large scale batch and real-time data pipelines using data processing frameworks.',
          'Understand the process flow of various projects and design prototypes of application screens.',
          'Work on end-to-end development of NLP systems to derive insights from material science industry texts.',
          'Evaluate and improve the quality of models and algorithms.'
        ],
        qualifications: [
          'Experience with noisy and/or unstructured textual data.',
          'Understanding of text processing and feature extraction techniques, such as tokenization, POS tagging, and dependency parsing.',
          'Good experience of working in Python and technologies based on Python.'
        ],
        bonusPoints: [
          'Experience of big-data, scripting, data analytics, and web scraping.',
          'Experience of at least one of the frameworks - Tensorflow, Keras, PyTorch.',
          'Experience of working on cloud technologies especially AWS.',
          'Excellent problem solving, critical thinking, and organizational skills.',
          'Eager to work in a fast paced environment with people constantly looking for groundbreaking solutions using cutting edge technology.',
          'Experience of material science/mechanical engineering terminology.'
        ],
        preRequisits: [

        ],
        additionalBenfits:[
        ],
        location: 'Work from home',
        openPositions: 3,
        applyLink: 'https://forms.gle/xRA7dDB13YQrBkaa8'
      },
      {
        title: 'SOFTWARE ENGINEER (FULL STACK)- INTERN',
        roles: [
          'Software Engineer as an intern will have the following responsibilities:',
          'Work with a team of highly technical and talented software engineers responsible for the development and maintenance of complex and robust enterprise software solutions.',
          'Work in coordination with data scientist and develop robust cloud applications with RESTful architecture that would be used in an industry setting.',
          'Understand the process flow of various projects and design prototypes of application screens.',
          'Develop application screens and connect it to controller services through APIs',
          'Create documentation for your code.'
          ],
        qualifications: [
          'Familiarity with popular software development life cycle especially agile methodology.',
          'Good hold of development in Java using any framework and knowledge of database.',
          'Good hold of popular front-end technologies like HTML5, CSS, JS, and interface of Angular/React.',
          'Good intuition of user experience and awareness of cloud compatibility issues.'
          ],
        bonusPoints: [
          'Experience of material science terminology.',
          'Experience of designing and software like Adobe Illustrator, Adobe Photoshop, etc.',
          'Experience of working on cloud technologies especially AWS.',
          'Eager to work with the latest technology.',
          'Excellent problem solving, critical thinking, and organizational skills.',
          'Eager to work in a fast paced environment with people constantly looking for groundbreaking solutions using cutting edge technology.'
          ],
        preRequisits: [

        ],
        additionalBenfits:[
        ],
        location: 'Work from home',
        openPositions: 5,
        applyLink: 'https://forms.gle/xRA7dDB13YQrBkaa8'
      },
    ]
  }

  componentDidMount(){

  }

  selectJob(x){
    this.setState({
      selectedJob: this.jobsOptions[x]
    })

    $('html, body').animate({
      scrollTop: $("#details").offset().top
     }, 1000);
  }

  render(){
    const seoData = {
      title: 'MatSci AI | Open Positions',
      description: 'Coming together is a beginning. Keeping together is progress. Working together is success. Join MatSci AI the Group of people who challenge and inspire you',
      lang: 'en',
      metaData:{
        
      }
    }

    return(
      <Layout>
        <SEO {...seoData} />
        <div className="aXgt floating-content-section">
          
          <div className="aXgt primary-header" style={{textAlign: 'center', marginTop: '20vh'}}>
            Open Positions
          </div>
        </div>
        <section className="aXgt front">
          {/* <div className="aXgt skewed-front"></div> */}
          <img src="https://matsci.ai/career-hero.jpg" className="videoBG" />
          <div className="video-overlay">

          </div>
        </section>
        <section className="aXgt front-bg">
        </section>
        <div className="careers-section" id="careers-section">
          <div className="columns" data-aos="slide-up">
            <div className="column clm-c">
              <div className="career-card"  onClick={() => this.selectJob(0)}>
                Research Analyst
              </div>
              
            </div>
            <div className="column clm-c" data-aos="slide-up">
              <div className="career-card" onClick={() => this.selectJob(2)} >
                DB Engineer Intern
              </div>
              <div className="career-card" onClick={() => this.selectJob(3)}>
                Data Scientist-Intern
              </div>
            </div>
          </div>
          <div className="columns" data-aos="slide-up">
            <div className="column clm-c">
              <div className="career-card" onClick={() => this.selectJob(4)} >
                Software Engineer(Full Stack)-Intern
              </div>
            </div>
            <div className="column clm-c" data-aos="slide-up">
            <div className="career-card" onClick={() => this.selectJob(1)}>
                Material Science Analyst-Intern
              </div>
            </div>
          </div>

          <div className="job-description" id="details">
            { 
              this.state.selectedJob && <div>
                <div className="job-title">
                  {this.state.selectedJob.title}
                </div>

                <div className="job-roles" data-aos="slide-up">
                  <div className="role-heading" data-aos="slide-up">
                  ROLES AND RESPONSIBILITIES
                  </div>
                  <div className="role-description" data-aos="slide-up">
                    {
                      this.state.selectedJob.roles.map(role => (
                        <li>{role}</li>
                      ))
                    }
                  </div>
                </div>
                
                <div className="job-skills" data-aos="slide-up">
                  <div className="role-heading" data-aos="slide-up">
                  REQUIRED QUALIFICATIONS
                  </div>
                  <div className="role-description" data-aos="slide-up">
                    {
                      this.state.selectedJob.qualifications.map(role => (
                        <li>{role}</li>
                      ))
                    }
                  </div>
                </div>

                {(this.state.selectedJob.bonusPoints && this.state.selectedJob.bonusPoints.length > 0) && <div className="job-bonus-points">
                  <div className="role-heading" data-aos="slide-up">
                  BONUS POINTS
                  </div>
                  <div className="role-description" data-aos="slide-up">
                    {
                      this.state.selectedJob.bonusPoints.map(role => (
                        <li>{role}</li>
                      ))
                    }
                  </div>
                </div>}

                {(this.state.selectedJob.additionalBenfits && this.state.selectedJob.additionalBenfits.length > 0) && <div className="job-additional-benfits">
                  <div className="role-heading" data-aos="slide-up">
                  ADDITIONAL BENEFITS
                  </div>
                  <div className="role-description" data-aos="slide-up">
                    {
                      this.state.selectedJob.additionalBenfits.map(role => (
                        <li>{role}</li>
                      ))
                    }
                  </div>
                </div>}

                {(this.state.selectedJob.preRequisits && this.state.selectedJob.preRequisits.length > 0) && <div className="job-pre-requisits">
                  <div className="role-heading">
                  PERQUISITES
                  </div>
                  <div className="role-description">
                    {
                      this.state.selectedJob.preRequisits.map(role => (
                        <li>{role}</li>
                      ))
                    }
                  </div>
                </div>}


                <div className="job-location">
                  <div className="role-heading">
                  LOCATION
                  </div>
                  <div className="role-description">
                    {
                      this.state.selectedJob.location
                    }
                  </div>
                </div>

                <div className="job-open-positions">
                  <div className="role-heading">
                  NUMBER OF OPEN POSITIONS
                  </div>
                  <div className="role-description">
                    {
                      this.state.selectedJob.openPositions
                    }
                  </div>
                </div>

                <div className="apply-now-button">
                  <a className="apply-btn" href={this.state.selectedJob.applyLink}>Apply Now</a>
                
                  <a className="apply-btn" href="#careers-section">Back to list!</a>
                </div>

              </div>
            }
          </div>
        </div>
      </Layout>
    );
  }
}

export default Careers