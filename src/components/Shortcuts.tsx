import * as React from "react"
import styled from "styled-components"
import { Program } from "../domain"
import { store } from "./App"
import { openProgram } from "../actions"

type Shortcut = {
    name: string
    filename: string
    program: Program
    value?: string
}

const SHORTCUTS: Shortcut[] = [
    {
        name: "README",
        filename: "notepad.svg",
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
        name: "SHUTDOWN TEST",
        filename: "notepad.svg",
        program: {
            id: "shutdown",
            meta: {
                bottomNav: false
            },
            value: null
        }
    }
]

export const Shortcuts: React.FC = () => {
    const [selected, setSelected] = React.useState<string>("")
    return (
        <Wrapper>
            {SHORTCUTS.map(s => (
                <ShortcutIconWrapper
                    key={s.name}
                    onClick={() => setSelected(s.name)}
                    onDoubleClick={() => {
                        store.dispatch(openProgram(s.program))
                    }}>
                    <Shortcut name={s.name} filename={s.filename} selected={s.name === selected} />
                </ShortcutIconWrapper>
            ))}

            <LoseFocusArea onClick={() => setSelected("")}></LoseFocusArea>
        </Wrapper>
    )
}

const ShortcutIconWrapper = styled.div`
    z-index: 1;
    max-height: 80px;
    margin: 10px;
`

const LoseFocusArea = styled.div`
    z-index: 0;
    width: 100%;
    height: 100%;
    position: fixed;
`

const Wrapper = styled.div`
    min-height: calc(100% - 38px);
    width: 100%;
    display: flex;
    position: relative;
    padding: 10px;
`

export const Shortcut: React.FC<{ name: string; filename: string; selected: boolean }> = p => (
    <ShortcutWrapper>
        <Icon src={`public/${p.filename}`} />
        <ShortcutName selected={p.selected}>{p.name}</ShortcutName>
    </ShortcutWrapper>
)

const ShortcutWrapper = styled.div`
    height: 80px;
    width: 50px;
    cursor: pointer;
`

const ShortcutName = styled.div<{ selected: boolean }>`
    font-size: 11px;

    padding: 3px;
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
    max-width: 50px;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
