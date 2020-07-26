/* B E N T U K   S E D E R H A N A N Y A */
function sum(...a){
    let total = 0.0;
    for(let elemen of a){
        total += elemen;
    }
    return total;
}

//parameter berupa array dengan dua argumen
console.log('sum([10,20]) : ' + sum([10,20]));

//parameter berupa array dengan tiga argumen
console.log('sum([10,20,30]) : ' + sum([10,20,30]));