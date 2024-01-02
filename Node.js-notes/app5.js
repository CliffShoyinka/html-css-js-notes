const fs = require('fs');

fs.writeFile('deneme.txt', 'Hello World!', function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Dosya oluştu!"); //'Hello World!' yerine baska bir metin yazsak ama dosya ismi ayni kalirsa o dosyayi siler yenisini olusturup metni yazar.
    }
});

/*

Bu JavaScript kodu, Node.js ortamında çalışan bir uygulamada kullanılan `fs` (dosya sistemi) modülünü kullanarak bir dosyaya yazma işlemi gerçekleştiriyor. İşlevsel olarak şu adımları takip eder:

1. `fs` modülü, `writeFile` fonksiyonu aracılığıyla belirtilen dosyaya içerik yazma işlemini gerçekleştirir.
2. `'deneme.txt'` ifadesi, yazılacak dosyanın adını belirtir.
3. `'Hello World!'` ifadesi, dosyaya yazılacak içeriği temsil eder.
4. `writeFile` fonksiyonu bir geri çağrı fonksiyonu alır. Bu geri çağrı fonksiyonu, işlem tamamlandığında çağrılır ve bir parametre alır: `error`.
   - Eğer bir hata oluşursa, `error` parametresi değeri `null` olmayacak ve hata mesajını içerecek. Bu durumda, hata mesajı konsola yazdırılır.
   - Eğer hata oluşmazsa, dosya başarıyla oluşturulduğuna dair bir mesaj konsola yazdırılır.

Bu kodun çalıştırılmasıyla birlikte, uygulamanın çalıştığı dizinde "deneme.txt" adlı bir dosya oluşturulacak ve içeriği "Hello World!" olarak belirlenecektir. Eğer dosya yazma işlemi sırasında bir hata oluşursa, hata mesajı konsola yazdırılacaktır.

*/