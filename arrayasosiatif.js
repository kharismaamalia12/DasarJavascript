//Array Asosiatif
let x = new Array();
 x['rpl'] ='Rekayasa Perangkat Lunak';
 x['tkj'] = 'Teknik Jaringan dan Komputer';

 for(key in x){
     console.log(key.toUpperCase() + '\t = ' + x[key]);
 }