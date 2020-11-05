export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Yosuke',
    age: 36,
};

const example2: Profile = {
    name: 'Yosuke',
    age: 36,
};

type Profile = { 
    name: string,
    age: number
};
type Profile2 = typeof example1;