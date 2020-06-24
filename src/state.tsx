import * as React from "react"
import { store } from "./components/App"
import { SystemStatus, Program, Shortcut, ActionItem, ExpandableItem } from "./domain"
import { SMap } from "./types"
import { shortcuts, navigationItems } from "./data"

export type State = {
    status: SystemStatus
    programs: SMap<Program>
    desktop: {
        shortcuts: Shortcut[]
    }
    navigation: {
        items: Array<ActionItem | ExpandableItem>
    }
}

const isInitialized = () => {
    if (localStorage.getItem("status") === "INITALIZED") return true
    localStorage.setItem("status", "INITALIZED")
    return false
}

export const getInitialState = (): State => ({
    status: isInitialized() ? "DESKTOP" : "BOOTING",
    programs: {},
    desktop: {
        shortcuts
    },
    navigation: {
        items: navigationItems
    }
})

export const useGlobalState = () => {
    const [state, setState] = React.useState<State>(store.getState())
    const unsubscribe = store.subscribe(s => setState(s))
    React.useEffect(() => unsubscribe)

    return { state, dispatch: store.dispatch }
}
