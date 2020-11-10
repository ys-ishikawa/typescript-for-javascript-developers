export {};

let name: any = 'Yosuke';

// 型アサーションの方法（asを使う方法、<>を使う方法(非推奨: ReactのJSXの記法と似ているため)）
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;

// length = 'foo';
