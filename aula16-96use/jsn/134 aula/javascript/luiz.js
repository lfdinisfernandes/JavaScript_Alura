(function() {
    'use strict'

   function MyFunction(name, lastName) {
      this.name = name;
      this.lastName = lastName;
      this.age = '1.0.1';
   }

   MyFunction.prototype.fullName = function(){
        return this.name + " " + this.lastName;

    }
    MyFunction.prototype.age = 20;
    var Luiz = new MyFunction('Luiz', 'Felipe');
    MyFunction.prototype.age = 30;
    MyFunction.prototype.age = 40;

   console.log(Luiz.age);
})();












/* -------------this.----------
   function MyFunction(name, lastName) {
       this.fullName = name + " " + lastName;

   }

   var Luiz = new MyFunction('Luiz', 'Felipe');
   console.log(Luiz.fullName);
   */