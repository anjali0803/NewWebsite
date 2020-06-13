import React from "react"
import { Link } from "gatsby"

import "../../styles/bulma-styles.scss"
import "./index.scss"

const Introduction = () => (
	<div className="aXgt intro-section">
		<div className="aXgt container is-fluid">
			<div className="aXgt intro-main-heading">
				We are MatSci AI.
			</div>
			<div className="aXgt intro-secondary-heading">
				Here, What we can do for you?
			</div>
			<div className="aXgt intro-main-text">
			We break down a project into multiple sub-projects and our AI bot forms a perfect team of independent researchers from our ecosystem and in-house technology experts for each sub-project.
	We combine domain knowledge and cutting-edge technologies at the same time to achieve the state of the art performance.
			</div>

			<div class="columns is-desktop">
				<div class="column"></div>
				<div class="column"></div>
			</div>
		</div>
	</div>
)

export default Introduction
