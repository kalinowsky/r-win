import * as React from "react"
import { Window } from "../common/Window"
import { store } from "../App"
import { closeProgram } from "../../actions"
import styled from "styled-components"

export const Notepad: React.FC = () => {
    const dismiss = () => {
        store.dispatch(closeProgram("notepad"))
    }
    return (
        <Window title="Notepad" onClose={dismiss} height="400px" width="600px">
            <TextArea></TextArea>
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
    height: calc(100% - 16px);
    & {
        resize: none;
        outline: none;
    }
`
