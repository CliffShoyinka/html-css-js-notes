const url = require('url');

const address = 'http://sadikturan.com/kurslar?year=2019&month=nisan';

let result = url.parse(address, true);

console.log(result);
console.log(result.path);
console.log(result.query.year);
console.log(result.query.month);

/*

const url = require('url');

const address = 'http://sadikturan.com/kurslar?year=2019&month=nisan';
Burada url modülünü içeri aktardık ve address değişkenini, incelemek istediğimiz URL ile tanımladık.

javascript
Copy code
let result = url.parse(address, true);
url.parse metodunu kullanarak, address değişkeninden tüm bilgileri aldık. İkinci parametre olarak true verdik, böylece sorgu parametreleri nesnesi olarak döndürülür. Sonuç değişkenine aldığımız tüm bilgileri atadık.

javascript
Copy code
console.log(result);
Burada result değişkeninin tamamını yazdırdık. Çıktıda URL, kaynak, sorgu nesnesi, ek parametreleri vb. bilgileri görebiliriz.

javascript
Copy code
console.log(result.path);
result.path kısmında, URL'den sadece yol bölümünü görüyoruz.

javascript
Copy code
console.log(result.query.year);
console.log(result.query.month);
result.query nesnesinden year ve month değerlerini çektik ve bunları yazdırdık. Çıktıda 2019 ve nisan görüyoruz.

Bu kadar! url.parse metodunu kullanarak, bir URL'den tüm bilgileri kolaylıkla alabiliyoruz.

*/