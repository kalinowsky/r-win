import { v4 } from "uuid"
import { SMap } from "./types"

export type Action = {
    name: string
    payload?: any
}

export const createStore = <TState>(reducer: (s: TState, action: Action) => TState, initialState: TState) => {
    type Listener = (s: TState) => void

    let _state: TState = initialState
    const _listeners: SMap<(s: TState) => void> = {}

    const getState = (): TState => _state

    const dispatch = (action: Action) => {
        // eslint-disable-next-line no-console
        console.log(Object.keys(_listeners).length, { _listeners })
        _state = reducer(_state, action)
        Object.values(_listeners).forEach((l: Listener) => l(_state))
    }

    const unsubscribe = (id: string) => () => delete _listeners[id]

    const subscribe = (l: Listener) => {
        const id = v4()
        _listeners[id] = l
        return unsubscribe(id)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}
