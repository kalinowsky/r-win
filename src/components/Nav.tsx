import * as React from "react"
import { SystemTime } from "./SystemTime"
import { store } from "./App"
import { openProgram } from "../actions"
import { useGlobalState } from "../state"
import { ValueState, F0 } from "../types"
import { _noop } from "../utils"
import {
    Item,
    MenuArea,
    MenuWrapper,
    GradientBelt,
    ItemsContainer,
    Separator,
    BottomNavWrapper,
    StartButton,
    ProgramsWrapper,
    ProgramNavShortcut,
    ProgramNavShortcutIcon,
    ExpandableItemWrapper,
    ExpandableItem,
    ExpandedMenu
} from "./Nav.styles"
import { Action } from "../store"

type ExpandableItem = ValueState<
    "expandable",
    {
        name: string
        children: Array<ActionItem | ExpandableItem>
    }
>

type ActionItem = ValueState<
    "action",
    {
        name: string
        onClick: F0
    }
>

const getSchema = (dispatch: (a: Action) => void): Array<ActionItem | ExpandableItem> => [
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
                                    onClick: _noop
                                }
                            }
                        ]
                    }
                },
                {
                    type: "action",
                    value: {
                        name: "test name 4",
                        onClick: _noop
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
                        onClick: _noop
                    }
                },
                {
                    type: "action",
                    value: {
                        name: "NotePad",
                        onClick: () =>
                            dispatch(openProgram({ id: "notepad", meta: { bottomNav: true }, value: { text: "" } }))
                    }
                }
            ]
        }
    },
    {
        type: "action",
        value: {
            name: "Mock Position",
            onClick: _noop
        }
    }
]

export const BottomNav: React.FC = () => {
    const [menuVisible, setMenuVisible] = React.useState<boolean>(false)
    const toggleMenu = () => setMenuVisible(!menuVisible)
    const shutdown = () => store.dispatch(openProgram({ id: "shutdown", meta: { bottomNav: false }, value: null }))
    const { state, dispatch } = useGlobalState()
    const programs = Object.values(state.programs)
    const schema = getSchema(dispatch)

    const renderSchema = (s: Array<ExpandableItem | ActionItem>): React.ReactNode => (
        <>
            {s.map((v, i) => {
                if (v.type === "action")
                    return (
                        <Item
                            key={i}
                            onClick={() => {
                                v.value.onClick()
                                setMenuVisible(false)
                            }}>
                            {v.value.name}
                        </Item>
                    )
                if (v.type === "expandable")
                    return (
                        <ExpandableItemComponent key={i} name={v.value.name}>
                            {renderSchema(v.value.children)}
                        </ExpandableItemComponent>
                    )
            })}
        </>
    )

    return (
        <>
            {menuVisible && (
                <MenuArea onClick={() => setMenuVisible(false)}>
                    <MenuWrapper onClick={e => e.stopPropagation()}>
                        <GradientBelt />
                        <ItemsContainer>
                            <Item
                                onClick={() => {
                                    shutdown()
                                    setMenuVisible(false)
                                }}>
                                Shut Down...
                            </Item>
                            <Separator />
                            {renderSchema(schema)}
                        </ItemsContainer>
                    </MenuWrapper>
                </MenuArea>
            )}
            <BottomNavWrapper>
                <StartButton onClick={toggleMenu}>Start</StartButton>
                <ProgramsWrapper>
                    {programs
                        .filter(p => p.meta.bottomNav)
                        .map(p => (
                            <ProgramNavShortcut key={p.id}>
                                <ProgramNavShortcutIcon src={`public/${p.id}.svg`} />
                                {p.id}
                            </ProgramNavShortcut>
                        ))}
                </ProgramsWrapper>
                <SystemTime />
            </BottomNavWrapper>
        </>
    )
}

const ExpandableItemComponent: React.FC<{ name: string }> = p => {
    const [expanded, setExpanded] = React.useState<boolean>(false)
    return (
        <ExpandableItemWrapper>
            <ExpandableItem onPointerLeave={() => setExpanded(false)} onPointerEnter={() => setExpanded(true)}>
                {p.name}
            </ExpandableItem>
            {expanded && <ExpandedMenu onPointerEnter={() => setExpanded(true)}>{p.children}</ExpandedMenu>}
        </ExpandableItemWrapper>
    )
}
