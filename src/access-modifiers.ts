export {};

class Person {
    public name: string;
    // private age: number;
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationaliry: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationaliry;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationaliry: string) {
        super(name, age, nationaliry);
    }
    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let taro = new Android('Taro', 26, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
