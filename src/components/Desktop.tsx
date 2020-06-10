import * as React from "react"
import styled from "styled-components"
import { BottomNav } from "./Nav"
import { Programs } from "./programs/Programs"
import { Shortcuts } from "./Shortcuts"

export const Desktop: React.SFC = () => (
    <Wrapper>
        <Shortcuts />
        <Programs />
        <BottomNav />
    </Wrapper>
)

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: #008181;
`
