/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Context - Window Binding, this will always try to bind go window 
* 2. Implicit Binding occurs within objects and methods and is automatic
* 3. Explicit Binding is where .call(), .apply(), or bind() is called and forces
* the bind
* 4. New Binding is when a constructor function is used, "this" refers to the 
instance of the object that was created
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySomething(phrase){
    console.log(this);
    return phrase;
}
saySomething("Hi");
// Principle 2

// code example for Implicit Binding
const animal= {
    name: "Tiger",
    habitat: "Jungle",
    eats: "Animals", 
    speak: function(phrase){
        console.log(`I am a ${this.name} and ${phrase}`);
    }
}
animal.speak("I'm pissed!");

// Principle 3

// code example for New Binding
function Animal(phrase) {
    this.name = "Tiger",
    this.habitat = "Jungle",
    this.eats = "Animals", 
    this.speak = function(){
        console.log(`I am a ${this.name} and ${phrase}`);
    }
}
const tiger = new Animal("I'm hungry!");
const whiteTiger = new Animal("I'm cold!");
tiger.speak();
whiteTiger.speak();
// Principle 4

// code example for Explicit Binding
//assuming the code above:
tiger.speak.call(whiteTiger);
whiteTiger.speak.apply(tiger);

tiger.speak();
whiteTiger.speak();