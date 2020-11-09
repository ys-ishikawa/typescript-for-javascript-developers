export {};

class Person {
    // constructorに引数にアクセス修飾子をつけると、初期化までされる
    constructor(public name: string, protected age: number) {}
}

const me = new Person('Yosuke', 36);
console.log(me);
