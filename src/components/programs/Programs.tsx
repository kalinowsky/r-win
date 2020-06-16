import * as React from "react"
import styled from "styled-components"
import { Program } from "@/domain"
import { SMap } from "@/types"
import { store } from "../App"
import { Notepad } from "./Notepad"
import { ShutdownDialog } from "./ShutdownDialog"
import { Error } from "./Error"

export const Programs: React.FC = () => {
    const [programs, setPrograms] = React.useState<SMap<Program>>({})
    const unsubscribe = store.subscribe(s => {
        setPrograms(s.programs)
    })
    React.useEffect(() => unsubscribe)
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
