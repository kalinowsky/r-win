import styled, { createGlobalStyle } from "styled-components"

export { ThemeProvider } from "styled-components"

declare module "styled-components" {
    export interface DefaultTheme extends DT {}
}
type DT = typeof defaultTheme

const colors = {
    transparent: "transparent",
    primary: "#1084d0",
    desktop: "#008181"
}

const zIndex = {
    low: 1,
    loseFocusArea: 10,
    shortcuts: 20,
    windowOverlay: 25,
    window: 50,
    menu: 60,
    windowOverlayError: 75,
    windowError: 85,
    resolutionGuard: 100
}

const config = {
    boxShadow: "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf",
    boxShadowActive: "inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey;",
    boxShadowLight: "inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff",
    horizontalGradient: `linear-gradient(90deg, navy, ${colors.primary})`,
    verticalGradient: `linear-gradient(180deg, navy, ${colors.primary})`
}

export type ThemeColors = typeof colors
export type ThemeConfig = typeof config
export type ThemeZIndex = typeof zIndex

export const defaultTheme = {
    colors,
    config,
    zIndex
}

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0px;
  padding: 0px;
  font-family: Pixelated MS Sans serif;
  -webkit-font-smoothing: none;
}

@font-face {
  font-family: "Pixelated MS Sans Serif";
  src: url("public/ms_sans_serif.woff") format("woff");
  src: url("public/ms_sans_serif.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pixelated MS Sans Serif";
  src: url("public/ms_sans_serif_bold.woff") format("woff");
  src: url("public/ms_sans_serif_bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Pixellari;
  src: url("public/Pixellari.ttf");
}
textarea {
    overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 16px;
  }
  ::-webkit-scrollbar:horizontal {
  height: 17px;
  }

  ::-webkit-scrollbar-corner {
  background: var(--button-face);
  }

  ::-webkit-scrollbar-track {
  background-image: url("./public/scrollbar-background.svg");
  }

  ::-webkit-scrollbar-thumb {
  background-color: var(--button-face);
  box-shadow: var(--border-raised-outer), var(--border-raised-inner);
  }

  ::-webkit-scrollbar-button:horizontal:start:decrement,
  ::-webkit-scrollbar-button:horizontal:end:increment,
  ::-webkit-scrollbar-button:vertical:start:decrement,
  ::-webkit-scrollbar-button:vertical:end:increment {
  display: block;
  }

  ::-webkit-scrollbar-button:vertical:start {
  height: 17px;
  background-image: url("./public/button-up.svg");
  }
  ::-webkit-scrollbar-button:vertical:end {
  height: 17px;
  background-image: url("./public/button-down.svg");
  }
  ::-webkit-scrollbar-button:horizontal:start {
  width: 16px;
  background-image: url("./public/button-left.svg");
  }
  ::-webkit-scrollbar-button:horizontal:end {
  width: 16px;
  background-image: url("./public/button-right.svg");
  }
  ::-webkit-scrollbar-thumb {
  background-color: #dfdfdf;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
  cursor: pointer;
  }
  [draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
  }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
