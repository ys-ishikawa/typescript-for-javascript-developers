export {};

// 型の制約が甘い
let profile1: object = {
    name: 'Yosuke'
};
profile1 = { birthYear: 1984 };

// 型の制約を強くする
let profile2: { name: string } = {
    name: 'Yosuke'
};
// profile2 = { birthYear: 1984 };
profile2 = { name: 'Keiko' };