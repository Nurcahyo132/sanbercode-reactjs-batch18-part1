// soal 1
function halo() {
    console.log("Halo Sanbers");
  }

  halo();

// soal 2
function kalikan(){
    return num1 * num2
}
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali)

// soal 3
function introduce(perkenalan){
    return ("Nama Saya " + name + ", Umur saya " + age + " tahun, " + " alamat saya di " + address + ", dan saya punya hooby yaitu " + hobby );
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming!"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan )


// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var personObj = {
    Name : "Asep",
    Kelamin: "Laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
} 

console.log(personObj);

// soal 5

var namaBuah = [
    {
        "nama" : "strawberry",
        "warna" : "merah",
        "ada bijinya" : "tidak",
        "harga" : 9800
    },

    {
        "nama" : "jeruk",
        "warna" : "oranye",
        "ada bijinya" : "ada",
        "harga" : 8000
    },
    {
        "nama" : "Semangka",
        "warna" : "Hijau dan Merah",
        "ada bijinya" : "ada",
        "harga" : 10000
    },
    {
        "nama" : "pisang",
        "warna" : "Kuning",
        "ada bijinya" : "tidak",
        "harga" : 5000
    }
]

console.log(namaBuah[0]);

// soal 6
var dataFilm =[]
function film(nama, durasi, genre, tahun){
    dataFilm.push({nama: "Avenger", durasi: "1 jama", genre: "action", tahun: "2010"})
}

film("nama", "durasi", "genre", "tahun");
console.log(dataFilm)