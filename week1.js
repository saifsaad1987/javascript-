// excercise 1
console.log("Hello");
console.log("hej");
console.log("shlonak");

// excercise 2
console.log("I'm awesome");

// excercise 3
var x;
console.log("the value of x will be: Undifiend");
console.log(x);
x = 5;
console.log("the value of x will be: 5");
console.log(x);

// excercise 4
var y ="saif";
console.log("the value of my string will be: Maher");
console.log(y);
y = "Tawila";
console.log("the value of my string will be: Tawila");
console.log(y);

// excercise 5
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
var m = Math.max(a,z);
console.log(m);

// excercise 6
var names =[];
console.log("the value of my array will be:[]");
console.log(names);
var favoriteAnimals =["cat","dog","bird","turtle"];
console.log(favoriteAnimals);
favoriteAnimals.push("baby pig");
console.log(favoriteAnimals);

// excercise 7
let myString = ["this is a test"];
console.log(myString);
var l = myString.length;
console.log(l);

// excercise 8
function compareType(a,b) {

if (typeof a == typeof b)
    {   
console.log(a, b, "are Same Type");
    }
else {
    console.log(a, b," are Not the Same Type");
    }   
}
let var1 = "ahmed ";
let var2 = 5;
let var3 = true;
let var4 = [1,2,3,4,5,6];
let var5 = 999;
console.log("the value of var1 is : " ,var1);
console.log("the value of var2 is : " ,var2);
console.log("the value of var3 is : " ,var3);
console.log("the value of var4 is : " ,var4);
console.log("the value of var5 is : " ,var5);
compareType(var1,var2);
compareType(var1,var3);
compareType(var4,var1);
compareType(var2,var3);
compareType(var2,var4);
compareType(var5,var2);
let foo = 3;
console.log("I think the type of Foo is Integer because I declare it and initialize 3 to it : " + foo);
console.log("The Type of my variable is Integer"+ typeof (foo));

// excercise 9
let number1 = 99;
let number2 = 29;
let number3 = 2;
console.log("the value of number1 is :"+ number1);
number1 = number1 % 2;
console.log("number1 % 2" , number1);
console.log("the value of number2 is :"+ number2);
number2 = number2 % 2;
console.log("number2 % 2 =", number2);
console.log("the value of number3 is :"+ number3);
number3 = number3 % 2;
console.log("number3 % 2 =",number3);

// excercise 10
   let alxArray = ["king ", 40, "malmö", true];
console.log("the array can store multiple Type of variables as shown next:", maherArray);
let num1 = 6 / 0;
let num2 = 10 / 0;
( num2 > num1 || num1 > num2) ?
    console.log("infinity can be compared"):
  ( num2 === num1) ? 
    console.log("positive infinity has always the same value"):
((num1 * -1) < num1) ?
    console.log("negative infinity is smaller than positive infinity"):
    
console.log("we can theoratically comapre infinities but there are 2 values of infinity positive and negative") ; 