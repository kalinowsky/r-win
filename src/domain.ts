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

export type Program = NotepadProgram | ShutdownProgram
