/** Question 1
Looking at the function below, why is it print out 'hey arnold' instead of 
'hey amy', then fix it (please use technical vocabulary)

function was fixed by using the Object deep cloning method to convert the object to a regular JS text using the JSON.stringify method;
*/



function greet (person) {
    if (JSON.stringify(person) == JSON.stringify({ name: 'amy' })) {
      return 'hey amy'
    } else {
      return 'hey arnold'
    }
  }
  greet({ name: 'amy' });
​
/** Question 2
Write a function that returns an anonymous function, which transforms its 
input by adding a particular suffix at the end. 
​
add_ly = add_suffix("ly")
​
add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"
​
add_less = add_suffix("less")
​
add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"
 */

function processWord(word){
    return function suffix(suff){
      return word + suff;
    }
  }
  
  const processed = processWord('hope');
  let callIt = console.log(processed("lly"));
​
​
/** Question 3
I want my dog to bark(), but instead I get an error. Why?

Answer: the error says "bark is not a function" because it was not made a prototype of the constructor function Dog
*/
​
function Dog (name) {
    this.name = name
  }
  Dog.prototype.bark = function () { // now bark is a prototype in this constructor function
    console.log(this.name + ' says woof')
  }
  let fido = new Dog('fido')
  fido.bark()
​
/** Question 4
Define a repeatify function on the String object. The function 
accepts an integer that specifies how many times the string has 
to be repeated. The function returns the string repeated the number 
of times specified. For example:
*/ 
function Thestring(str){
    this.str = str;
  }
  
  Thestring.prototype.repitify = function(times){
    return this.str.repeat(times);
  }
  
  const test = new Thestring("moyo");
  console.log(test.repitify(12));




 
//console.log('hello'.repeatify(3)); // Output hellohellohello
​
​
​
/** Question 5
Write a function redundant that takes in a string str and returns 
a function that returns str.
​
Examples
const f1 = redundant("apple")
f1() ➞ "apple"
​
const f2 = redundant("pear")
f2() ➞ "pear"
​
const f3 = redundant("")
f3() ➞ ""
 */

function redundant(str){
    return function(){
        return str;
    }
}

const redundant_word = redundant('what');
console.log(redundant_word());

 
​

 /** Quesion 6
Create a function that takes a "base number" as an argument. This 
function should return another function which takes a new argument, 
and returns the sum of the "base number" and the new argument.
​
Please check the examples below for a clearer representation of the 
behavior expected.
​
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.
​
const plusFive = makePlusFunction(5)
​
plusFive(2) ➞ 7
​
plusFive(-8) ➞ -3


​
// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.
​
const plusTen = makePlusFunction(10)
​
plusTen(0) ➞ 10
​
plusTen(188) ➞ 198
​
plusFive(plusTen(0)) ➞ 15
  */

//Question 6a
function baseNumber(num){
  return function(num1){
    return num + num1;

  }
}

const calculation = baseNumber(15);
console.log(calculation(4));