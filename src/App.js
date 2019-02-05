import React from "react"
import "./App.css"
import {
	Header,
	Navigation,
	Layout,
	Drawer,
	Content
} from "react-mdl"

class App extends React.Component {
	render() {
		return (
			<div className="demo-big-content">
				<Layout>
					<Header title="Title" scroll>
						<Navigation>
							<a href="/">Link</a>
							<a href="/">Link</a>
							<a href="/">Link</a>
							<a href="/">Link</a>
						</Navigation>
					</Header>
					<Drawer title="Title">
						<Navigation>
							<a href="/">Link</a>
							<a href="/">Link</a>
							<a href="/">Link</a>
							<a href="/">Link</a>
						</Navigation>
					</Drawer>
					<Content>
						<div className="page-content" />
					</Content>
				</Layout>
			</div>
		)
	}
}

export default App
