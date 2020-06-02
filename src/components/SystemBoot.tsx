import * as React from "react"
import { DarkScreen } from "./ResolutionGuard"
import { store } from "./App"
import { setStatus } from "../actions"

const setAppStatus = () => store.dispatch(setStatus("DESKTOP"))

export const Boot: React.SFC = () => {
    setTimeout(setAppStatus, 3000)
    return <DarkScreen text="Booting" loading />
}

export const ShutDown: React.SFC = () => {
    return <DarkScreen text="It's Now Safe To Turn Off this tab." />
}
