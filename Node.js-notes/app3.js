const fs = require('fs');

const files = fs.readdir('./', function(error, data) {
    if(error) {
        console.log("Error: " + error);
    } else {
        console.log(data);
    }
});

/*

Bu JavaScript kodu, Node.js ortamında çalışan bir uygulamada kullanılan `fs` (dosya sistemi) modülünü kullanarak mevcut çalışma dizinindeki dosya ve dizinleri okuyor. İşlevsel olarak şu adımları takip eder:

1. `fs` modülü, `readdir` fonksiyonu aracılığıyla belirtilen dizindeki dosya ve dizinleri okur.
2. `./` ifadesi, mevcut çalışma dizinini temsil eder. Bu nedenle, `fs.readdir('./', ...)` ifadesi, uygulamanın çalıştığı dizindeki dosya ve dizinleri okumak için kullanılır.
3. `fs.readdir` fonksiyonu bir geri çağrı fonksiyonu alır. Bu geri çağrı fonksiyonu, işlem tamamlandığında çağrılır ve iki parametre alır: `error` ve `data`.
   - Eğer bir hata oluşursa, `error` parametresi değeri `null` olmayacak ve hata mesajı içerecek. Bu durumda, hata mesajı konsola yazdırılır.
   - Eğer hata oluşmazsa, `data` parametresi, okunan dosya ve dizin isimlerini içeren bir dizi olacak. Bu bilgiler konsola yazdırılır.

Örneğin, uygulamanın çalıştığı dizindeki dosya ve dizin isimleri konsola yazdırılacaktır.


CIKTI

[ 'app.js', 'app2.js', 'app3.js' ]

*/