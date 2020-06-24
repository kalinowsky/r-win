import { ValueState } from "./types"

type NotepadProgram = {
    id: "notepad"
    meta: {
        bottomNav: boolean
    }
    value: {
        text: string
    }
}

type ShutdownProgram = {
    id: "shutdown"
    meta: {
        bottomNav: boolean
    }
    value: null
}

type NotImplementedError = {
    id: "error"
    meta: {
        bottomNav: boolean
    }
    value: {
        text: string
        buttonText: string
        title: string
    }
}

export type Program = NotepadProgram | ShutdownProgram | NotImplementedError
export type ProgramType = Pick<Program, "id">["id"]

export type SystemStatus = "BOOTING" | "DESKTOP" | "SHUTDOWN"

export type Shortcut = {
    id: string
    name: string
    filename: string
    action: ActionState | null
    value?: string
}

export type OpenProgramState = ValueState<
    "program",
    {
        program: Program
    }
>

export type OpenLinkState = ValueState<"link", { link: string }>

export type ActionState = OpenProgramState | OpenLinkState
