import styled from "styled-components"

export const Button = styled.button`
    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;

    box-sizing: border-box;
    border: none;
    border-radius: 0;
    min-width: 75px;
    min-height: 23px;
    padding: 0 12px;

    &:active {
        box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey;
        padding: 2px 11px 0 13px;
    }

    &:focus {
        outline: 1px dotted #000;
        outline-offset: -4px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    button {
        margin-left: 10px;
    }
`
