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

export type F0<R = void> = () => R
export type F1<T, R = void> = (arg: T) => R
export type F2<T1, T2, R = void> = (arg1: T1, arg2: T2) => R
