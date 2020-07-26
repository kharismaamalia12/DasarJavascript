var a = 3;
var b = 4;

function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x * x;
    }

    //memanggil fungsi lokal
    return c = Math.sqrt(kuadrat(a) + kuadrat(b));
}

console.log('Menghitung Sisi Miring Segitiga Siku-siku');

var c = hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);