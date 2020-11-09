export {};

class VisaCard {
    // クラスのプロパティを読み取り専用とする
    // readonly owner: string;

    constructor(public readonly owner: string) {}

    // constructor(owner: string) {
    //     this.owner = owner;
    // }
}

let card = new VisaCard('Ishikawa');
console.log(card.owner);
// card.owner = 'Kimura';