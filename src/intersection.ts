export {};


type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const Sasaki: Pitcher1 = {
    throwingSpeed: 154
};

const Ochiai: Batter1 = {
    battingAverage: 0.367
};


// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };

// 既存の型から新しい型を合成できる（intersection）
type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.285
}
