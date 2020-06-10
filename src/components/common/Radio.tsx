import * as React from "react"
import styled from "styled-components"

type RadioProps = {
    title: string
    options: Array<{ name: string; label: string; disabled?: boolean }>
    onChange: (name: string) => void
    border?: boolean
}
export const Radio: React.FC<RadioProps> = p => {
    const [selected, setSelected] = React.useState<string | null>(null)
    const set = (a: string) => {
        p.onChange(a)
        setSelected(a)
    }
    return (
        <Wrapper border={p.border}>
            <Title>{p.title}</Title>
            {p.options.map(o => (
                <Row key={o.name}>
                    <Input type="radio" id="1" />
                    <Label
                        htmlFor="1"
                        selected={o.name === selected}
                        disabled={o.disabled}
                        onClick={() => !o.disabled && set(o.name)}>
                        {o.label}
                    </Label>
                </Row>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.fieldset<{ border?: boolean }>`
    border: none;
    box-shadow: ${p =>
        p.border ? "inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px grey, inset 2px 2px #dfdfdf" : "none"};
    padding: 10px;
    padding-block-start: 8px;
    margin: 0;
`

const Title = styled.div`
    font-family: Arial;
    font-size: 12px;
    color: #222;
`

const Row = styled.div`
    margin-top: 6px;

    display: flex;
    align-items: center;
`

const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
    background: 0;
    position: fixed;
    opacity: 0;
    border: none;
`

const Label = styled.label<{ selected: boolean; disabled: boolean }>`
    position: relative;
    margin-left: 18px;
    font-family: "Pixelated MS Sans Serif", Arial;
    -webkit-font-smoothing: none;
    font-size: 11px;
    ${p =>
        p.disabled
            ? `
      color: grey;
      text-shadow: 1px 1px 0 #fff;`
            : ""}

    &:focus {
        outline: -webkit-focus-ring-color auto 1px;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -18px;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 6px;
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z' fill='gray'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z' fill='%23fff'/%3E%3C/svg%3E");
    }
    &::after {
        content: "";
        display: ${p => (p.selected ? "block" : "none")};
        width: 4px;
        height: 4px;
        top: 4px;
        left: -14px;
        position: absolute;
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='4' height='4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 0H1v1H0v2h1v1h2V3h1V1H3V0z' fill='%23000'/%3E%3C/svg%3E");
    }
`
