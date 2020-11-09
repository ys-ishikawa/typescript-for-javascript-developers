export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

let taro = new Person('Taro', 26);
console.log(taro);
console.log(taro.profile());

// let hanako = new Person();
