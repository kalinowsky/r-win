import styled from "styled-components"

type AlignItems = "flex-start" | "flex-end" | "center"
type JustifyContent = "flex-start" | "flex-end" | "center"

export const FlexView = styled.div<{ align?: AlignItems; justify?: JustifyContent }>`
    display: flex;
    align-items: ${p => p.align || "center"};
    justify-content: ${p => p.justify || "center"};
`
