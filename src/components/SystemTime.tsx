import * as React from "react"
import styled from "styled-components"

const makeTwoPlaceNumber = (n: number) => ("0" + n).slice(-2)
const getFormattedTime = () => {
    const d = new Date()
    return `${makeTwoPlaceNumber(d.getHours())}:${makeTwoPlaceNumber(d.getMinutes())}`
}

export const SystemTime: React.FC = () => {
    const [time, setTime] = React.useState(getFormattedTime())

    React.useEffect(() => {
        const interval = setInterval(() => setTime(getFormattedTime()), 1000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <SystemTimeWrapper>
            <div>{time}</div>
        </SystemTimeWrapper>
    )
}

const SystemTimeWrapper = styled.div`
    height: 32px;
    width: 100px;
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -1px -1px #dfdfdf, inset 1px 1px #0a0a0a;
    box-sizing: border-box;
    margin-right: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 300;
`
