import { v4 } from "uuid"
import { SMap } from "./types"

type State = any
export type Action = {
    name: string
    paylod?: any
}
type Listener = (s: State) => void

let _state: any = null
const _listeners: SMap<Listener> = {}

export const createStore = <TState extends State>(
    reducer: (s: TState, action: any) => TState,
    initialState: TState
) => {
    const currentReducer = reducer
    _state = initialState

    const getState = (): TState => _state

    const dispatch = (action: Action) => {
        _state = currentReducer(_state, action)
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
