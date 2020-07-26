var a = 3;
var t = 4;

class Segitiga{
    constructor(a,t){
        //mendefinisikan properti
        this.alas = a;
        this.tinggi = t;
    }

    //daftar metode
    luas(){
        return this.alas * this.tinggi / 2;
    }
}

//membuat objek dari kelas segitiga
let obj = new Segitiga(a,t);

console.log(`obj.alas \t : ${obj.alas}`);
console.log(`obj.tinggi \t : ${obj.tinggi}`);
console.log(`obj.luas \t : ${obj.luas()}`);