import * as React from "react"
import { Window } from "../common/Window"
import { FlexView } from "../common/Layout"
import { Button, ButtonWrapper } from "../common/Button"
import { store } from "../App"
import { setStatus, closeProgram } from "../../actions"
import { Radio } from "../common/Radio"

export const ShutdownDialog: React.FC = () => {
    const [action, setAction] = React.useState<string | null>(null)

    const shutdown = () => {
        if (action === "shutdown") {
            localStorage.setItem("status", "")
            store.dispatch(setStatus("SHUTDOWN"))
        }
    }
    const dismiss = () => {
        store.dispatch(closeProgram("shutdown"))
    }
    return (
        <Window title="Shut Down System" onClose={dismiss} overlay>
            <Radio
                title="What Do you want this tab to do?"
                onChange={setAction}
                options={[
                    { name: "shutdown", label: "Shutdown this tab" },
                    { name: "restart", label: "Restart computer", disabled: true },
                    { name: "make-money", label: "Make money when you do nothing", disabled: true }
                ]}
            />
            <FlexView justify="flex-end">
                <ButtonWrapper>
                    <Button onClick={shutdown}>Ok</Button>
                    <Button onClick={dismiss}>Cancel</Button>
                </ButtonWrapper>
            </FlexView>
        </Window>
    )
}
