export {};

class Mahotsukai {}
class Souryo {}

// 多重継承は不可
class Taro extends Mahotsukai {}


interface Kenja {
    ionazun(): void;
}
interface Senshi {
    attack(): void;
}

// 複数のinterfaceの実装は可能
class Jiro implements Kenja, Senshi {
    ionazun():void {
        console.log('イオナズンを唱えた!!');
    }
    attack(): void {
        console.log('攻撃を行った!');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();
