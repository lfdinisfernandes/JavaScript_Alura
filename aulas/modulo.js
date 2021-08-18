/*3 / 3 = 1
3 % 3 = 0
var inp = 0 
while (inp < 20){
    (inp++) % 2 === 0 ? console.log(inp): "";    
}
console.log("---------- ");
par = 0 
while(par < 20){
    par % 2 === 0 ? console.log(par): "";
    par++;
}
*/


var arr = [ 'Luiz Felipe', function(){}, null, {dog: "bil"}, true];
var qtd = arr.length

while(qtd > 0) {
    console.log(arr[ --qtd ])
    if( qtd === 3){
        console.log(arr[ qtd ].dog );
    }
}
//console.log(arr);