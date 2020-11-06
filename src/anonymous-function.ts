export {};


let calcBMI:(height: number, weight: number) => number = function(height: number, weight: number): number {
    return weight / (height * height);
};

console.log(calcBMI(1.65, 51));