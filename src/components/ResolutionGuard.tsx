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

export const DarkScreen: React.FC<{ text: string; loading?: boolean }> = p => (
    <Wrapper>
        <LoadablePixelText loading={p.loading}>{p.text}</LoadablePixelText>
    </Wrapper>
)

const LoadablePixelText = styled(PixelText)<{ loading?: boolean }>`
    &:after {
        content: " .";
        animation: dots 1s steps(5, end) infinite;
        display: ${p => (p.loading ? "inline-block" : "none")};
    }

    @keyframes dots {
        0%,
        20% {
            color: #f47a02;
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        40% {
            color: #f47a02;
            text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        60% {
            text-shadow: 0.25em 0 0 #f47a02, 0.5em 0 0 rgba(0, 0, 0, 0);
        }
        80%,
        100% {
            text-shadow: 0.25em 0 0 #f47a02, 0.5em 0 0 #f47a02;
        }
    }
`

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: ${p => p.theme.zIndex.resolutionGuard};

    p {
        margin: 20px;
    }
`
