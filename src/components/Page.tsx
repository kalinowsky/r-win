import * as React from "react"
import styled from "styled-components"

export const Page: React.SFC = () => (
    <Wrapper>
        <img src="public/cat.svg" />
    </Wrapper>
)

export default Page

const Wrapper = styled.div`
    min-width: 100vw;
    min-height: 100ch;
    display: flex;
    justify-content: center;
    align-items: center;
`
