import React from "react"
import {
	Grid,
	Cell,
	List,
	ListItem,
	ListItemContent
} from "react-mdl"

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h3>John Doe</h3>
						<img
							alt="avatar"
							src="https://via.placeholder.com/150x150"
							style={{ height: "250px" }}
						/>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Est, laboriosam fugiat facere neque assumenda,
							repellendus magni sapiente.
						</p>
					</Cell>
					<Cell col={6} phone={4}>
						<h3> Contact Me </h3>
						<hr />
						<div className="contact-list>">
							<List>
								<ListItem>
									<ListItemContent
										style={{ fontSize: "20px", fontFamily: "Anton" }}
									>
										<i
											className="fa fa-phone-square"
											aria-hidden="true"
										/>{" "}
										00 00 00 00 00
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "20px", fontFamily: "Anton" }}
									>
										<i className="fa fa-skype" aria-hidden="true" />{" "}
										MySkypeId
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "20px", fontFamily: "Anton" }}
									>
										<i
											className="fa fa-envelope"
											aria-hidden="true"
										/>{" "}
										someone@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "20px", fontFamily: "Anton" }}
									>
										<i
											className="fa fa-linkedin"
											aria-hidden="true"
										/>{" "}
										LinkedinId
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "20px", fontFamily: "Anton" }}
									>
										<i className="fa fa-twitter" aria-hidden="true" />{" "}
										TwitterId
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact
