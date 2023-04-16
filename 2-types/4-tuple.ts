//tür tanımlama yönteminin ismi Tuple.
//ilk değer
//Tuple lar dizilere çok benzemektedir
//fark dizilerde bütün değerler aynı türden oluyor fakat tuple de böyle bir zorunluluk yoktur.


let browser: [string, number, string] = ["Chrome", 111, "mac os x"];

browser = ["Firefox", 45, "windows11"]
console.log(">>crrent browser", browser);


let student: [
    string,
    string,
    number,
    "erkek" | "bayan" | "belirsiz",  //union type
    "izmir" | "ankara" | "istanbul", //unıon type
    boolean,
];

student = [
    "hüseyin",
    "kerem",
    30,
    "bayan",
    "izmir",
    true
]
// Soru: Tuple lara push yapılabilir mi?
//cevap: Yapılabilir fakat bu tuple nin mantığına aykırıdır.
console.log(">>student", student)


let students: object[];

let color: [number, number, number] = [255, 127, 127]

console.log(">>renk", color);

color = [0, 225, 0];
console.log(">>color", color)
console.log("red", color[0]);
console.log(">>green", color[0])


