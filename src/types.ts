export declare type TMap<TKey extends string | number, TValue> = {
    [K in TKey]: TValue
}
export declare type SMap<TValue> = TMap<string, TValue>

export type State<T extends string> = {
    type: T
}

export type ValueState<T extends string, V extends any> = State<T> & {
    value: V
}

export type F0 = () => void
