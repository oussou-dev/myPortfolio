import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./styles.css"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"
import { BrowserRouter } from "react-router-dom"

const rootElement = document.getElementById("root")
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
)
