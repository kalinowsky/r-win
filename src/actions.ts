import { Program, SystemStatus } from "./domain"
import { filterObject } from "./utils"
import { SMap } from "./types"
import { State } from "./state"

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

type Action = ReturnType<actions>
export const reducer = (s: State, a: Action) => {
    if (a.name === "SET_STATUS") {
        return { ...s, status: a.payload }
    }
    if (a.name === "OPEN_PROGRAM") {
        return {
            ...s,
            programs: {
                ...s.programs,
                [a.payload.id]: a.payload
            }
        }
    }
    if (a.name === "CLOSE_PROGRAM") {
        return { ...s, programs: filterObject<SMap<Program>, Program>(s.programs, p => p.id !== a.payload.id) }
    }
    return s
}
