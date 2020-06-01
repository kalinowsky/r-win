import { createStore, Action } from "./store"

describe("createStore", () => {
    it("works when action dispatched", () => {
        const initialState = 0
        const testReducer = (s: number, a: Action) => {
            if (a.name === "ADD") return s + 1
            return s
        }

        const store = createStore(testReducer, initialState)
        store.getState()
        expect(store.getState()).toEqual(0)
        store.dispatch({ name: "ADD" })
        expect(store.getState()).toEqual(1)
    })

    it("notify listeners", () => {
        const initialState = 0
        const testReducer = (s: number, a: Action) => {
            if (a.name === "ADD") return s + 1
            return s
        }

        const store = createStore(testReducer, initialState)
        store.getState()
        expect(store.getState()).toEqual(0)
        const testListener = jest.fn()
        store.subscribe(testListener)
        store.dispatch({ name: "ADD" })

        expect(testListener).toHaveBeenLastCalledWith(1)
    })
})
