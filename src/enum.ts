export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
console.log(Months.April);
console.log(Months.December);


enum COLORS {
    RED = '#FFOOOO',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// 列挙型へ追加
enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

let yellow = COLORS.YELLOW;
console.log({ yellow });