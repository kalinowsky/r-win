import styled from "styled-components"
import { Button } from "./common/Button"
import { _noop } from "../utils"

export const StartButton = styled(Button)`
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    font-weight: bold;
    font-size: 19px;
    font-family: "Pixelated MS Sans Serif";
    img {
        margin-right: 4px;
    }
`
export const ProgramsWrapper = styled.div`
    width: 100%;
    flex: 1;
`

export const ProgramNavShortcut = styled(Button)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 100px;
    max-width: 180px;
    width: 100%;
    height: 28px;
    margin-left: 4px;
    font-size: 20px;
    font-weight: 300;
    font-family: "Pixelated MS Sans Serif";
    justify-content: flex-start;
`

export const ProgramNavShortcutIcon = styled.img`
    max-width: 20px;
    max-height: 20px;
    margin-right: 4px;
`

export const BottomNavWrapper = styled.div`
    width: 100%;
    position: fixed;
    height: 38px;
    background-color: #bdbdbd;
    bottom: 0px;
    box-shadow: ${p => p.theme.config.boxShadowLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuArea = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: ${p => p.theme.zIndex.low};
`

export const MenuWrapper = styled.div`
    width: 240px;
    height: 400px;
    display: flex;
    background-color: #bdbdbd;
    z-index: ${p => p.theme.zIndex.menu};
    position: absolute;
    bottom: 34px;
    left: 4px;
    box-shadow: ${p => p.theme.config.boxShadowLight};

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

export const GradientBelt = styled.div`
    max-width: 34px;
    width: 100%;
    height: calc(100% - 5px);
    position: relative;
    background: ${p => p.theme.config.verticalGradient};
    margin: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const GradientBeltName = styled.p`
    transform: rotate(-90deg);
    color: white;
    font-family: arial;
    font-weight: 600;
    letter-spacing: 1.2px;
    margin-bottom: 20px;
    font-size: 22px;
`

export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
`

export const Item = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
        background-color: navy;
        color: white;
        box-sizing: border-box;
    }
`
export const ExpandableItemWrapper = styled.div`
    height: 40px;
`

export const ExpandedMenu = styled.div`
    position: absolute;
    bottom: 40px;
    left: 200px;
    background-color: #bdbdbd;
    z-index: ${p => p.theme.zIndex.menu};
    position: relative;
    box-shadow: ${p => p.theme.config.boxShadowLight};
    min-height: 40px;
    width: 200px;

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

export const ExpandableItem = styled(Item)`
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

export const Separator = styled.div`
    width: 100%;
    box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px grey, inset 2px 2px #dfdfdf;
    margin-right: 6px;
    height: 2px;
    width: calc(100% - 4px);
`
