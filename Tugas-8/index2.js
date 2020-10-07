var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var readBooks = (waktu, books) => {
    readBooksPromise(waktu, books[0]).then((waktu) => {
        readBooksPromise(waktu, books[1]).then((waktu) => {
            readBooksPromise(waktu, books[2]).then((waktu) => {
                if (waktu == 0) {
                    return false;
                }
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        });
    }).catch((err) => {
        console.log(err)
    });
}

readBooks(10000,books); 