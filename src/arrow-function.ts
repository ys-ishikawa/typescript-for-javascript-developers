export {};

let calcBMI: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number =>  weight / (height * height);


console.log(calcBMI(1.65, 51));