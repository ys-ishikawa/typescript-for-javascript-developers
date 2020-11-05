export {};

function calcBMI(height: number, weight: number): number {
    return weight / (height * height);
}

let bmi: number = calcBMI(1.65, 51)

console.log(bmi);