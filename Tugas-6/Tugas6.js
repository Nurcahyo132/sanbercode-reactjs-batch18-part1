// soal 1

// soal 2

let kalimat = ""
const kata = (kata) => {
    hasil = kalimat += kata;
    return hasil
}
    kata(" saya ");
    kata(" adalah ");
    kata(" seorang ");
    kata(" frontend ");
    kata(" developer ");

    let string = `${ kata }`

console.log(kalimat);


// soal 3
const newFunction = (firstName, lastName) => {
  return {
    firstName, lastName,
    fullName: ()=>{
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
// Driver Code 
newFunction("William", "Imoh").fullName() 
// soal 4
const newObject = {firstName: "Harry", lastName: "Potter Holt", destination: "Hogwarts React Conf", occupation: "Deve-wizard Avocado", spell: "Vimulus Renderus!!!"};
const {firstName, lastName, destination, occupation} = newObject
console.log(firstName, lastName, destination, occupation)

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = [...west, "Gill", "Brian", "Noel", "Maggie"]
//Driver Code
console.log(east)