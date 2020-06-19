import * as React from "react"
import { Window } from "../common/Window"
import { FlexView } from "../common/Layout"
import { Button, ButtonWrapper } from "../common/Button"
import { store } from "../App"
import { closeProgram } from "../../actions"

export const Error: React.FC = () => {
    const dismiss = () => {
        store.dispatch(closeProgram("error"))
    }
    const { error } = store.getState().programs
    if (error.id !== "error") return null

    return (
        <Window title={error.value.title} onClose={dismiss} overlay primary>
            <FlexView justify="center" align="center">
                {error.value.text}
                <ButtonWrapper>
                    <Button onClick={dismiss}>{error.value.buttonText}</Button>
                </ButtonWrapper>
            </FlexView>
        </Window>
    )
}
