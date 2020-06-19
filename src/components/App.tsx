import * as React from "react"
import { ResolutionGuard } from "./ResolutionGuard"
import { createStore } from "../store"
import { reducer } from "../actions"
import { GlobalStyle, Wrapper, ThemeProvider, defaultTheme } from "./App.styles"
import { getInitialState } from "../state"
import { SystemState } from "./SystemState"

export const store = createStore(reducer, getInitialState())

export const App: React.FC = () => (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ResolutionGuard>
            <Wrapper>
                <SystemState />
            </Wrapper>
        </ResolutionGuard>
    </ThemeProvider>
)

export default App
