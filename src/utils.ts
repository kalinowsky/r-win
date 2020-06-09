import { TMap, SMap } from "./types"

export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null

    const debounced = (...args: Parameters<F>) => {
        if (timeout !== null) {
            clearTimeout(timeout)
            timeout = null
        }
        timeout = setTimeout(() => func(...args), waitFor)
    }

    return debounced as (...args: Parameters<F>) => ReturnType<F>
}

export const filterObject = <T extends SMap<V>, V extends any>(o: T, v: (v: V) => boolean): SMap<V> => {
    const nextObject: SMap<V> = {}
    Object.keys(o).filter(k => {
        if (v(o[k])) {
            nextObject[k] = o[k]
        }
    })
    return nextObject
}
