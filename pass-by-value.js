function tukar(a,b){
    let c =a;
    a = b;
    b = c;
}

let x = 100, y = 200;

//menampilkan nilai x dan y sebelum ditukar
console.log('Sebelum ditukar');
console.log(`x : ${x}`);
console.log(`y : ${y}`);

//memanggil fungsi tukar
tukar(x,y);

//menampilkan nilai x dan y sesudah ditukar
console.log('\n Setelah ditukar');
console.log(`x : ${x}`);
console.log(`y : ${y}`);