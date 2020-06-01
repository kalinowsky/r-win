import * as React from "react"
import { DarkScreen } from "./ResolutionGuard"

const setAppStatus = () => localStorage.setItem("status", "INITIALIZED")

export const FirstBoot: React.SFC = () => {
    setTimeout(setAppStatus, 3000)
    return <DarkScreen text="Booting" />
}
