import * as React from "react"
import styled from "styled-components"
import { Notepad } from "./Notepad"
import { ShutdownDialog } from "./ShutdownDialog"
import { Error } from "./Error"
import { useGlobalState } from "../../state"

export const Programs: React.FC = () => {
    const { state } = useGlobalState()
    const programs = state.programs
    return (
        <>
            <ProgramWrapper onDragOver={e => e.preventDefault()}>
                {Object.keys(programs).includes("shutdown") && <ShutdownDialog />}
                {Object.keys(programs).includes("notepad") && <Notepad />}
                {Object.keys(programs).includes("error") && <Error />}
            </ProgramWrapper>
        </>
    )
}

const ProgramWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
`
