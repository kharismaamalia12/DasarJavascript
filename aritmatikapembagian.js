var a = 10;
var b = 6;

function PembagianBulat(a,b){
    var c = a/b;
    if(c >= 0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}

console.log(`${a} / ${b} = ${PembagianBulat(a,b)}`);

//ATAU
function PB(a,b){
    var c = a/b;
    return(c >= 0)? Math.floor(c) : Math.ceil(c);
}

console.log(`${a} / ${b} = ${PB(a,b)}`);