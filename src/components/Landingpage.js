import React from "react"
import { Grid, Cell } from "react-mdl"

class Landing extends React.Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://via.placeholder.com/150"
							alt="avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h3> Full Stack JS Dev </h3>
							<hr />
							<p>
								BOOTSTRAP | MERN STACK | REACT NATIVE | MEAN STACK |
								IONIC
							</p>
							<hr />
							<div className="social-links">
								{/* Linkedin*/}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fa fa-linkedin-square"
										aria-hidden="true"
									/>
								</a>
								{/* Github*/}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fa fa-github-square"
										aria-hidden="true"
									/>
								</a>

								{/* FCC */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fa fa-free-code-camp"
										aria-hidden="true"
									/>
								</a>

								{/* Youtube */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fa fa-youtube-square"
										aria-hidden="true"
									/>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing
