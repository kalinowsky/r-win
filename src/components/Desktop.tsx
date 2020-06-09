import * as React from "react"
import styled from "styled-components"
import { BottomNav } from "./Nav"
import { Programs } from "./Programs"

export const Desktop: React.SFC = () => (
    <Wrapper>
        <BottomNav />
        <Programs />
    </Wrapper>
)

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #008181;
`
