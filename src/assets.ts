export const assets = [
    "cat.svg",
    "notepad.svg",
    "notepad-2.svg",
    "github.svg",
    "github-2.svg",
    "notepad.svg",
    "notepad-2.svg",
    "squares.svg",
    "win.png",
    "funny-cat.jpg"
] as const

export type Asset = typeof assets[number]

export const shortcutMap = {
    notepad: "notepad-2.svg",
    github: "github-2.svg",
    linkedin: "linkedin-2.svg"
}

export const getShortcut = (s: keyof typeof shortcutMap) => {
    const v = shortcutMap[s]
    if (v) return v
    return null
}

export const getPathForAsset = (a: Asset): string => `public/${a}`
