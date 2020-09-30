// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// Jawaban soal 1
var upper = kataKeempat.toUpperCase();
var hurufBesar = kataKedua.charAt(0);
var hurufKapital = hurufBesar.toUpperCase() + kataKedua.substr(1);

var kalimat = kataPertama + " " + hurufKapital + " " + kataKetiga + " " + upper;
console.log (kalimat);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
// Jawaban soal 2
var hasilPenjumlahan = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat) ;

hasil1 = parseInt(kataPertama);
console.log(hasil1);

hasil2 = parseInt(kataKedua);
console.log(hasil2);

hasil3 = parseInt(kataKetiga);
console.log(hasil3);

hasil4 = parseInt(kataKeempat);
console.log(hasil4);

console.log(hasilPenjumlahan);


// soal 3 
var kalimat = 'wah javascript itu keren sekali';
// Jawaban soal 3
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(3, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('kata Pertama: ' + kataPertama);
console.log('kata Kedua: ' + kataKedua);
console.log('kata Ketiga: '+ kataKetiga);
console.log('kata Keempat: '+ kataKeempat);
console.log('kata Kelima: ' + kataKelima);



// soal 4
var nilai = 77;
// Jawaban soal 4
if (nilai >= 80)
{
   console.log("indeksnya A");
}
else if (nilai >= 70 && nilai < 80)
{
   console.log("indeksnya B");
}
else if (nilai >= 60 && nilai < 70)
{
   console.log("indeksnya C");
}
else if (nilai >= 50 && nilai < 60)
{
    console.log("indeksnya D")
}
else if (nilai < 50)
{
    console.log("indeksnya E")
}


// soal 5
var tanggal = 6;
var bulan = 3;
var tahun = 1997
// Jawaban soal 5

var stringBulan = "";

switch(bulan){
    case 1 : stringBulan = "Januari";
    break;
    case 2 : stringBulan = "Februari";
    break;
    case 3 : stringBulan = "Maret";
    break;
    case 4 : stringBulan = "April";
    break;
    case 5 : stringBulan = "Mei";
    break;
    case 6 : stringBulan = "Juni";
    break;
    case 7 : stringBulan = "Juli";
    break;
    case 8 : stringBulan = "Agustus";
    break;
    case 9 : stringBulan = "September";
    break;
    case 10 : stringBulan = "Oktober";
    break;
    case 11 : stringBulan = "November";
    break;
    case 12 : stringBulan = "Desember";
    break;
}

console.log("Tanggal lahir saya " + tanggal + " " + stringBulan + " " + tahun)
