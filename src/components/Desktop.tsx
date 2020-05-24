import * as React from "react"
import styled from "styled-components"

export const Desktop: React.SFC = () => (
    <Wrapper>
        <BottomNav />
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

export const BottomNav: React.FC = () => <BottomNavWrapper></BottomNavWrapper>

const BottomNavWrapper = styled.div`
    width: 100%;
    position: fixed;
    height: 38px;
    background-color: #bdbdbd;
    bottom: 0px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
`
