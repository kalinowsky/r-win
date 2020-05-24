import * as React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import App from "./components/App"

render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.querySelector("body")
)
