import * as React from "react"
import styled from "styled-components"
import { Asset, getPathForAsset } from "../../assets"

export const SmallIcon: React.FC<{ icon: Asset }> = p => <Img src={getPathForAsset(p.icon)} />

const Img = styled.img`
    max-width: 26px;
    max-height: 26px;
    image-rendering: pixelated;
`
