export declare type TMap<TKey extends string | number, TValue> = {
    [K in TKey]: TValue
}
export declare type SMap<TValue> = TMap<string, TValue>
