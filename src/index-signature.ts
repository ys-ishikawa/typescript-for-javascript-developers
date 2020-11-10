export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Yosuke', underTwenty: false };

// How to write index signatures?
// { [ index: typeForIndex ]: typeForValue }

profile.age = 36;
profile.nationality = 'Japan';
