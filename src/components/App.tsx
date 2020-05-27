import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import { Desktop } from "./Desktop"
import { ResolutionGuard } from "./ResolutionGuard"

const GlobalStyle = createGlobalStyle`s
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: Pixelated MS Sans serif;
    -webkit-font-smoothing: none;
  }

  @font-face {
    font-family: "Pixelated MS Sans Serif";
    src: url("public/ms_sans_serif.woff") format("woff");
    src: url("public/ms_sans_serif.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

@font-face {
    font-family: "Pixelated MS Sans Serif";
    src: url("public/ms_sans_serif_bold.woff") format("woff");
    src: url("public/ms_sans_serif_bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
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
