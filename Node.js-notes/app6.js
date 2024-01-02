const fs = require('fs');

// fs.appendFile('deneme1.txt', 'Hello World...',
// function(error) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("Dosya olusturuldu!");
//     }
// });


// fs.appendFile('deneme1.txt', 'Hello World',
// function(error) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("Dosya olusturuldu!");
//     }
// });

//bu sekilde hazir olusturulan deneme1.txt'nin icine ve onceki metnin yanina yeni metni ekledi.

// fs.unlink('deneme1.txt', function(error) {
//     console.log('dosya silindi!');
// });  //deneme1.txt'yi sildik

fs.rename('deneme.txt', 'deneme1.txt', function(error) {
    console.log('dosya ismi degisti!');
});