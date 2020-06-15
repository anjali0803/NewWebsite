import React from "react"
import { Link, navigate } from "gatsby"
import $ from "jquery"
import Layout from "../../components/layout"

class solutions extends React.Component{
  constructor(props){
    super(props)
  } 

  componentDidMount(){
    navigate(
      "/solutions/materials-costimizer",{}
    )
  }

  render(){
    
    return (
      <Layout>
        
      </Layout>
         );
  }
}


export default solutions

