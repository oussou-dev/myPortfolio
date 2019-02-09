import React from "react"
import { Grid, Cell } from "react-mdl"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"

class Resume extends React.Component {
	render() {
		return (
			<div className="resume-grid">
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: "center" }}>
							<img
								alt="icon"
								src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
								style={{ height: "200px" }}
							/>
						</div>
						<h2 style={{ paddingTop: ".5em" }}>John Doe</h2>
						<h4 style={{ color: "grey" }}> Programmer </h4>
						<hr
							style={{ borderTop: "3px solid #833fb2", width: "50%" }}
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Rem ad, harum voluptatibus non libero placeat quidem
							quam error, voluptas culpa necessitatibus adipisci natus
							nihil quis perspiciatis. Consequuntur esse aliquid
							tempora!
						</p>
						<hr
							style={{ borderTop: "3px solid #833fb2", width: "50%" }}
						/>
						<h5> Address</h5>
						<p> Hacker Way Menlo PArk, 94025</p>
						<h5> Phone </h5>
						<p> 00 00 00 00 00</p>
						<h5> Email </h5>
						<p> someone@example.com </p>
						<h5> Web </h5>
						<p> mywebsite.com </p>
						<hr
							style={{ borderTop: "3px solid #833fb2", width: "50%" }}
						/>
					</Cell>
					<Cell col={8} className="resume-right-col">
						<h2>Education</h2>
						<Education
							startYear={2002}
							endYear={2006}
							schoolName="My University"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<Education
							startYear={2007}
							endYear={2009}
							schoolName="My 2nd University"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<hr style={{ borderTop: "3px solid #e22947" }} />
						<h2>Experience</h2>
						<Experience
							startYear={2009}
							endYear={2012}
							jobName="First Job"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<Experience
							startYear={2012}
							endYear={2016}
							jobName="Second Job"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<hr style={{ borderTop: "3px solid #e22947" }} />
						<h2>Skills</h2>
						<Skills skill="javascript" progress={100} />
						<Skills skill="HTML/CSS" progress={80} />
						<Skills skill="NodeJS" progress={50} />
						<Skills skill="React" progress={25} />
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume
