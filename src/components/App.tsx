import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import { Page } from "./Page"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    background-color: #92a8d0;
  }
`

export const App: React.FC = () => (
    <Wrapper>
        <GlobalStyle />
        <Switch>
            <Route exact path="/" component={Page} />
        </Switch>
    </Wrapper>
)

export default App

const Wrapper = styled.div``
