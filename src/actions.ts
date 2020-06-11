import { SystemStatus } from "./components/App"
import { programs } from "./domain"

type setStatusType = (s: SystemStatus) => { name: "SET_STATUS"; payload: SystemStatus }
export const setStatus: setStatusType = s => ({
    name: "SET_STATUS",
    payload: s
})

export type openProgramType = (
    id: programs,
    value?: string
) => { name: "OPEN_PROGRAM"; payload: { id: programs; value: string } }
export const openProgram: openProgramType = (id, value) => ({
    name: "OPEN_PROGRAM",
    payload: {
        id,
        value
    }
})

export type closeProgramType = (id: programs) => { name: "CLOSE_PROGRAM"; payload: { id: programs } }
export const closeProgram: closeProgramType = id => ({
    name: "CLOSE_PROGRAM",
    payload: { id }
})

export type actions = setStatusType | openProgramType | closeProgramType
