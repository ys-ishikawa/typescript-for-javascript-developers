export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Yosuke',
  age: 36,
};

me.age++;
console.log(me);

// 全てのプロパティをreadonlyにする
type PersonalDataType = Readonly<Profile>;

const you: PersonalDataType = {
  name: 'Keiko',
  age: 38,
};

// you.age++;
console.log(you);

// 自作で作ると、、、
type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
