import * as React from "react"
import styled from "styled-components"
import { PixelText } from "./Typography"
import { debounce } from "../utils"

const MIN_WIDTH = 1000

export const ResolutionGuard: React.FC = p => {
    const [validResoltuion, setValidResoltion] = React.useState<boolean>(window.innerWidth > MIN_WIDTH)

    const handleResize = debounce((): void => setValidResoltion(window.innerWidth > MIN_WIDTH), 100)

    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (validResoltuion)
        return p.children ? (
            <>{p.children}</>
        ) : (
            <Wrapper>
                <PixelText>No children</PixelText>
            </Wrapper>
        )

    return (
        <Wrapper>
            <PixelText>Minimal resultion is {MIN_WIDTH}PX</PixelText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;

    p {
        margin: 20px;
    }
`
