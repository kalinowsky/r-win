import { openProgram } from "./actions"
import { Program, OpenProgramState, OpenLinkState, ActionState, Shortcut } from "./domain"
import { getShortcut } from "./assets"

export const mkOpenPrgoram = (program: Program): OpenProgramState => ({
    type: "program",
    value: {
        program
    }
})

export const mkOpenLink = (link: string): OpenLinkState => ({
    type: "link",
    value: {
        link
    }
})

export const runActionState = (s: ActionState, dispatch: any) => {
    if (s.type === "program") return dispatch(openProgram(s.value.program))
    if (s.type === "link") return window.open(s.value.link)
    return null
}

export const shortcuts: Shortcut[] = [
    {
        id: "notepad-program",
        name: "Notepad.exe",
        filename: getShortcut("notepad"),
        action: mkOpenPrgoram({
            id: "notepad",
            meta: {
                bottomNav: true
            },
            value: {
                text: ""
            }
        })
    },
    {
        id: "notepad-readme",
        name: "README.txt",
        filename: getShortcut("notepad"),
        action: mkOpenPrgoram({
            id: "notepad",
            meta: {
                bottomNav: true
            },
            value: {
                text: "default"
            }
        })
    },
    {
        id: "github",
        name: "Github.html",
        filename: getShortcut("github"),
        action: mkOpenLink("https://github.com")
    },
    {
        id: "linkedin",
        name: "Linkedin.html",
        filename: getShortcut("linkedin"),
        action: mkOpenLink("https://linkedin.com")
    }
]
