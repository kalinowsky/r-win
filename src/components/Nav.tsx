import * as React from "react"
import styled from "styled-components"
import { SystemTime } from "./SystemTime"

export const BottomNav: React.FC = () => (
    <BottomNavWrapper>
        <div />
        <SystemTime />
    </BottomNavWrapper>
)

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
