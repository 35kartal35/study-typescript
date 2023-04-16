
/**
 * Complex türlere girmeden önce tür tanımlama(yani 2 nokta üst üste) ifadesi ile
 * değer atama (yani eşittir) ifadesi arasındaki farkın iyice anlaşılmış olması gerekiyor.
 * 
 * 
 * 
 *  */
//: bir türü belirtir
//= bir değeri belirtir 1, 2 gibi

//eskiden (düz javascriptte) doğrudan bir değişkene değer ataması yapabiliyorduk.
let example_user = {
    id: 1,
    firstname: "ahmet",
    lastname: "mehmet"
}

//ama Typescriptte işler böyle yürümez. Mutlaka her değişkenin türünün belirlenmesi gerekir.
//türü belirliyoruz
let auth_user: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    //örnek olması için javascripttrn bir örnek verdik
    birth_date: Date;
};
//bir değer atamasıo veriyoruz
auth_user = {
    id: 1,
    firstname: "devrim",
    lastname: "tarhan",
    email: "devrim@gmail.com",
    birth_date: new Date(),
};
console.log('>>devrim', auth_user)
auth_user = {
    id: 2,
    firstname: "mehmet",
    lastname: "özdemir",
    email: "mozdemir3545@gmail.com",
    birth_date: new Date("1987-09-15")
}

console.log('>>mehmet', typeof auth_user)

//Typescriptte hep önce tür sonra değer ataması yapılır
//tarayıcıda typescript çalışmaz derlenmiş javascript çalışır.

///////////////////////////////////////////////==ARRAY TANIMLAMAK==///////////////////////////

/**
 * Dizi tanımlamak için tür sintaxımız şu şekilde: tür + içi boş köşeli parantez []
 * bu yöntemle belirli türden değerleri dizi olarak tutabiliriz
 */
let studen_names: string[] = [];
let ages: number[] = [];

studen_names.push("devrim");
studen_names.push("mehmet");
studen_names.push("furkan");

ages.push(15);
ages.push(20);
ages.push(25);

console.log('>>student names', studen_names);
console.log('>> ages', ages);



let laptop: object;

laptop = {}

laptop = {
    id: 1
};

laptop = {
    name: "lenovo"
};

laptop = {
    name: "macbook",
    model: "pro2"
}


console.log('>>laptop', typeof laptop)


//object kullanım şeklinin farklı versiyonları

let employee: {
    firstname: string,
    lastname: string,
    age: number;
    jop_title: string;
} = {
    firstname: "soner",
    lastname: "er",
    age: 37,
    jop_title: "react developer",

}

console.log('>>sonerin bilgileri', employee)