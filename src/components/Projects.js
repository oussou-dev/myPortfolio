import React from "react"
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	CardMenu,
	IconButton
} from "react-mdl"

class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: 0
		}
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					<Card shadow={5} className="projects-grid-card">
						<CardTitle
							style={{
								background:
									"url(https://via.placeholder.com/150x150) center / cover"
							}}
							className="projects-grid-title"
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Vero dicta facere tempora veniam. Distinctio omnis
							ex ea vero quidem, consequatur cum sed atque quibusdam
							laboriosam suscipit ab explicabo, dicta neque?
						</CardText>
						<CardActions border style={{ display: "flex" }}>
							<Button colored>
								<i className="fa fa-github-alt" /> GitHub
							</Button>
							<Button colored className="mdl-layout-spacer">
								<i className="fa fa-link" /> LiveDemo
							</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} className="projects-grid-card">
						<CardTitle
							style={{
								background:
									"url(https://via.placeholder.com/150x150) center / cover"
							}}
							className="projects-grid-title"
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Vero dicta facere tempora veniam. Distinctio omnis
							ex ea vero quidem, consequatur cum sed atque quibusdam
							laboriosam suscipit ab explicabo, dicta neque?
						</CardText>
						<CardActions border style={{ display: "flex" }}>
							<Button colored>
								<i className="fa fa-github-alt" /> GitHub
							</Button>
							<Button colored className="mdl-layout-spacer">
								<i className="fa fa-link" /> LiveDemo
							</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} className="projects-grid-card">
						<CardTitle
							style={{
								background:
									"url(https://via.placeholder.com/150x150) center / cover"
							}}
							className="projects-grid-title"
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Vero dicta facere tempora veniam. Distinctio omnis
							ex ea vero quidem, consequatur cum sed atque quibusdam
							laboriosam suscipit ab explicabo, dicta neque?
						</CardText>
						<CardActions border style={{ display: "flex" }}>
							<Button colored>
								<i className="fa fa-github-alt" /> GitHub
							</Button>
							<Button colored className="mdl-layout-spacer">
								<i className="fa fa-link" /> LiveDemo
							</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} className="projects-grid-card">
						<CardTitle
							style={{
								background:
									"url(https://via.placeholder.com/150x150) center / cover"
							}}
							className="projects-grid-title"
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Vero dicta facere tempora veniam. Distinctio omnis
							ex ea vero quidem, consequatur cum sed atque quibusdam
							laboriosam suscipit ab explicabo, dicta neque?
						</CardText>
						<CardActions border style={{ display: "flex" }}>
							<Button colored>
								<i className="fa fa-github-alt" /> GitHub
							</Button>
							<Button colored className="mdl-layout-spacer">
								<i className="fa fa-link" /> LiveDemo
							</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/*
					<Card shadow={5} className="projects-grid-card">
						<CardTitle
							style={{
								background:
									"url(https://via.placeholder.com/150x150) center / cover"
							}}
							className="projects-grid-title"
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Vero dicta facere tempora veniam. Distinctio omnis
							ex ea vero quidem, consequatur cum sed atque quibusdam
							laboriosam suscipit ab explicabo, dicta neque?
						</CardText>
						<CardActions border style={{ display: "flex" }}>
							<Button colored>
								<i className="fa fa-github-alt" /> GitHub
							</Button>
							<Button colored className="mdl-layout-spacer">
								<i className="fa fa-link" /> LiveDemo
							</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					*/}
				</div>
			)
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1> This is React Native</h1>
				</div>
			)
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1> This is Angular </h1>
				</div>
			)
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1> This is Ionic </h1>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs
					activeTab={this.state.activeTab}
					onChange={tabId =>
						this.setState({
							activeTab: tabId
						})
					}
					ripple
				>
					<Tab> React </Tab>
					<Tab> React Native </Tab>
					<Tab> Angular </Tab>
					<Tab> Ionic </Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects
