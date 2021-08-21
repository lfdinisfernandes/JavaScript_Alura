(function(win, doc){
    'use strict'

    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Click no botão')
    },false);

    document.addEventListener('click', function(){
        alert( 'clicou no input')
    }, false);

})(window, document);












//-------123-----------
//var $inputs = doc.querySelector('#username');
//var $inputs = doc.querySelector('[name="nome-do-campo" ]');
//var $inputs = doc.querySelector('.class');
/*
    $inputUsername.value = "Luiz Felipe Dinis Fernandes";
    $inputPassword.value = "minhasenha";


    console.log( $inputUsername.Value, $inputPassword.value );
*/

// -----------122-------------
//  console.log(doc.getElementsByTagName('input') ) pega quantos <input>
//  console.log(doc.getElementsByclassName('a') ) pega todas <class> = a
//  console.log(doc.getElementById('my-link') ) pega uma id <a></a>
/*
    var name = prompt('qual o seu nome ? ');
    if (name)
        console.log('Olá ', name);
    else
    console.log('não respondeu :(');

    console.log('sempre');
    */