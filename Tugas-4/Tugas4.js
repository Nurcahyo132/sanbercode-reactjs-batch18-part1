// soal 1
console.log("LOOPING PERTAMA")
var i;
for(var i = 0; i < 22; i += 2){
    console.log(i + " - I love coding")
}

console.log("LOOPING KEDUA")
for(var i = 20; i > 0; i -= 2) {
    console.log(i + " - I will become a frontend developer")
}
// soal 2

for(var repeat = 1; repeat <= 20; repeat++){
    if(repeat % 2 == 0){
        console.log(repeat + " Berkualitas");
    } else if (repeat % 3 == 0 && repeat % 2 == 1){
        console.log(repeat + " I Love Coding");
    } else {
        console.log(repeat + " Santai")
    }
}

// soal 3
var pagar ="";

for( var i = 0; i < 7; i++){
    for( var j = 0; j <= i; j++){
        pagar += "#";
    }
    pagar += "\n";
}

console.log(pagar);

// soal 4
var kalimat="saya sangat senang belajar javascript"
var name = kalimat.split(" ")
console.log(name)

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var baru = daftarBuah.sort()

for (i = 0; i < baru.length; i++){
    console.log(baru[i]);

}