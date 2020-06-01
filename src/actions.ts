import { SystemStatus } from "./components/App"

type setStatusType = (s: SystemStatus) => { name: "SET_STATUS"; payload: SystemStatus }

export const setStatus: setStatusType = s => ({
    name: "SET_STATUS",
    payload: s
})

export type actions = setStatusType
