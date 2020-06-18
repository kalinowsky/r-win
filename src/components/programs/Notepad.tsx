import * as React from "react"
import { Window, NavBelt, NavOption } from "../common/Window"
import { store } from "../App"
import { closeProgram, openProgram } from "../../actions"
import styled from "styled-components"
import { useGlobalState } from "@/state"

export const Notepad: React.FC = () => {
    const dismiss = () => {
        store.dispatch(closeProgram("notepad"))
    }
    // const { notepad } = store.getState().programs
    const { state } = useGlobalState()
    const { notepad } = state.programs
    return (
        <Window
            title="Notepad"
            onClose={dismiss}
            height="400px"
            width="600px"
            borderWidth="small"
            nav={
                <NavBelt
                    onClick={() =>
                        store.dispatch(
                            openProgram({
                                id: "error",
                                meta: { bottomNav: false },
                                value: {
                                    text: "Feature is not implemented yet, sorry",
                                    buttonText: "Okey",
                                    title: "Not implemented error"
                                }
                            })
                        )
                    }>
                    <NavOption>File</NavOption>
                    <NavOption>Edit</NavOption>
                    <NavOption>Format</NavOption>
                    <NavOption>Help</NavOption>
                </NavBelt>
            }>
            <TextArea defaultValue={notepad.value.text}></TextArea>
        </Window>
    )
}

const TextArea = styled.textarea`
    padding: 3px 4px;
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
    background-color: #fff;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    width: 100%;
    height: calc(100% - 36px);
    & {
        resize: none;
        outline: none;
    }
`
