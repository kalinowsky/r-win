import * as React from "react"
import styled from "styled-components"
import { Program } from "../domain"
import { openProgram } from "../actions"
import { store } from "./App"
import { getShortcut } from "@/assets"

type Shortcut = {
    id: string
    name: string
    filename: string
    program: Program | null
    value?: string
}

const schema: Shortcut[] = [
    {
        id: "notepad-program",
        name: "Notepad.exe",
        filename: getShortcut("notepad"),
        program: {
            id: "notepad",
            meta: {
                bottomNav: true
            },
            value: {
                text: ""
            }
        }
    },
    {
        id: "notepad-readme",
        name: "README.txt",
        filename: getShortcut("notepad"),
        program: {
            id: "notepad",
            meta: {
                bottomNav: true
            },
            value: {
                text: "default"
            }
        }
    },
    {
        id: "github",
        name: "Github.html",
        filename: getShortcut("github"),
        program: null
    },
    {
        id: "linkedin",
        name: "Linkedin.html",
        filename: getShortcut("linkedin"),
        program: null
    }
]

export const Shortcuts: React.FC = () => {
    const [selected, setSelected] = React.useState<string>("")
    return (
        <Wrapper>
            {schema.map(s => (
                <ShortcutIconWrapper
                    key={s.name}
                    onClick={() => setSelected(s.name)}
                    onDoubleClick={() => {
                        s.program && store.dispatch(openProgram(s.program))
                    }}>
                    <Shortcut name={s.name} filename={s.filename} selected={s.name === selected} />
                </ShortcutIconWrapper>
            ))}

            {selected && <LoseFocusArea onClick={() => setSelected("")}></LoseFocusArea>}
        </Wrapper>
    )
}

const ShortcutIconWrapper = styled.div`
    z-index: ${p => p.theme.zIndex.shortcuts};
    max-height: 60px;
    max-width: 60px;
    margin: 10px;
`

const LoseFocusArea = styled.div`
    z-index: ${p => p.theme.zIndex.loseFocusArea};
    width: 100%;
    height: 100%;
    position: fixed;
`

const Wrapper = styled.div`
    min-height: calc(100% - 38px);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
`

export const Shortcut: React.FC<{ name: string; filename: string; selected: boolean }> = p => (
    <ShortcutWrapper>
        <Icon src={`public/${p.filename}`} />
        <ShortcutName selected={p.selected}>{p.name}</ShortcutName>
    </ShortcutWrapper>
)

const ShortcutWrapper = styled.div`
    height: 80px;
    width: 60px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ShortcutName = styled.div<{ selected: boolean }>`
    font-size: 11px;
    width: 62px;
    padding: 3px;
    margin-top: 3px;
    flex-wrap: wrap;
    white-space: break-spaces;
    word-break: break-word;
    ${p =>
        p.selected
            ? `
            color: white;
            background-color: #292992;
    `
            : ""}
`

const Icon = styled.img`
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 34px;
    width: 100%;
`
