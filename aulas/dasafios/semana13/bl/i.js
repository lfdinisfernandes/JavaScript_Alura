(function(){
    'use strict'
     
    console.log( 'O array em formato de string é:' );
    console.log([1, 2, 3, 4, 5].toString());


    var sul = ['Paraná', ' Santa Catarina', ' Rio Grande do Sul'];
    var suldeste = ['Espírito Santo', ' Minas Gerais', ' Rio de Janeiro', ' São Paulo'];

    console.log( '\nAlguns Estados do Brasil:' );
    var brasil = sul.concat(suldeste);
    //var brasil = sul + ", " + suldeste; 
    console.log(brasil);

    console.log( '\nMais estados adicionados:' );
    brasil.unshift('Acre', 'Amapá', 'Amazonas');
    console.log(brasil);

    console.log('\nEstado Removido: ');
    console.log(brasil.shift());
    console.log(brasil);

    console.log( '\nEstados do Sul do Brasil:' );
    var newSul = brasil.slice(2,5);
    console.log(newSul);


    console.log( '\nAlguns Estados do Brasil:' );
    console.log(brasil);

    var nordeste =[
        'Alagoas',
        'Bahia',
        'Ceará',
        'Maranhão',
        'Paraíba',
        'Pernanbuco',
        'Piauí',
        'Rio Grande do Norte',
        'Sergipe'
    ];

    console.log( '\nEstados do Nordeste:' );
    console.log(nordeste);


    var newSuldeste = brasil.splice(5);

   var brasil = brasil.concat(nordeste);
   console.log(brasil);

   console.log( '\nEstados em newSudeste:' );
   console.log(newSuldeste);

   console.log( '\nAlguns estados do Brasil:' );
   console.log(brasil);

   var newBrasil = []
    brasil.forEach(function (item, index) {
        newBrasil.push({
          id: index,
          estado: item,
        })
    });

    console.log( '\nnewBrasil agora com mais informações:' );
    console.log(newBrasil)

    console.log('\nTodos os estados de `brasil` tem mais de 7 letras?' )
    var every = brasil.every(function(item){
        return intem.length > 7;
    })
    console.log(
        every  
        ?'Sim, todos os estados tem mais de 7 letras!' 
        :'Nem todos os estados tem mais de 7 letras!'
    );
    
    
    /*
    var filter = map.filter(function (item, index) {
        return item.id % 2 === 0;
    })

    console.log( '\nEstados com ID par:' );
    console.log(filter)
   */
})();