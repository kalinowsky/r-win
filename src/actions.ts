import { SystemStatus } from "./components/App"
import { Program } from "./domain"

type setStatusType = (s: SystemStatus) => { name: "SET_STATUS"; payload: SystemStatus }
export const setStatus: setStatusType = s => ({
    name: "SET_STATUS",
    payload: s
})

export type openProgramType = (id: Program) => { name: "OPEN_PROGRAM"; payload: Program }
export const openProgram: openProgramType = p => ({
    name: "OPEN_PROGRAM",
    payload: p
})

export type closeProgramType = (
    id: Pick<Program, "id">["id"]
) => { name: "CLOSE_PROGRAM"; payload: Pick<Program, "id"> }
export const closeProgram: closeProgramType = id => ({
    name: "CLOSE_PROGRAM",
    payload: { id }
})

export type actions = setStatusType | openProgramType | closeProgramType
