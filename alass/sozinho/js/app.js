(function(doc,win) {
   var $nome = doc.querySelector('[data-js="nome"]');
   //var $visor = doc.querySelector('[data-js="visor"]');

   Array.prototype.forEach.call($nome, function(button) {
    button.addEventListener('click', luiz, false)
   });
    function luiz() {
    alert(oi);
    }
    console.log(luiz());


})(window, document);