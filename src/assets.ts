const shortcutMap = {
    notepad: "notepad-2.svg",
    github: "github-2.svg",
    linkedin: "linkedin-2.svg"
}

export const getShortcut = (s: keyof typeof shortcutMap) => {
    const v = shortcutMap[s]
    if (v) return v
    return null
}
