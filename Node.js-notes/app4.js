const fs = require('fs');

const data = fs.readFile('index.html','utf8',function(error, data) {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

/*

Bu JavaScript kodu, Node.js ortamında çalışan bir uygulamada kullanılan `fs` (dosya sistemi) modülünü kullanarak bir dosyanın içeriğini okuma işlemini gerçekleştiriyor. İşlevsel olarak şu adımları takip eder:

1. `fs` modülü, `readFile` fonksiyonu aracılığıyla belirtilen dosyanın içeriğini okur.
2. `'index.html'` ifadesi, okunacak dosyanın adını belirtir.
3. `'utf8'` ifadesi, dosyanın karakter kodlamasını belirtir. Bu durumda, dosyanın içeriği metin olarak okunacaktır.
4. `readFile` fonksiyonu bir geri çağrı fonksiyonu alır. Bu geri çağrı fonksiyonu, işlem tamamlandığında çağrılır ve iki parametre alır: `error` ve `data`.
   - Eğer bir hata oluşursa, `error` parametresi değeri `null` olmayacak ve hata mesajını içerecek. Bu durumda, hata mesajı konsola yazdırılır.
   - Eğer hata oluşmazsa, `data` parametresi, dosyanın içeriğini içerir. Bu içerik konsola yazdırılır.

Örneğin, bu kod uygulamanın çalıştığı dizindeki "index.html" dosyasının içeriğini okur ve konsola yazdırır. Eğer dosya okuma işlemi sırasında bir hata oluşursa, hata mesajı konsola yazdırılır.

*/