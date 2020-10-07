var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

 
// Tulis code untuk memanggil function readBooks di sini
var waktu = 10000;

readBooks(10000, books[0], (waktu) => {
    readBooks(waktu, books[1], (waktu) => {
        readBooks(waktu, books[2], (waktu) => {
            readBooks(waktu, books[3], (waktu) => { 
            })
        });
    });
}); 