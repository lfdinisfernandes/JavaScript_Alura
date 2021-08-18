/*obj = {x: 1, y:2};

var obj2 = Object.create(obj); 
var obj3 = Object.create(obj2);

for(var prop in obj3 ){
    console.log( prop );
}

obj.x =22

console.log(obj2.x)
//console.log(Object.prototype);
//console.log(obj.toString())
*/
var o = { a:1, b:2, c:3, d:4};
console.log(Object.keys(o))

/*console.log(obj2);
console.log(obj3.n=2);
console.log(obj2.x);
*/