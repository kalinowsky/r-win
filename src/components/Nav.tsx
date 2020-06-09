import * as React from "react"
import styled from "styled-components"
import { SystemTime } from "./SystemTime"
import { Button } from "./common/Button"
import { store } from "./App"
import { openProgram } from "../actions"

const StartButton = styled(Button)`
    height: 32px;
    margin-left: 4px;
    font-size: 20px;
    font-weight: 300;
    font-family: "Pixelated MS Sans Serif";
`

export const BottomNav: React.FC = () => {
    const [menuVisible, setMenuVisible] = React.useState<boolean>(false)
    const toggleMenu = () => setMenuVisible(!menuVisible)
    const shutdown = () => store.dispatch(openProgram("shutdown"))
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
                            <ExpandableItemComponent>Test</ExpandableItemComponent>
                        </ItemsContainer>
                    </MenuWrapper>
                </MenuArea>
            )}
            <BottomNavWrapper>
                <StartButton onClick={toggleMenu}>Start</StartButton>
                <SystemTime />
            </BottomNavWrapper>
        </>
    )
}

const BottomNavWrapper = styled.div`
    width: 100%;
    position: fixed;
    height: 38px;
    background-color: #bdbdbd;
    bottom: 0px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuArea = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const MenuWrapper = styled.div`
    width: 240px;
    height: 400px;
    display: flex;
    background-color: #bdbdbd;
    z-index: 10;
    position: absolute;
    bottom: 34px;
    left: 4px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;

    animation-name: expand-to-top;
    animation-duration: 0.3s;

    @keyframes expand-to-top {
        from {
            height: 0px;
        }
        to {
            height: 400px;
        }
    }
`

const GradientBelt = styled.div`
    width: 30px;
    height: calc(100% - 5px);
    position: relative;
    background: linear-gradient(180deg, navy, #1084d0);
    margin: 2px;
`

const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
`

const Item = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: navy;
        color: white;
    }
`
const ExpandableItemComponent: React.FC = p => {
    const [expanded, setExpanded] = React.useState<boolean>(false)
    return (
        <>
            <ExpandableItem onPointerLeave={() => setExpanded(false)} onPointerEnter={() => setExpanded(true)}>
                {p.children}
            </ExpandableItem>
            {expanded && <ExpandedMenu>menu</ExpandedMenu>}
        </>
    )
}

const ExpandedMenu = styled.div`
    background-color: #bdbdbd;
    z-index: 10;
    position: relative;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    left: 210px;
    min-height: 40px;
    top: 40px;
    width: 210px;

    animation-name: expand-to-left;
    animation-duration: 0.3s;

    @keyframes expand-to-left {
        from {
            width: 0px;
        }
        to {
            width: 210px;
        }
    }
`

const ExpandableItem = styled(Item)`
    &:after {
        content: " ";
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid black;
        position: absolute;
        right: 14px;
    }

    &:hover {
        &:after {
            border-left: 5px solid white;
        }
    }
`

const Separator = styled.div`
    width: 100%;
    box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px grey, inset 2px 2px #dfdfdf;
    margin-right: 6px;
    height: 2px;
    width: calc(100% - 4px);
`
