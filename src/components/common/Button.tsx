import styled from "styled-components"

export const Button = styled.button`
    background: silver;
    box-shadow: ${p => p.theme.config.boxShadow};

    box-sizing: border-box;
    border: none;
    border-radius: 0;
    min-width: 75px;
    min-height: 23px;
    padding: 0 12px;

    &:active {
        box-shadow: ${p => p.theme.config.boxShadowActive};
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
