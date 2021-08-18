/*var name = 'global';
(function(){
    var name = 'local main';
    console.log(name);
}) ();

console.log(name)

(function(){
    var mObjet = {
        myProperty: 1,
        init: function init(){
            return this;
        }
    };
    console.log(mObjet) 
}) (); 

(function(){
    function myFunction(){
        return this;
    }
    console.log( 'myfunction: ', myFunction() === window );

    var myObjct = {
        myProperty:  1,
        init: function init(){
            return this;
        }
    }
    console.log('myObject', myObjct.init())
}) (); 
*/

/*
(function(){
    function myFunction(){ 
    return this;
    }
    console.log( 'myFunction: ', myFunction(), myFunction() === window );

    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log( 'myObject', myObject.init(), myObject.init() === myObject );

    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor(); 
    console.log( 'MyContructor', constructor.prop1 );
    prop1 = "propriedade 1";
    console.log(window.prop1)
}) ();
*/

(function() {
    function myFunction(a , b) {
        return arguments[5];
    }
    console.log(myFunction(1, 2, 3, 4, 5))
})();