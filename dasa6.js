var championship = "campeonato brasileiro";
var teams= ['Franca', 'ibiraci', 'claraval', 'itirapuao', 'minas', 'miguelops'];


/*console.log(championship )
console.log( 'Times que estão participando do campeonato: ', teams );
*/
function showTeamPosition (x) {
    var POSIÇÃO = x + 1

    if(x < 6 ){
    return "O time que está em "+ POSIÇÃO+ "º lugar é o "+ teams[x]
    }else{
        return "Não temos a informação do time que está nessa posição."
    }
}//console.log(showTeamPosition(1));

/*var um = 20;
while (num < 30) {
  console.log(num++);
} 
var num = 5;
while (num < 8){
   console.log(num++)
}

console.log(num)*/

function convertTohex(cor1){
    var hexa;
    switch (cor1) {
        case 'red':
          hexa = '#FF0000';
          break;
        case 'blue':
          hexa =  '#0000FF';
          break;
        case 'green':
          hexa = '#00FF00';
          break;
        case 'black':
          hexa = '#000000';
          break;
        case 'white':
          hexa = '#FFFFFF';
          break;
        default:
          return 'Não temos o equivalente hexadecimal para ' + cor1 + '.';
      }
      return 'O hexadecimal para a cor ' + cor1 + ' é ' + hexa + '.';
    }
    
    
    console.log(convertTohex('red'));
    console.log(' ');
    console.log(convertTohex('blue'));
    console.log(' ');
    console.log(convertTohex('green'));
    console.log(' ');
    console.log(convertTohex('black'));
    console.log(' ');
    console.log(convertTohex('white'));    
    console.log(' ');
    console.log(convertTohex('purple'));   
    console.log(' ');
    console.log(convertTohex('cyan'));
    console.log(' ');
    console.log(convertTohex('magenta'))
