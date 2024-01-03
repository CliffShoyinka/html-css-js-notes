const http = require('http');
const fs = require('fs');

// const server = http.createServer((req,res)=> {
//         // res.setHeader('Content-Type', 'text/plain'); 
//     // res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 200;
//     res.statusMessage = 'Ok';

//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>')
//     res.write('<body><h1>Hello from Nodejs Server</h1></body>')
//     res.write('</html>')
//     res.end();
// });

/*

Bu kod dizisi, bir Node.js uygulamasının basit bir HTTP sunucu oluşturduğunu ve tarayıcıya HTML içeriği gönderdiğini göstermektedir. Aşağıda kodun temel anlamını açıklamak için HTML dosyası ve Node.js sunucu kodunu gösteriyorum:

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My First Title</title>
</head>

<body>
    <h1>This is my Node.js page</h1>
</body>

</html>
```

**app9.js:**
```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // HTTP başlıklarını ayarla
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    // HTML içeriğini oluştur ve gönder
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

// Sunucuyu 3000 numaralı port üzerinde dinle
server.listen(3000);

console.log('Listening on port 3000...');
```

Bu kodlar şu işlemleri gerçekleştirir:

1. Bir HTTP sunucu oluşturulur (`http.createServer`), ve bir isteğe karşılık olarak çalışacak bir fonksiyon tanımlanır.
2. Sunucu, herhangi bir istek geldiğinde belirli HTTP başlıklarını (`Content-Type`, `statusCode`, `statusMessage`) ayarlar.
3. Ardından, sunucu tarayıcıya basit bir HTML içeriği gönderir. Bu HTML içeriği, `index.html` dosyasındaki içeriğe benzer şekilde basit bir başlık ve bir paragraf içerir.
4. Sunucu, 3000 numaralı portu dinlemeye başlar (`server.listen(3000)`).
5. Konsola "Listening on port 3000..." mesajı yazdırılır.

Bu örnekte, tarayıcıya gönderilen HTML içeriği doğrudan kod içinde oluşturulmuş olsa da, genellikle daha karmaşık uygulamalarda ayrı HTML dosyaları kullanılır ve bu dosyalar `fs` modülü ile okunup gönderilir. Ancak bu örnekte, basitliği korumak amacıyla HTML içeriği doğrudan yazılmıştır.

*/


fs.readFile('indexx.html', function (error, file) {

    if (error) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end('Dosya bulunamadı.');
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'Ok';
        res.end(file);
    }
});


server.listen(3000);

console.log('Listening port on 3000...');


/*

Bu kod dizisi, bir Node.js uygulamasının HTTP sunucu örneğini oluşturmakta ve istemcilere bir HTML dosyasını göndermektedir. Ancak, kodun içinde bir hata bulunmaktadır ve bu hatayı düzeltmeye çalışacağım.

İlk olarak, kodun düzeltilmiş versiyonunu gösteriyorum ve ardından açıklamaları sunuyorum:

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function (error, file) {
        if (error) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('Dosya bulunamadı.');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end(file);
        }
    });
});

server.listen(3000);

console.log('Listening on port 3000...');
```

Değişiklikler:

1. `fs.readFile` fonksiyonu, sunucu oluşturulurken gelen her isteğe karşılık olarak çalışacak olan HTTP sunucu fonksiyonunun içine taşındı. Böylece her istek için dosya okuma işlemi gerçekleştirilecek.
2. Okunacak dosya adı `'index.html'` olarak değiştirildi. Önceki versiyonda `'indexx.html'` olarak yazılmıştı, bu yanlıştı.
3. `res.end(file)` ifadesi, dosyanın içeriğini istemciye göndermek için kullanıldı.

Bu düzeltilmiş kod, 3000 numaralı portu dinleyen bir HTTP sunucusu oluşturur ve her istekte `index.html` dosyasının içeriğini istemciye gönderir. Eğer dosya bulunamazsa, 404 Not Found durumuyla birlikte bir hata mesajı gönderir.

*/

