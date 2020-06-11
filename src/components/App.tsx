import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import { Desktop } from "./Desktop"
import { ResolutionGuard } from "./ResolutionGuard"
import { Boot, ShutDown } from "./SystemBoot"
import { createStore } from "../store"
import { actions } from "@/actions"
import { SMap } from "@/types"
import { programs } from "@/domain"
import { filterObject } from "../utils"

const GlobalStyle = createGlobalStyle`
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

export type SystemStatus = "BOOTING" | "DESKTOP" | "SHUTDOWN"

export type Program = {
    id: programs
}

type State = {
    status: SystemStatus
    programs: SMap<Program>
}

const isInitialized = () => {
    if (localStorage.getItem("status") === "INITALIZED") return true
    localStorage.setItem("status", "INITALIZED")
    return false
}

const state: State = {
    status: isInitialized() ? "DESKTOP" : "BOOTING",
    programs: {}
}

type Action = ReturnType<actions>
const reducer = (s: State, a: Action) => {
    if (a.name === "SET_STATUS") {
        return { ...s, status: a.payload }
    }
    if (a.name === "OPEN_PROGRAM") {
        return { ...s, programs: { ...s.programs, [a.payload.id]: a.payload } }
    }
    if (a.name === "CLOSE_PROGRAM") {
        return { ...s, programs: filterObject(s.programs, p => p.id !== a.payload.id) }
    }
    return s
}

export const store = createStore(reducer, state)

export const App: React.FC = () => (
    <>
        <GlobalStyle />
        <ResolutionGuard>
            <Wrapper>
                <SystemState />
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

const SystemState: React.FC = () => {
    const [status, setStatus] = React.useState(store.getState().status)

    store.subscribe(s => setStatus(s.status))
    return (
        <>
            {status == "BOOTING" && <Boot />}
            {status === "SHUTDOWN" && <ShutDown />}
            <Switch>
                <Route exact path="/" component={Desktop} />
            </Switch>
        </>
    )
}
