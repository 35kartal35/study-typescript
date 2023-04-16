
/**
 * typescript dosyalarının derlemeye ihtiyacı vardır.
 * işlemini en temelde 'tsc' iisimli program yapar. ama tsc programı
 * büyük bir projeyi derlemek için ihtiyaç duyabileceğimiz 
 * konfigürasyonları sağlamayabilir
 * bu yüzden arkaplanda tsc kullanan ama kullanımı daha user
 * friendly olan başka derleyicilere ihtiyaç duyulur.
 * örn: vite, babel,webpack, turbopack.
 * şuan en temel konu olarak `tsc` ile kodlarımızı
 * derliyoruz.
 */




const firstname: String = "yusuf";
const lastname: String = "kenan";

console.log(`merhaba ${firstname}${lastname}`);
console.log("örnek".concat("ahmet").concat("mehmet"))

document.write(`${firstname}${lastname}`)

const header = document.createElement("h1")

header.textContent = `${firstname}   ${lastname}`;
document.body.appendChild(header);

/**
 * Neden Typescript
 * 
 * bunun biçok sebebi var ama en önemlilerinden birkaç tanesi;
 * -büyük projelerde değişkenlerin alabileceği değerlerin önceden bilinmesi gereklidir. Bundan dolayı
 * değişken türlerinin belirtilmesine imkan sağlayan bir dile ihtiyaç vardır. Jacascript'in 
 * böyle bir özelliği bulunmadığı için Typescript kullanılır.
 * 
 * -Javascriptte Generic Type'lar yoktur, Typescriptte vardır. (Generic Type'ları ilerleyen günlerde işleyeceğiz.).
 * Ayrıca Enum'lar da aynı şekilde.
 * - Typescript'te Object Orianted Programing yapılabilmektedir. OOP yi ilerleyen günlerde
 * işleyeceğiz.
 */