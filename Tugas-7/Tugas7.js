// soal 1

class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get aname(){
        return this.name;
    }
    set aname (kaki){
        this._legs = 4;
    }
    set aname(blood){
        this._cold_blooded = false;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal {
    constructor (name){
        super(name);
    }
    jump() {
        return "hophop";
    }
    
}

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok);

class Ape extends Animal {
    constructor(name, legs = 2){
        super(name);
        this.legs = legs;
    }

    yell(){
        return "Auoo";
    }

    
    
}


var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong);
 

// soal 2
class Clock {
    constructor({ template }) {
        this._template = template;
        this.timer;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        var output = this._template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);
        console.log(output);
    }
    stop(){
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  