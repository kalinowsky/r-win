import * as React from "react"
import styled from "styled-components"
import { BottomNav } from "./Nav"
import { Programs } from "./programs/Programs"
import { Shortcuts } from "./Shortcuts"
import { FullImage } from "./common/Icon"

export const Desktop: React.SFC = () => (
    <Wrapper>
        <Wallpaper>
            <FullImage image="funny-cat.jpg" />
        </Wallpaper>
        <Shortcuts />
        <Programs />
        <BottomNav />
    </Wrapper>
)

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: ${p => p.theme.colors.desktop};
`

const Wallpaper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
