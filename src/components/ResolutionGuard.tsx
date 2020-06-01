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
    }, [handleResize])

    if (validResoltuion) return p.children ? <>{p.children}</> : <DarkScreen text="No children" />
    return <DarkScreen text={`Minimal resultion is ${MIN_WIDTH}PX`} />
}

export const DarkScreen: React.FC<{ text: string }> = p => (
    <Wrapper>
        <PixelText>{p.text}</PixelText>
    </Wrapper>
)

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: 10;

    p {
        margin: 20px;
    }
`
