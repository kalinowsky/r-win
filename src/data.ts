import { openProgram } from "./actions"
import { Program, OpenProgramState, OpenLinkState, ActionState, Shortcut, ActionItem, ExpandableItem } from "./domain"
import { getShortcut } from "./assets"
import { _noop } from "./utils"

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

export const navigationItems: Array<ActionItem | ExpandableItem> = [
    {
        type: "expandable",
        value: {
            name: "Games",
            children: [
                {
                    type: "expandable",
                    value: {
                        name: "Not Implemented",
                        children: [
                            {
                                type: "action",
                                value: {
                                    name: "Saper",
                                    action: null
                                }
                            }
                        ]
                    }
                },
                {
                    type: "action",
                    value: {
                        name: "test name 4",
                        action: null
                    }
                }
            ]
        }
    },
    {
        type: "expandable",
        value: {
            name: "Programs",
            children: [
                {
                    type: "action",
                    value: {
                        name: "Paint",
                        action: null
                    }
                },
                {
                    type: "action",
                    value: {
                        name: "NotePad",
                        action: mkOpenPrgoram({ id: "notepad", meta: { bottomNav: true }, value: { text: "" } })
                    }
                }
            ]
        }
    },
    {
        type: "action",
        value: {
            name: "Mock Position",
            action: null
        }
    }
]
