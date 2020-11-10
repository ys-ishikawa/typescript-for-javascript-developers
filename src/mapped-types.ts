export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
// type PropertyTypes = keyof Profile;

// 自作で作成（カスタマイズ）も可能
type Optional<T> = { [P in keyof T]?: T[P] | null };

type OptionalProfile = Optional<Profile>;
