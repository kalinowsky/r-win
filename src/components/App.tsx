import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import { Desktop } from "./Desktop"
import { ResolutionGuard } from "./ResolutionGuard"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif
  }

  @font-face {
    font-family: Pixellari;
    src: url("public/Pixellari.ttf");
  }
`

export const App: React.FC = () => (
    <>
        <GlobalStyle />
        <ResolutionGuard>
            <Wrapper>
                <Switch>
                    <Route exact path="/" component={Desktop} />
                </Switch>
            </Wrapper>
        </ResolutionGuard>
    </>
)

export default App

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
