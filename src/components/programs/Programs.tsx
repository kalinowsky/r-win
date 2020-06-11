import * as React from "react"
import { ShutdownDialog } from "./ShutdownDialog"
import { store } from "../App"
import styled from "styled-components"
import { Notepad } from "./Notepad"

export const Programs: React.FC = () => {
    const [programs, setPrograms] = React.useState({})
    const unsubscribe = store.subscribe(s => {
        setPrograms(s.programs)
    })
    React.useEffect(() => unsubscribe)
    return (
        <>
            {Object.keys(programs).includes("shutdown") && (
                <ProgramWrapper>
                    <ShutdownDialog />
                </ProgramWrapper>
            )}
            {Object.keys(programs).includes("notepad") && (
                <ProgramWrapper>
                    <Notepad />
                </ProgramWrapper>
            )}
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
