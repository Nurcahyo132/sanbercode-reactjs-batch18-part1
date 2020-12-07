// soal 12 
// buatlah function perhitungan luas lingkaran, luas segitiga dan luas persegi, 
// sesuaikan parameternya dan tampilkan panggil functionnya dengan console.log lengkap dengan mengisi parameternya

function luasLingkaran(jariJari) {
    var pi = jariJari % 7 === 0 ? 22/7 : 3.14;
    return pi*jariJari*jariJari;
  }
  
  function luasSegitiga(alas, tinggi) { 
    return 0.5*alas*tinggi;
  }
  
  function luasPersegi(sisi) {
    return sisi*sisi;
  }
  
  console.log("luas lingkaran dari jari-jari 7 adalah " + luasLingkaran(7))
  console.log("luas segitiga dari alas 7 dan tinggi 8 adalah " + luasSegitiga(7,8))
  console.log("luas persego dari sisi 8 adalah " + luasPersegi(8))
  
//   soal 13
// buatlah daftar alat tulis dengan menggunakan perulangan WHILE
var daftarAlatTulis = ["2. Pensil", "5. Penghapus","3. Pulpen","4. Penggaris","1. Buku"];
var i = 0;
while (i < daftarAlatTulis.length) {
    console.log(daftarAlatTulis.sort()[i]);
    i++;
}

// soal 14
// var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]].
//  ubahlah variable tersebut menjadi array of object, lalu tampilkan data nya dengan console.log

var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

var dataPesertaLomba = pesertaLomba.map((el) =>{
  var objectPesertaLomba = {
    nama: el[0],
    jenisKelamin: el[1],
    tinggi: el[2]
  }
  return objectPesertaLomba
})

console.log(dataPesertaLomba)

// soal 15
// buatlah variable seperti di bawah ini:
// var daftarNama = []
// lalu buatlah fungsi tambahNama dengan parameter nama dan jenis kelamin.
// di dalam fungsi tambahNama terdapat proses untuk menambahkan object ke daftarNama dengan key nama, jenisKelamin dan panggilan. 
// panggilan dapat diisi dengan "Bapak" jika jenis kelaminnya laki-laki dan "Ibu" jika jenis kelaminnya perempuan
// lalu tampilkan urutan nama dengan menggunakan method array iteration yang outputnya akan menampilkan data seperti 
// di seperti ini(output dengan console.log):

var daftarNama = []

function TambahNama(nama, jenisKelamin){
  daftarNama.push(
    {
      nama: nama,
      jenisKelamin: jenisKelamin,
      panggilan: jenisKelamin === "L" ? "Bapak" : (jenisKelamin === "P" ? "Ibu" : "Undefined")
    }
  )
}

TambahNama("Asep", "L")
TambahNama("Siti", "P")
TambahNama("Yeni", "P")
TambahNama("Rudi", "L")
TambahNama("Adit", "L")


daftarNama.forEach(function(item, i){
  var number = i+1;
  console.log(number+ ". " + item.panggilan + " " +item.nama)
})
  
