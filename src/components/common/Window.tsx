import * as React from "react"
import styled from "styled-components"

type WindowProps = {
    title: string
    children?: React.ReactNode
    overlay?: boolean
    onClose?: () => void
    onMax?: () => void
    onMin?: () => void
    width?: string
    height?: string
    nav?: React.ReactFragment
    borderWidth?: "small" | "large"
}
type Position = { left: number; top: number }

export const Window: React.FC<WindowProps> = p => {
    const [isDragged, setDragged] = React.useState(false)
    const [position, setPosition] = React.useState<Position | null>(null)
    const [positionDetlta, setPositionDelta] = React.useState<Position | null>(null)
    const window = React.useRef(null)

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragged(true)
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const windowElement = window.current
        setPositionDelta({
            left: windowElement.offsetLeft - e.clientX,
            top: windowElement.offsetTop - e.clientY
        })
    }

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragged(false)
        setPosition({ left: e.clientX + positionDetlta.left, top: e.clientY + positionDetlta.top })
    }
    return (
        <>
            {p.overlay && <Overlay />}
            <WindowWrapper
                ref={window}
                width={p.width}
                height={p.height}
                draggable
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                style={{
                    display: isDragged ? "none" : "block",
                    top: position && position.top + "px",
                    left: position && position.left + "px"
                }}>
                <Navigation>
                    <div>{p.title}</div>
                    <ActionWrapper>
                        {p.onMax && (
                            <Action>
                                <ActionIconMinimize onClick={p.onMin} />
                            </Action>
                        )}
                        {p.onMax && (
                            <Action>
                                <ActionIconMaximize onClick={p.onMax} />
                            </Action>
                        )}
                        {p.onClose && (
                            <Action onClick={p.onClose}>
                                <ActionIconClose />
                            </Action>
                        )}
                    </ActionWrapper>
                </Navigation>
                {p.nav}
                <Content borderWidth={p.borderWidth}>{p.children}</Content>
            </WindowWrapper>
        </>
    )
}

const WindowWrapper = styled.div<{ height?: string; width?: string }>`
    height: ${p => p.height || "auto"};
    width: ${p => p.width || "300px"};
    position: fixed;
    min-height: 40px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    background: silver;
    padding: 3px;
    z-index: 5;
`

const Navigation = styled.div`
    height: 20px;
    background: linear-gradient(90deg, navy, #1084d0);
    padding: 3px 2px 3px 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Pixelated MS Sans Serif", Arial;
    -webkit-font-smoothing: none;
    font-size: 11px;
    font-weight: 700;
    color: white;
    box-sizing: border-box;
`

const Content = styled.div<{ borderWidth: "small" | "large" }>`
    margin: ${p => (p.borderWidth === "small" ? "2px" : "8px")};
    height: ${p => `calc(100% - ${p.borderWidth === "small" ? 8 : 20}px);`};
`

const ActionWrapper = styled.div`
    display: flex;
    justify-content: row;
`

const Action = styled.div`
    padding: 0;
    display: block;
    min-width: 16px;
    min-height: 14px;
    margin: 1px;

    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;

    &:active {
        box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey;
    }
`

const ActionIconBase = styled.div`
    background-repeat: no-repeat;
    background-position: bottom 3px left 4px;

    width: 100%;
    height: 100%;
`

const ActionIconMinimize = styled(ActionIconBase)`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
`

const ActionIconMaximize = styled(ActionIconBase)`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
`

const ActionIconClose = styled(ActionIconBase)`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
`

export const Overlay = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQYV2NkYGBoYGBg2MyAAL6MDAwMxkgCYCayoC9MB06VGGYCAPbjBJ9CSv2BAAAAAElFTkSuQmCC);
`

export const NavBelt = styled.div`
    height: 20px;
    display: flex;
    padding: 6px;
    box-sizing: border-box;
    font-size: 12px;
`

export const NavOption = styled.div`
    cursor: not-allowed;
    margin-right: 8px;
`
