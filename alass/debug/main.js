(function(){
    //'use strict';

    var arr = [
        { item: 'Arroz', price:'R$10', weight:'5kg'  },
        { item: 'Feijão', price:'R$20', weight:'2kg' },
        { item: 'Macarrão', price:'R$12', weight:'12kg' },
        { item: 'Carne', price:'R$200', weight:'1kg' }
    ];
    console.table(arr);
})();


/* -----caldcular o tempo que esta sendo preocessado 
    console.time('calculando tempo do for');
    for( var i =0;i < 1000; i++) {
        console.log('calculando...');
    }
    console.timeEnd( 'calculando tempo do for' );
*/