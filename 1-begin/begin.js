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
var firstname = "yusuf";
var lastname = "kenan";
console.log("merhaba ".concat(firstname).concat(lastname));
console.log("örnek".concat("ahmet").concat("mehmet"));
document.write("".concat(firstname).concat(lastname));
var header = document.createElement("h1");
header.textContent = "".concat(firstname, "   ").concat(lastname);
document.body.appendChild(header);
