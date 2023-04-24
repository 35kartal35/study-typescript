


let calculate_sum: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
): number => num1 + num2;

const calculate_sum2: number = 10;

//atanabilen herşeyin türü vardır
//fonksiyonların prototipi fonksiyonun türümüzdür. Bir fonksiyonun türünü tespit etmak için
//2 unsura ihtiyaç vardır 1.parametreler 2.dönüş türü

// TODO sonra güncelle


/////////////////////

//Tür tanımlama yöntemi farklı şekillerde isimlendirilebilir
//-signature
//-protoyupe
//-prototip
//-fonksiyon türü
//şeklinde isimler verilebilir.
//signature, prototype, prototip veya fonksiyon türü
type DoubleParametreMathOperationType = (a: number, b: number) => number;

const sunOperation: DoubleParametreMathOperationType = (a: number, num2: number): number => {
    return a + num2;

};

const subtractOperation: DoubleParametreMathOperationType = (
    num1: number,
    num2: number
): number => {

    return num1 - num2;
};

const çarpmaOperation: DoubleParametreMathOperationType = (
    num1: number,
    num2: number
): number => {
    return num1 * num2
};

console.log("sum operation", sunOperation(10, 20));
console.log("subtrac: ", subtractOperation(10, 20));