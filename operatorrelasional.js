var a = 10, b = 20;
console.log(`a \t: ${a}`);
console.log(`a \t: ${b}`);
console.log(`a == b \t: ${a == b}`);
console.log(`a != b \t: ${a != b}`);
console.log(`a < b \t: ${a < b}`);
console.log(`a > b \t: ${a > b}`);
console.log(`a <= b \t: ${a >= b}`);
console.log(`a >= b \t: ${a >= b}`);

//operator rasional dalam blok pemilihan 
if(a < b){
    console.log(`a lebih kecil dari b`);
}

//operator rasional dalam blok pengulangan
var i = a;
while(i <= b){
    console.log(`${i}`); //menampilkan data ke layar tanpa disertai karakter baris baru (new line)

    //console.log(s) --> proses.stdout.write(s + \n)
    i += 2;
}