import * as React from "react"
import { ShutdownDialog } from "./programs/ShutdownDialog"
import { store } from "./App"
import styled from "styled-components"

export const Programs: React.FC = () => {
    const [programs, setPrograms] = React.useState({})
    store.subscribe(s => {
        setPrograms(s.programs)
    })
    return (
        <>
            {Object.keys(programs).includes("shutdown") && (
                <ProgramWrapper>
                    <ShutdownDialog />
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
