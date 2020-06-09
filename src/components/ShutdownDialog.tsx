import * as React from "react"
import { Window } from "./common/Window"
import { FlexView } from "./common/Layout"
import { Button } from "./common/Button"
import { store } from "./App"
import { setStatus, closeProgram } from "../actions"

export const ShutdownDialog: React.FC = () => {
    const shutdown = () => {
        localStorage.setItem("status", "")
        store.dispatch(setStatus("SHUTDOWN"))
    }
    const dismiss = () => {
        store.dispatch(closeProgram("shutdown"))
    }
    return (
        <Window title="Shut Down System" onClose={dismiss} overlay>
            <FlexView>Hello world</FlexView>
            <FlexView justify="flex-end">
                <Button onClick={shutdown}>test</Button>
            </FlexView>
        </Window>
    )
}
