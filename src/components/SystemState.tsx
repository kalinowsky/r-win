import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { Boot, ShutDown } from "./SystemBoot"
import { Desktop } from "./Desktop"
import { useGlobalState } from "@/state"

export const SystemState: React.FC = () => {
    const { state } = useGlobalState()
    return (
        <>
            {state.status == "BOOTING" && <Boot />}
            {state.status === "SHUTDOWN" && <ShutDown />}
            <Switch>
                <Route exact path="/" component={Desktop} />
            </Switch>
        </>
    )
}
