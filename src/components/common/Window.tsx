import * as React from "react"
import styled from "styled-components"

type WindowProps = {
    title: string
    children?: React.ReactNode
    overlay?: boolean
    onClose?: () => void
}
export const Window: React.FC<WindowProps> = p => (
    <>
        {p.overlay && <Overlay />}
        <WindowWrapper>
            <Navigation>
                <div>{p.title}</div>
                <ActionWrapper>
                    <Action>
                        <ActionIconMinimize />
                    </Action>
                    <Action>
                        <ActionIconMaximize />
                    </Action>
                    <Action onClick={p.onClose}>
                        <ActionIconClose />
                    </Action>
                </ActionWrapper>
            </Navigation>
            <Content>{p.children}</Content>
        </WindowWrapper>
    </>
)

const WindowWrapper = styled.div`
    position: fixed;
    width: 300px;
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

const Content = styled.div`
    margin: 8px;
    height: calc(100% - 20px);
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
