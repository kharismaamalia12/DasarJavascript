var a = 3;
var t = 4;

class Segitiga{
    constructor(a,b){
        //mendefinisikan properti
        this.alas = a;
        this.tinggi = t;
        }
    
        //daftar metode
        luas(){
            return this.alas * this.tinggi /2;
        }

        cetakPropert(){
            console.log(`obj.alas \t : ${obj.alas}`);
            console.log(`obj.tinggi \t : ${obj.tinggi}`);   
        }
}

class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t) //memanggil konstruktur kelas segitiga 

        //mendefinisikan properti baru
        this.warna = w;
    }

    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`warna \t : ${this.warna}`);
    }
}

//membuat objek dari kelas SegitigaWarna
let obj = new SegitigaWarna(a,t,'merah');
obj.cetakPropert();

//memanggil metode luas 
console.log(`luas \t: ${obj.luas()}`)