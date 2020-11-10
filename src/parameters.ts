export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile('Yosuke', 36);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['Alpha', 33];
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
