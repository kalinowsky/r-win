import { SystemStatus } from "./components/App"
import { programs } from "./programs"

type setStatusType = (s: SystemStatus) => { name: "SET_STATUS"; payload: SystemStatus }
export const setStatus: setStatusType = s => ({
    name: "SET_STATUS",
    payload: s
})

export type openProgramType = (id: programs) => { name: "OPEN_PROGRAM"; payload: programs }
export const openProgram: openProgramType = id => ({
    name: "OPEN_PROGRAM",
    payload: id
})

export type closeProgramType = (id: programs) => { name: "CLOSE_PROGRAM"; payload: programs }
export const closeProgram: closeProgramType = id => ({
    name: "CLOSE_PROGRAM",
    payload: id
})

export type actions = setStatusType | openProgramType | closeProgramType
