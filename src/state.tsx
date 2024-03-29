import * as React from "react"
import { store } from "./components/App"
import { SystemStatus, Program, Shortcut, ActionItem, ExpandableItem } from "./domain"
import { SMap } from "./types"
import { shortcuts, navigationItems } from "./data"
import { Asset } from "./assets"

export type State = {
    status: SystemStatus
    programs: SMap<Program>
    desktop: {
        shortcuts: Shortcut[]
        wallpaper: Asset | null
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
        shortcuts,
        wallpaper: "funny-cat.jpg"
    },
    navigation: {
        items: navigationItems
    }
})

export const useGlobalState = () => {
    const [state, setState] = React.useState<State>(store.getState())
    React.useEffect(() => {
        const unsubscribe = store.subscribe(s => setState(s))
        return unsubscribe
    })

    return { state, dispatch: store.dispatch }
}
