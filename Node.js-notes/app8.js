const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead('Hello World');
        res.end();
    }

    if (req.url === '/api/products') {
        res.write('product list');
        res.end();
    }
});

server.listen(3000);
console.log('Listening port 3000...');


/*

Bu kod dizisi, bir Node.js uygulamasının temel bir HTTP sunucu oluşturduğunu göstermektedir. İlgili HTTP modülü kullanılarak bir HTTP sunucu oluşturulur ve belirli URL'lere gelen isteklere yanıt verir.

İşte kodun temel anlamı:

1. `http` modülü `require` edilir.
2. `http.createServer` metodu kullanılarak bir HTTP sunucu oluşturulur. Bu metod bir callback fonksiyon alır, bu fonksiyon da her gelen isteğe karşılık olarak çalışır.
3. Callback fonksiyonu içinde, gelen isteğin URL'sine göre farklı yanıtlar verilir:
   - Eğer isteğin URL'si `'/'` ise, sunucu "Hello World" başlığı ile birlikte boş bir yanıt gönderir (`res.writeHead('Hello World')` ve `res.end()`).
   - Eğer isteğin URL'si `'/api/products'` ise, sunucu "product list" yanıtını gönderir (`res.write('product list')` ve `res.end()`).
4. Sunucu belirtilen port numarası (3000) üzerinden dinlemeye başlar (`server.listen(3000)`).
5. Son olarak, konsola "Listening port 3000..." mesajı yazdırılır.

Ancak, `res.writeHead` fonksiyonunun kullanımında hata vardır. `res.writeHead` fonksiyonu, ilk parametre olarak HTTP durum kodunu beklerken, burada string bir değer olan 'Hello World' verilmiştir. Doğru kullanım şu şekilde olmalıdır:

```javascript
res.writeHead(200, {'Content-Type': 'text/plain'});
```

Bu durumda, 200 HTTP durum kodu ve 'text/plain' içerik tipi başlığı ile birlikte "Hello World" mesajını göndermiş olacaksınız.

*/