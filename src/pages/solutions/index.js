import React from "react"
import { Link } from "gatsby"

import "../../styles/bulma-styles.scss"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const Soltuions = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Soltuions</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/">Go to Home</Link>
    <div class="columns">
      <div class="column">
        First column
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        Fourth column
      </div>
    </div>
  </Layout>
)

export default Soltuions
