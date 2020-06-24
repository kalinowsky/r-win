import * as React from "react"
import { SystemTime } from "./SystemTime"
import { store } from "./App"
import { openProgram } from "../actions"
import { useGlobalState } from "../state"
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
    ExpandedMenu,
    GradientBeltName
} from "./Nav.styles"
import { SmallIcon } from "./common/Icon"
import { ActionItem, ExpandableItem as ExpandableItemType } from "../domain"
import { runActionState, navigationItems } from "../data"

const NAME = "Kalinovsky"

export const BottomNav: React.FC = () => {
    const [menuVisible, setMenuVisible] = React.useState<boolean>(false)
    const toggleMenu = () => setMenuVisible(!menuVisible)
    const shutdown = () => store.dispatch(openProgram({ id: "shutdown", meta: { bottomNav: false }, value: null }))
    const { state, dispatch } = useGlobalState()
    const programs = Object.values(state.programs)

    const renderSchema = (s: Array<ExpandableItemType | ActionItem>): React.ReactNode => (
        <>
            {s.map((v, i) => {
                if (v.type === "action")
                    return (
                        <Item
                            key={i}
                            onClick={() => {
                                runActionState(v.value.action, dispatch)
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
                        <GradientBelt>
                            <GradientBeltName>{NAME}</GradientBeltName>
                        </GradientBelt>
                        <ItemsContainer>
                            <Item
                                onClick={() => {
                                    shutdown()
                                    setMenuVisible(false)
                                }}>
                                Shut Down...
                            </Item>
                            <Separator />
                            {renderSchema(navigationItems)}
                        </ItemsContainer>
                    </MenuWrapper>
                </MenuArea>
            )}
            <BottomNavWrapper>
                <StartButton onClick={toggleMenu}>
                    <SmallIcon icon="win.png" />
                    Start
                </StartButton>
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
        <ExpandableItemWrapper onPointerLeave={() => setExpanded(false)}>
            <ExpandableItem onPointerLeave={() => setExpanded(false)} onPointerEnter={() => setExpanded(true)}>
                {p.name}
            </ExpandableItem>
            {expanded && (
                <ExpandedMenu onPointerLeave={() => setExpanded(false)} onPointerEnter={() => setExpanded(true)}>
                    {p.children}
                </ExpandedMenu>
            )}
        </ExpandableItemWrapper>
    )
}
