import * as React from "react"
import styled from "styled-components"
import { SystemTime } from "./SystemTime"
import { Button } from "./common/Button"

const StartButton = styled(Button)`
    height: 32px;
`

export const BottomNav: React.FC = () => {
    const [menuVisible, setMenuVisible] = React.useState<boolean>(false)
    const toggleMenu = () => setMenuVisible(!menuVisible)

    return (
        <>
            {menuVisible && (
                <MenuArea onClick={() => setMenuVisible(false)}>
                    <MenuWrapper onClick={e => e.stopPropagation()}>
                        <GradientBelt />
                        <ItemsContainer>
                            <Item>Item 1</Item>
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
`
const Item = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: navy;
        color: white;
    }
`
