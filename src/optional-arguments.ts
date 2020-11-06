export {};

// calcBMI(身長, 体重, console.logで出力するかどうか？)
// calcBMI(1.65, 51, true); => 出力
// calcBMI(1.65, 51, false); => 出力しない
// calcBMI(1.65, 51); => 出力しない


let calcBMI: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number =>  {
    const bmi: number = weight / (height * height);    
    if(printable) {
        console.log({ bmi });
    }
    return bmi;
};

calcBMI(1.65, 51, true);
