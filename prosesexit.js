let a = 7;
let b = 15;

if(b === 0){
    console.log('Kesalahan : Nilai B tidak boleh 0');
    process.exit(1);
}

c = a / b;
console.log(`${a} / ${b} = ${c}`);