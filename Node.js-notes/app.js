const path = require('path');

let result = path.resolve('app.js');

result = path.extname('app.js');
result = path.parse(__filename);

console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);

console.log(result);

/*

İşte node.js kodunun detaylı açıklaması:

javascript
Copy code
const path = require('path');
path modülünü tanımlar ve ona bir diğer ad (alias) verir. Bu modül, dosya ve dizin yolları ile çalışmak için yöntemler sağlar.

javascript
Copy code
let result = path.resolve('app.js');
path.resolve yöntemi, sağlanan yol kümesinden (burada 'app.js') göre mutlak bir yol dizesi oluşturur. İşletim sisteminize ve geçerli çalışma dizinine bağlı olarak, result değişkeninin değeri /home/user/project/app.js gibi bir şey olabilir.

javascript
Copy code
result = path.extname('app.js');
path.extname yöntemi, dosya adından (burada 'app.js') dosya uzantısını döndürür. result değişkeninin değeri bu nedenle .js olacaktır.

javascript
Copy code
result = path.parse(__filename);
path.parse yöntemi, yol dizesinden bir nesne döndürür. __filename değişkeni, çalışan modülünün dosya adını içerir. result değişkeninin değeri, aşağıdaki şekilde olacaktır:

javascript
Copy code
{
 root: '/',
 dir: '/home/user/project',
 base: 'app.js',
 ext: '.js',
 name: 'app'
}
path.parse yönteminin döndürdüğü nesnedeki her özellik aşağıdaki gibi anlamlıdır:

root: Yolun kök dizini (burada '/')
dir: Yolun üst dizini (burada '/home/user/project')
base: Dosyanın adı ve uzantısı (burada 'app.js')
ext: Dosyanın uzantısı (burada '.js')
name: Dosyanın adı (burada 'app')
javascript
Copy code
console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);

console.log(result);
Bu kod, result nesnesinden her bir özelliğin değerini yazdırır.

*/