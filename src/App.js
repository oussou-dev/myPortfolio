import React from "react"
import "./App.css"
import {
	Header,
	Navigation,
	Layout,
	Drawer,
	Content
} from "react-mdl"
import { Link } from "react-router-dom"
import Main from "./components/Main"

class App extends React.Component {
	render() {
		return (
			<div className="demo-big-content">
				<Layout>
					<Header
						className="header-color"
						title="My Portfolio"
						scroll
					>
						<Navigation>
							<Link to="/resume">Resume</Link>
							<Link to="/about">About Me</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
						</Navigation>
					</Header>
					<Drawer title="Title">
						<Navigation>
							<Link to="/resume">Resume</Link>
							<Link to="/about">About Me</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
						</Navigation>
					</Drawer>
					<Content>
						<div className="page-content" />
						<Main />
					</Content>
				</Layout>
			</div>
		)
	}
}

export default App
