import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import { Desktop } from "./Desktop"
import { ResolutionGuard } from "./ResolutionGuard"
import { Boot, ShutDown } from "./SystemBoot"
import { createStore } from "../store"
import { actions } from "@/actions"
import { SMap } from "@/types"
import { Program } from "@/domain"
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
  textarea {
      overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 16px;
    }
    ::-webkit-scrollbar:horizontal {
    height: 17px;
    }

    ::-webkit-scrollbar-corner {
    background: var(--button-face);
    }

    ::-webkit-scrollbar-track {
    background-image: url("./public/scrollbar-background.svg");
    }

    ::-webkit-scrollbar-thumb {
    background-color: var(--button-face);
    box-shadow: var(--border-raised-outer), var(--border-raised-inner);
    }

    ::-webkit-scrollbar-button:horizontal:start:decrement,
    ::-webkit-scrollbar-button:horizontal:end:increment,
    ::-webkit-scrollbar-button:vertical:start:decrement,
    ::-webkit-scrollbar-button:vertical:end:increment {
    display: block;
    }

    ::-webkit-scrollbar-button:vertical:start {
    height: 17px;
    background-image: url("./public/button-up.svg");
    }
    ::-webkit-scrollbar-button:vertical:end {
    height: 17px;
    background-image: url("./public/button-down.svg");
    }
    ::-webkit-scrollbar-button:horizontal:start {
    width: 16px;
    background-image: url("./public/button-left.svg");
    }
    ::-webkit-scrollbar-button:horizontal:end {
    width: 16px;
    background-image: url("./public/button-right.svg");
    }
    ::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
    cursor: pointer;
    }
`

export type SystemStatus = "BOOTING" | "DESKTOP" | "SHUTDOWN"

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
        return {
            ...s,
            programs: {
                ...s.programs,
                [a.payload.id]: a.payload
            }
        }
    }
    if (a.name === "CLOSE_PROGRAM") {
        return { ...s, programs: filterObject<SMap<Program>, Program>(s.programs, p => p.id !== a.payload.id) }
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
