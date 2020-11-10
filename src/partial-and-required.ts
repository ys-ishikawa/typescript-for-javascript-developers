export {};

// utility types：TypeScriptの標準的なもの

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// 全てのプロパティをオプショナルにする
type PartialType = Partial<Profile>;

type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

// 全てのプロパティを必須とする
type RequiredType = Required<Profile2>;
