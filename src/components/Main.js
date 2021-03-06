import React from "react"
import { Route, Switch } from "react-router-dom"
import Landingpage from "./Landingpage"
import Aboutme from "./Aboutme"
import Contact from "./Contact"
import Projects from "./Projects"
import Resume from "./Resume"

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landingpage} />
		<Route path="/about" component={Aboutme} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/resume" component={Resume} />
	</Switch>
)

export default Main
