import * as React from "react"
import { store } from "./components/App"
import { SystemStatus, Program } from "./domain"
import { SMap } from "./types"

export type State = {
    status: SystemStatus
    programs: SMap<Program>
}

const isInitialized = () => {
    if (localStorage.getItem("status") === "INITALIZED") return true
    localStorage.setItem("status", "INITALIZED")
    return false
}

export const getInitialState = (): State => ({
    status: isInitialized() ? "DESKTOP" : "BOOTING",
    programs: {}
})

export const useGlobalState = () => {
    const [state, setState] = React.useState<State>(store.getState())
    const unsubscribe = store.subscribe(s => setState(s))
    React.useEffect(() => unsubscribe)

    return { state, dispatch: store.dispatch }
}
