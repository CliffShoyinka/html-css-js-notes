const EventEmitter = require('events');

class Logger extends EventMitter {

    log(message) {
        console.log(message);

        this.emit('connection', { id: 1, message: 'hello' });
    }
}

module.exports = Logger;


/*

Bu kodlar, Node.js ortamında olay yönetimi (event handling) için kullanılan bir örnek içermektedir. İki dosya (`app7.js` ve `logger.js`) arasında bir etkileşim gerçekleştirilmektedir.

`logger.js` dosyası bir `Logger` sınıfı içerir ve bu sınıf, `EventEmitter` sınıfından türetilmiştir. `EventEmitter`, olayları (events) işlemek için kullanılan bir sınıftır.

`Logger` sınıfının içinde `log` adlı bir metot bulunmaktadır. Bu metot, bir mesajı konsola yazdıktan sonra `'connection'` adlı bir olayı tetikler (`emit`). Tetiklenen bu olaya, `{ id: 1, message: 'hello' }` adlı bir nesne de eklenmiştir.

`app7.js` dosyası, `Logger` sınıfını içeri aktarır ve bir `Logger` örneği oluşturur (`logger`). Daha sonra, bu `logger` örneği üzerinde `'connection'` olayını dinleyen bir fonksiyon tanımlanmıştır. Bu fonksiyon, olay tetiklendiğinde çalışacak ve bağlantı mesajını konsola yazdıracaktır.

Son olarak, `logger.log('mehmethan login oldu')` ifadesi ile `Logger` sınıfının `log` metodu çağrılmıştır. Bu metot içinde, `'connection'` olayı tetiklenir ve bu da `app7.js` dosyasındaki dinleyici fonksiyonunun çalışmasına neden olur. Konsola "Bağlantı kuruldu: { id: 1, message: 'hello' }" mesajı yazdırılır.

Ancak, kod içerisinde bir hata bulunmaktadır. `const logger = new logger();` ifadesinde `logger` küçük harfle başlamalıdır. Doğru şekliyle `const logger = new Logger();` olmalıdır.

*/