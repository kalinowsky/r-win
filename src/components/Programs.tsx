import * as React from "react"
import { ShutdownDialog } from "./programs/ShutdownDialog"
import { store } from "./App"

export const Programs: React.FC = () => {
    const [programs, setPrograms] = React.useState({})
    store.subscribe(s => {
        setPrograms(s.programs)
    })
    return <>{Object.keys(programs).includes("shutdown") && <ShutdownDialog />}</>
}
