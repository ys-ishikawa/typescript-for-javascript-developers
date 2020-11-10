export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude<T, U>で特定の型を排除
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// 関数の型を全て除外するには、第二引数に「Function」を指定
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract<T, U>で、特定の型だけ抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtracting = Extract<SomeTypes, Function>;

//NonNullable<T>
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
