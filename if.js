var x = 27;
var y = 0;
var z;

if (y == 0){
    console.log('Kesalahan : Nilai y tidak boleh 0');
    process.exit(1);
}

//jika menggunakan if else, dibawah ini ditaruh di else
z = x / y;
console.log(`${x} / ${y} = ${z}`);